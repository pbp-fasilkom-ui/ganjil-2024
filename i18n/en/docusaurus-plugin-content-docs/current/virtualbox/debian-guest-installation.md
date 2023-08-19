---
sidebar_position: 3
---
# Debian Guest Installation

## Installing Debian Gnu/Linux

* VirtualBox 
  `Name: DEB00-2`

![debVBOX-038](/static/img/legacy/debVBOX-038.jpg)


## START Install

* Select `START`

![debVBOX-039](/static/img/legacy/debVBOX-039.jpg)

![debVBOX-040](/static/img/legacy/debVBOX-040.jpg)

![debVBOX-041](/static/img/legacy/debVBOX-041.jpg)


## Debian Installer Menu

* Select `Graphical Install`

![debVBOX-042](/static/img/legacy/debVBOX-042.jpg)


### Select A Language

* Select `English`

![debVBOX-043](/static/img/legacy/debVBOX-043.jpg)


### Select Your Location

* `Other` (Or else)

![debVBOX-044](/static/img/legacy/debVBOX-044.jpg)


* `Asia` (Or else)

![debVBOX-045](/static/img/legacy/debVBOX-045.jpg)


* `Indonesia` (Or else)

![debVBOX-046](/static/img/legacy/debVBOX-046.jpg)


### Configure Locales

* Select `Australia: en_AU.UTF-8`
  * Australia is an English-speaking country with a 24-hour clock system.

![debVBOX-047a](/static/img/legacy/debVBOX-047a.jpg)


### Configure Keyboard

* Select `American English`

![debVBOX-048](/static/img/legacy/debVBOX-048.jpg)


![debVBOX-049](/static/img/legacy/debVBOX-049.jpg)


### Configure Network (e.g. cbkadal)

* Hostname: `cbkadal`

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-050](/static/img/legacy/debVBOX-050.jpg)


* Domain Name: `BLANK`

![debVBOX-051](/static/img/legacy/debVBOX-051.jpg)


### Setup Users and Passwords (e.g. cbkadal)

* ROOT password: `cbkadal`

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-052](/static/img/legacy/debVBOX-052.jpg)


* New User Name: `Cicak BinKadal`

:::danger
You are **NOT** `Cicak BinKadal`!
:::

![debVBOX-053](/static/img/legacy/debVBOX-053.jpg)


* Username: `cbkadal`

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-054](/static/img/legacy/debVBOX-054.jpg)


* Passwords (e.g. cbkadal)

:::danger
You are **NOT** `cbkadal`!
:::

![debVBOX-055](/static/img/legacy/debVBOX-055.jpg)


### Configure The Clock

* Select `Western (Sumatera, Jakarta, West/Central Kalimantan)`

![debVBOX-056](/static/img/legacy/debVBOX-056.jpg)


### Partition Disk

![debVBOX-057](/static/img/legacy/debVBOX-057.jpg)


* Partitioning Method: 
  * Select `Guided -- use entire disk`

![debVBOX-058](/static/img/legacy/debVBOX-058.jpg)


* Scan Disk to Partitioning

![debVBOX-059](/static/img/legacy/debVBOX-059.jpg)


* Partitioning Scheme: 
  * Select `All files in one partition`

![debVBOX-060](/static/img/legacy/debVBOX-060.jpg)


* Select `Finish Partitioning`

![debVBOX-061](/static/img/legacy/debVBOX-061.jpg)


* Write to Disk: `Yes`

![debVBOX-062](/static/img/legacy/debVBOX-062.jpg)


### Install Base System

![debVBOX-063](/static/img/legacy/debVBOX-063.jpg)


### Configure The Package Manager

* `Scan Extra Media`: 
  * Select `NO`

![debVBOX-064](/static/img/legacy/debVBOX-064.jpg)


* `Debian Archive Mirror Country`: 
  * Select `Indonesia`

![debVBOX-065](/static/img/legacy/debVBOX-065.jpg)


* `Debian Archive Mirror`: 
  * Select `deb.debian.org`

![debVBOX-066](/static/img/legacy/debVBOX-066.jpg)


* HTTP Proxy: blank

![debVBOX-067](/static/img/legacy/debVBOX-067.jpg)


![debVBOX-068](/static/img/legacy/debVBOX-068.jpg)


### Configuring Popularity Contest

* The default is: `NO`; but there is nothing wrong if you choose `YES`!

![debVBOX-069](/static/img/legacy/debVBOX-069.jpg)


![debVBOX-070](/static/img/legacy/debVBOX-070.jpg)


### Software Selection

| Option | Selection |
|--------|-----------|
|`Debian Desktop Environment`| `NO`|
|`... GNOME`|`NO`|
|`SSH server`|`YES`|
|`standard system utility`|`YES`|

![debVBOX-071](/static/img/legacy/debVBOX-071.jpg)


![debVBOX-072](/static/img/legacy/debVBOX-072.jpg)


### Install The GRUB Boot Loader

* Install the GRUB Boot Loader to your primary drive: 
  * Select `YES`

![debVBOX-073](/static/img/legacy/debVBOX-073.jpg)


* Install the GRUB Boot Loader: 
  * Select `/dev/sda`

![debVBOX-074](/static/img/legacy/debVBOX-074.jpg)


![debVBOX-075](/static/img/legacy/debVBOX-075.jpg)


### Finish Installation

![debVBOX-076](/static/img/legacy/debVBOX-076.jpg)


![debVBOX-077](/static/img/legacy/debVBOX-077.jpg)


## Reboot

![debVBOX-078](/static/img/legacy/debVBOX-078.jpg)


* Select: `Debian GNU/Linux`

![debVBOX-079](/static/img/legacy/debVBOX-079.jpg)


## Test

### Test Login

* login: `YOUR ACCOUNT`
* password: `YOUR PASSWORD`

![debVBOX-082](/static/img/legacy/debVBOX-082.jpg)


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

![debVBOX-083](/static/img/legacy/debVBOX-083.jpg)


### `console` Shutdown

![debVBOX-084](/static/img/legacy/debVBOX-084.jpg)
```
Path: docs/virtualbox/debian-guest-installation
```