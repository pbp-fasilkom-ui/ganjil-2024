---
sidebar_position: 3
---
# Debian Guest Installation

## Installing Debian Gnu/Linux

* VirtualBox 
  `Name: DEB00-2`

![debVBOX-038](//img/legacy/debVBOX-038.jpg)


## START Install

* Select `START`

![debVBOX-039](//img/legacy/debVBOX-039.jpg)

![debVBOX-040](//img/legacy/debVBOX-040.jpg)

![debVBOX-041](//img/legacy/debVBOX-041.jpg)


## Debian Installer Menu

* Select `Graphical Install`

![debVBOX-042](//img/legacy/debVBOX-042.jpg)


### Select A Language

* Select `English`

![debVBOX-043](//img/legacy/debVBOX-043.jpg)


### Select Your Location

* `Other` (Or else)

![debVBOX-044](//img/legacy/debVBOX-044.jpg)


* `Asia` (Or else)

![debVBOX-045](//img/legacy/debVBOX-045.jpg)


* `Indonesia` (Or else)

![debVBOX-046](//img/legacy/debVBOX-046.jpg)


### Configure Locales

* Select `Australia: en_AU.UTF-8`
  * Australia is an English-speaking country with a 24-hour clock system.

![debVBOX-047a](//img/legacy/debVBOX-047a.jpg)


### Configure Keyboard

* Select `American English`

![debVBOX-048](//img/legacy/debVBOX-048.jpg)


![debVBOX-049](//img/legacy/debVBOX-049.jpg)


### Configure Network (e.g. cbkadal)

* Hostname: `cbkadal`

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-050](//img/legacy/debVBOX-050.jpg)


* Domain Name: `BLANK`

![debVBOX-051](//img/legacy/debVBOX-051.jpg)


### Setup Users and Passwords (e.g. cbkadal)

* ROOT password: `cbkadal`

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-052](//img/legacy/debVBOX-052.jpg)


* New User Name: `Cicak BinKadal`

:::danger
You are **NOT** `Cicak BinKadal`!
:::

![debVBOX-053](//img/legacy/debVBOX-053.jpg)


* Username: `cbkadal`

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-054](//img/legacy/debVBOX-054.jpg)


* Passwords (e.g. cbkadal)

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-055](//img/legacy/debVBOX-055.jpg)


### Configure The Clock

* Select `Western (Sumatera, Jakarta, West/Central Kalimantan)`

![debVBOX-056](//img/legacy/debVBOX-056.jpg)


### Partition Disk

![debVBOX-057](//img/legacy/debVBOX-057.jpg)


* Partitioning Method: 
  * Select `Guided -- use entire disk`

![debVBOX-058](//img/legacy/debVBOX-058.jpg)


* Scan Disk to Partitioning

![debVBOX-059](//img/legacy/debVBOX-059.jpg)


* Partitioning Scheme: 
  * Select `All files in one partition`

![debVBOX-060](//img/legacy/debVBOX-060.jpg)


* Select `Finish Partitioning`

![debVBOX-061](//img/legacy/debVBOX-061.jpg)


* Write to Disk: `Yes`

![debVBOX-062](//img/legacy/debVBOX-062.jpg)


### Install Base System

![debVBOX-063](//img/legacy/debVBOX-063.jpg)


### Configure The Package Manager

* `Scan Extra Media`: 
  * Select `NO`

![debVBOX-064](//img/legacy/debVBOX-064.jpg)


* `Debian Archive Mirror Country`: 
  * Select `Indonesia`

![debVBOX-065](//img/legacy/debVBOX-065.jpg)


* `Debian Archive Mirror`: 
  * Select `deb.debian.org`

![debVBOX-066](//img/legacy/debVBOX-066.jpg)


* HTTP Proxy: blank

![debVBOX-067](//img/legacy/debVBOX-067.jpg)


![debVBOX-068](//img/legacy/debVBOX-068.jpg)


### Configuring Popularity Contest

* The default is: `NO`; but there is nothing wrong if you choose `YES`!

![debVBOX-069](//img/legacy/debVBOX-069.jpg)


![debVBOX-070](//img/legacy/debVBOX-070.jpg)


### Software Selection

| Option | Selection |
|--------|-----------|
|`Debian Desktop Environment`| `NO`|
|`... GNOME`|`NO`|
|`SSH server`|`YES`|
|`standard system utility`|`YES`|

![debVBOX-071](//img/legacy/debVBOX-071.jpg)


![debVBOX-072](//img/legacy/debVBOX-072.jpg)


### Install The GRUB Boot Loader

* Install the GRUB Boot Loader to your primary drive: 
  * Select `YES`

![debVBOX-073](//img/legacy/debVBOX-073.jpg)


* Install the GRUB Boot Loader: 
  * Select `/dev/sda`

![debVBOX-074](//img/legacy/debVBOX-074.jpg)


![debVBOX-075](//img/legacy/debVBOX-075.jpg)


### Finish Installation

![debVBOX-076](//img/legacy/debVBOX-076.jpg)


![debVBOX-077](//img/legacy/debVBOX-077.jpg)


## Reboot

![debVBOX-078](//img/legacy/debVBOX-078.jpg)


* Select: `Debian GNU/Linux`

![debVBOX-079](//img/legacy/debVBOX-079.jpg)


## Test

### Test Login

* login: `YOUR ACCOUNT`
* password: `YOUR PASSWORD`

![debVBOX-082](//img/legacy/debVBOX-082.jpg)


### Substitute "ROOT"
  * Enter `ROOT` password

```
su -

```

### Test Network/Update (as `ROOT`)

```
apt-get update
apt-get dist-upgrade -y
```

### `poweroff` Shutdown

```
poweroff

```

![debVBOX-083](//img/legacy/debVBOX-083.jpg)


### `console` Shutdown

![debVBOX-084](//img/legacy/debVBOX-084.jpg)
```
Path: docs/virtualbox/debian-guest-installation
```