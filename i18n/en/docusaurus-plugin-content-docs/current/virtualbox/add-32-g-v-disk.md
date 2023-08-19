# VirtualBox: Adding A 32 GB VirtualDisk


## VirtualBox: Adding A 32 GB VirtualDisk


![do23-001](../../static/img/legacy/do23-001.jpg)

## Storage Device Controller: SATA


![do23-002](../../static/img/legacy/do23-002.jpg)

## Create Disk Image File


![do23-003](../../static/img/legacy/do23-003.jpg)

## Virtual Hard Disk File Type
Select `VDI (VirtualBox Disk Image)`


![do23-004](../../static/img/legacy/do23-004.jpg)


![do23-005](../../static/img/legacy/do23-005.jpg)


* DISK SIZE: 
  * Enter `32 GB`

![do23-006](../../static/img/legacy/do23-006.jpg)


![do23-007](../../static/img/legacy/do23-007.jpg)


![do23-008](../../static/img/legacy/do23-008.jpg)

## Done


![do23-009](../../static/img/legacy/do23-009.jpg)

## Crosscheck `/dev/sdb`

* Account: **`root`**
* Run:

```bash
lsblk
```

![do23-013](../../static/img/legacy/do23-013.jpg)

## Partitioning 32GB

| DEVICE    | TYPE | SIZE     |
| --------- | ---- | -------- |
| `/dev/sdb1` | `ext4` | `10 MB`    |
| `/dev/sdb2` | `ext4` | `the rest` |


```
# START: Thu 29 Jun 2023 09:00
sync
# CLEAN OLD DISK
dd if=/dev/zero of=/dev/sdb bs=1M count=1
sync
# SFDISK is a script-oriented tool for partitioning.
sfdisk /dev/sdb <<< "
label: dos
device: /dev/sdb
unit: sectors
sector-size: 512
/dev/sdb1: type=83, start= 2048, size=20480
/dev/sdb2: type=83, start=22528
"
```


![do23-014](../../static/img/legacy/do23-014.jpg)

## Crosscheck Again /dev/sdb1 and /dev/sdb2

* Account: **`root`**
* Run:

```
lsblk
```


![do23-015](../../static/img/legacy/do23-015.jpg)


## VirtualDisk Format `/dev/sdb1`

* Account: **`root`**
* Run:

```
mkfs -v -t ext4 /dev/sdb1
```


![do23-016](../../static/img/legacy/do23-016.jpg)


## VirtualDisk Format /dev/sdb2

* Account: **`root`**
* Run:

```
mkfs -v -t ext4 /dev/sdb2

```


![do23-017](../../static/img/legacy/do23-017.jpg)

## Mounting /mnt/cbkadal

* Account: **`root`**
:::danger
  You are **NOT** `cbkadal`!
  
  Replace `cbkadal` with your account.
:::
* Run:

```
mkdir -pv /mnt/cbkadal

mount -v  /dev/sdb1 /mnt/cbkadal/

df /dev/sdb1
```


![do23-018](../../static/img/legacy/do23-018.jpg)

## Mounting `/mnt/lfs`

* Account: **`root`**
* Run:

```
mkdir -pv /mnt/lfs

mount -v  /dev/sdb2 /mnt/lfs/

df /dev/sdb2
```

![dospB-02](../../static/img/legacy/dospB-02.jpg)

## Add to file `/etc/fstab`

* Account: **`root`**
* Edit file `/etc/fstab` with your favorite editor, and add:

```
/dev/sdb1  /mnt/cbkadal ext4   defaults   1  1
/dev/sdb2  /mnt/lfs     ext4   defaults   1  1
```


![do23-019](../../static/img/legacy/do23-019.jpg)

```
Path: docs/virtualbox/add-32-g-v-disk
```