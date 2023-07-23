---
sidebar_position: 3
---

# UTM MacOS Silicon: How to compile Linux Kernel on a Debian Guest

## Debian Packages

* See [`https://osp4diss.vlsm.org/osp-103.html`](https://osp4diss.vlsm.org/osp-103.html) for more details.

## Download Latest STABLE Kernel

* Fetch the latest STABLE kernel from [`https://kernel.org`](https://kernel.org).

```
# START =============================================================
STABLE=$(wget -O - -o /dev/null https://www.kernel.org/finger_banner | awk '/stable/ {print $NF; exit}')   
MAJOR=$(echo $STABLE | cut -d. -f1)
URL="https://kernel.org/pub/linux/kernel/v$MAJOR.x"
KERNEL="linux-$STABLE.tar.xz"
TARBALL="linux-$STABLE.tar"
PGP="linux-$STABLE.tar.sign"
KURL="$URL/$KERNEL"
PURL="$URL/$PGP"

# ===================================================================
# Wget the latest kernel stable version
wget -c $KURL
# ===================================================================
# Wget the signature
wget -c $PURL
# ===================================================================
# Locate Keys
gpg --locate-keys torvalds@kernel.org gregkh@kernel.org
```


## Sign Key (optional)

```
gpg --sign-key gregkh@kernel.org
```

## Uncompress the file and verify

```
# ===================================================================
# Uncompress
unxz $KERNEL
# Verify
gpg --verify $PGP $TARBALL
```

## Extract TAR file
```
# ===================================================================
tar xf $TARBALL
# ===================================================================
cd linux-$STABLE
```

## Overkilled Cleaning Habit

Once in a while, some Bozo will ask about why not "make distclean,"
or "make mrproper," or "make clean."
Ok, this is the way! 

```
make distclean; make mrproper; make clean;
```

## ARM64 Option 1: Reusing ".config" files

:::caution
* If copying a **wrong** `.config` file,
  you might create a massive kernel with huge modules.
  * Consider copying a working `.config` file from the `/boot/` directory.
  * Or, try to [download this ".config" file](assets/configs/config-linux-kernel-arm64.txt)
    * See also [Linux/ARM64 Kernel Config for UTM](010.md).
  * Or, try to reuse any `.config` file
:::

* Run:
```
yes "" | make oldconfig
```

## ARM64 OPTION 2: A ".config" file from scratch
* If OPTION 1 failed, consider making a `.config` file from scratch with:
```
cp arch/arm64/configs/defconfig .
yes "" | make oldconfig
```

## Menuconfig
```
make menuconfig
```


### E.g., for `cbkadal`
```
General setup  --->
  (-cbkadal-10) Local version - append to kernel release
  Kernel compression mode (XZ)  --->
  (cbkadal) Default hostname
  <*> Kernel .config support
  [*] Enable access to .config through /proc/config.gz
  <*> Enable kernel headers through /sys/kernel/kheaders.tar.xz
Processor type and features  --->
  [ ] EFI runtime service support
Device Drivers --->
  Firmware Drivers --->
    [*] Disable EFI runtime services support by default
File systems  --->
  <*> FUSE (Filesystem in Userspace) support
  <*>   Character device in Userspace support
  <*>   Virtio Filesystem
Kernel hacking  --->
  Compile-time checks and compiler options  --->
    [*] Install uapi headers to usr/include
```


## Compile (make)
```
time make
```

* FYI Compile Time:
  * (Linux) Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz
    * real      3m5.825s
    * user      14m51.339s
    * sys       1m59.721s


## Install
* User: `root`
  * Use `sudo` if you wish.
  * Change Directory (cd) to the linux kernel source!
```
# USER: ROOT ============
make modules_install

make install

make headers_install INSTALL_HDR_PATH=/usr
```


## Known Boot Errors
```
ata1.00: Read log 0x00 page 0x00 failed, Emask 0x1
```


## Linux Firmware
* URL: [`https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/`](https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git)
  * E.g. TARBALL `linux-firmware-20220509.tar.gz`
    * open the TARBALL
    * Go to folder `linux-firmware-20220509/`
    * Copy the missing modules into `/lib/firmware/`. E.g. (ROOT),

```
cp -r i915/ /lib/firmware/
cp -r tigon/ /lib/firmware/
cp -r e100/ /lib/firmware/
cp -r rtl_nic/ /lib/firmware/
```


## Old Modules
* You have to delete old modules `/lib/modules` and old config `/boot/` files manually.
  Do not forget to `update-grub`.
* Visit (ROOT):

```
cd /lib/modules/
ls -al
cd /boot/
ls -a
```

```
Path: docs/utm/compile-linux-kernel-macos
```