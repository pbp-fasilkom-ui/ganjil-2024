# Debian Guest Preparation

## Installing Debian Gnu/Linux

:::note

* When doing the installation, most of the options are **DEFAULT**. Possible different answers will be marked with **`ARROWS`**. 
* If you are in `Guided Mode`, switch to `Expert Mode`.
* These are just examples, the whole examples, and nothing but examples. So please help me, `GNU/Linux`! 
  
You might select other options based on your faith and religion *(i.e., kepercayaan and keyakinan masing-masing).*

:::

| Field | Param |
|---|---|
| Name | `DEB00-0`|
| Type | `Linux`|
| Version | `Debian (64 bit)` |
| Base Memory | `4096 MB`|
| Processors | `4` |
| Hard Disk |
| > Size | `24 GB`|
| > Type | `VDI`|

:::caution
## Expect the Unexpected

Sh*t sometimes happens!

![debVBOX-009](../../static/img/legacy/debVBOX-009.jpg)
:::

## Select: `New`

:::note

* When doing the installation, most of the options are **DEFAULT**. Possible different answers will be marked with **`ARROWS`**. 
* If you are in `Guided Mode`, switch to `Expert Mode`.

:::

![debVBOX-010](../../static/img/legacy/debVBOX-010.jpg)


### Virtual Machine Name and Operating Systems

:::note

* When doing the installation, most of the options are **DEFAULT**. Possible different answers will be marked with **`ARROWS`**. 
* If you are in `Guided Mode`, switch to `Expert Mode`.

:::

* Select: `Expert Mode`

![debVBOX-011](../../static/img/legacy/debVBOX-011.jpg)


| Field | Param |
|---|---|
| Name | `DEB00-0`|
| Type | `Linux`|
| Version | `Debian (64 bit)` |

![debVBOX-012](../../static/img/legacy/debVBOX-012.jpg)


### Hardware

:::note

* When doing the installation, most of the options are **DEFAULT**. Possible different answers will be marked with **`ARROWS`**. 
* If you are in `Guided Mode`, switch to `Expert Mode`.

:::

| Field | Param |
|---|---|
| Base Memory | `4096 MB`|
| Processors | `4` |

:::danger

Make sure that you don't cross the red line!

:::


![debVBOX-013](../../static/img/legacy/debVBOX-013.jpg)


### Hard Disk

Do not worry about having a 24 GB empty disk! An empty disk does not occupy much space.

| Field | Param |
|---|---|
| > Size | `24 GB`|
| > Type | `VDI`|


![debVBOX-014](../../static/img/legacy/debVBOX-014.jpg)


## Export OVA: `DEB00-0`

* Select: 
  * `Tools` -> `Export`
  * FINISH

![debVBOX-015](../../static/img/legacy/debVBOX-015.jpg)


## Rename `DEB00-0` to `DEB00-1`

![debVBOX-016](../../static/img/legacy/debVBOX-016.jpg)

* In `General`, click `Name: DEB00-0`
* Set `Name: DEB00-1`
* `OK`

![debVBOX-017](../../static/img/legacy/debVBOX-017.jpg)

## Fine Tunning

![debVBOX-018](../../static/img/legacy/debVBOX-018.jpg)


### General: Basic

| Field | Param |
|---|---|
| Name | `DEB00-0`|
| Type | `Linux`|
| Version | `Debian (64 bit)` |

![debVBOX-019](../../static/img/legacy/debVBOX-019.jpg)


### General: Advanced

| Field | Param |
|---|---|
| Shared Clipboard | `Bi-directonal`|
| Drag'n Drop | `Bi-directonal`|


![debVBOX-020](../../static/img/legacy/debVBOX-020.jpg)


### System: MotherBoard

| Field | Param |
|---|---|
| Base Memory | `4096 MB`|
| Boot Order | `Optical` -> `Hard Disk`|
| Chipset | `PIIX3` |
| TPM | `None` |
| Pointing Device | `USB Tablet` |
| Extended Feature | `Enable I/O APIC`|
|  | `Enable Hardware Clock in UTC Time`|


![debVBOX-021](../../static/img/legacy/debVBOX-021.jpg)


### System: Processor

| Field | Param |
|---|---|
| Processors | `4` |
| Execution Cap | `100%` |
| Extended Feature | `Enable PAE/NX`|

:::danger

Make sure that you don't cross the red line!

:::

![debVBOX-022](../../static/img/legacy/debVBOX-022.jpg)


### System: Acceleration

| Field | Param |
|---|---|
| Paravirtualization Interface | `Default` |
| Hardware Virtualization | `Enable Nesting Page` |

![debVBOX-023](../../static/img/legacy/debVBOX-023.jpg)


### Display: Screen

 Field | Param |
|---|---|
| Video Memory | `16 MB` |
| Monitor Count | `1` |
| Scale Factor | `150%` |
| Graphics Controller | `WMSVGA` |


![debVBOX-024](../../static/img/legacy/debVBOX-024.jpg)


### Storage: Devices: Controller: IDE

* REMOVE IDE CONTROLLER: (RIGHT CLICK)

![debVBOX-025](../../static/img/legacy/debVBOX-025.jpg)

![debVBOX-026](../../static/img/legacy/debVBOX-026.jpg)


### Storage: Devices: Controller: SATA

* Add Optical Drive

![debVBOX-027](../../static/img/legacy/debVBOX-027.jpg)


* Add ISO Disk Image File

![debVBOX-028](../../static/img/legacy/debVBOX-028.jpg)


You can download the Debian ISO file from the official Debian website at the following URL:
<https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/>


:::caution
* The ISO image
  is/was `debian-12.0.0-amd64-netinst.iso`
  --- but this is subject to change.
:::
![debVBOX-029](../../static/img/legacy/debVBOX-029.jpg)


* Choose ISO Image

![debVBOX-030](../../static/img/legacy/debVBOX-030.jpg)


* Done

![debVBOX-031](../../static/img/legacy/debVBOX-031.jpg)


### AUDIO
* Audio: OFF

![debVBOX-032](../../static/img/legacy/debVBOX-032.jpg)


### Network: Adapter 1

* Enable Network Adapter
  * Attachet to: NAT
  * Advanced:
    * Adapter Type: Intel Pro/1000 MT Desktop
    * Cable Connected: Checked
    * Port Forwarding (CLICK)

![debVBOX-033](../../static/img/legacy/debVBOX-033.jpg)


### Port Forwarding Rules (SSH)

| Name   | Protocol | Host IP   | Host Port | Guest IP  | Guest Port |
|---|---|---|---|---|---|
| Rule 1 | TCP      | 127.0.0.1 | 6022      | 10.0.2.15 | 22         |

![debVBOX-034](../../static/img/legacy/debVBOX-034.jpg)


## DONE `OK`

![debVBOX-035](../../static/img/legacy/debVBOX-035.jpg)


## EXPORT: `DEB00-1`

* TOOLS (CLICK)

![debVBOX-036](../../static/img/legacy/debVBOX-036.jpg)

:::note

* When doing the installation, most of the options are **DEFAULT**. Possible different answers will be marked with **`ARROWS`**. 

:::

* Virtual Machine: `DEB00-1`

![debVBOX-037](../../static/img/legacy/debVBOX-037.jpg)

```
Path: docs/virtualbox/debian-guest-preparation
```