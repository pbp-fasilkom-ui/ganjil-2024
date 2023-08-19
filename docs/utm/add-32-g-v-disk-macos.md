---
sidebar_position: 2
---

# UTM MacOS Silicon: Adding A 32 GB VirtualDisk

## UTM MacOS Silicon: Adding A 32 GB VirtualDisk

![do23-010](/static/img/legacy/do23-010.jpg)

* DISK SIZE (/dev/vdb): `32 GB`

![do23-011](/static/img/legacy/do23-011.jpg)

![do23-012](/static/img/legacy/do23-012.jpg)

## Crosscheck /dev/vdb

* Account: `root`
* Run: `lsblk`

```
root:~# lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sr0     11:0    1 1024M  0 rom
vda    254:0    0   24G  0 disk
|-vda1 254:1    0  512M  0 part /boot/efi
|-vda2 254:2    0 22.5G  0 part /
`-vda3 254:3    0  976M  0 part [SWAP]
vdb    254:16   0   32G  0 disk

root:~#
```

## VirtualDisk Format

* Account: `root`
* Run: `mkfs -v -t ext4 /dev/vdb`

```
root:~# mkfs -v -t ext4 /dev/vdb

mke2fs 1.46.2 (28-Feb-2021)
fs_types for mke2fs.conf resolution: 'ext4'
Discarding device blocks: done
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
2097152 inodes, 8388608 blocks
419430 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=2155872256
256 block groups
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Filesystem UUID: 8e998d63-f3b1-4c1f-b75e-a0f25febc128
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000, 7962624

Allocating group tables: done
Writing inode tables: done
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done

root:~#
```

## Mounting /mnt/lfs

* Account: `root`
* Run: 
`mkdir -pv /mnt/lfsmount -v /dev/vdb /mnt/lfsdf /dev/vdb`

```
root:~# mkdir -pv /mnt/lfs

mkdir: created directory '/mnt/lfs'

root:~# mount -v /dev/sdb /mnt/lfs

mount: /mnt/lfs: special device /dev/sdb does not exist.

root:~# mount -v /dev/vdb /mnt/lfs

mount: /dev/vdb mounted on /mnt/lfs.

root:~# df /dev/vdb

Filesystem     1K-blocks  Used Available Use% Mounted on
/dev/vdb        32716560    24  31022432   1% /mnt/lfs

root:~#
```

## Add to file /etc/fstab

* Account: `root`
* Edit file `/etc/fstab` with your favorite editor, and add:

```
/dev/vdb  /mnt/lfs ext4   defaults   1  1
```

```
Path: docs/utm/add-32-g-v-disk-macos
```