---
title:  Windows PowerShell and Terminal
description:
  How to install Windows PowerShell and Windows Terminal
tagline: Windows, PowerShell, Terminal
---
# Windows Powershell and Terminal


## Installing PowerShell Version 7


```
winget search Microsoft.PowerShell
```

```
winget install --id Microsoft.Powershell --source winget
```


![dospA-01](../../static/img/legacy/dospA-01.jpg)


## Installing Windows Terminal (Recommended Way)


![dospA-02](../../static/img/legacy/dospA-02.jpg)


## Installing Windows Terminal (Alternate Way)
```
winget search  "Windows Terminal"
```

```
winget install "windows terminal" --source "msstore"
```


![dospA-03](../../static/img/legacy/dospA-03.jpg)


## Setting PowerShell 7


![dospA-04](../../static/img/legacy/dospA-04.jpg)


![dospA-05](../../static/img/legacy/dospA-05.jpg)


## PowerShell Font Size


![dospA-06](../../static/img/legacy/dospA-06.jpg)


## PowerShell Screen Size


![dospA-07](../../static/img/legacy/dospA-07.jpg)


## WinGet Update and Upgrade



Upgrading from PowerShell version 7.3.4 to version 7.3.5.



```
winget update

winget upgrade --id Microsoft.Powershell --source winget
```


![dospB-01](../../static/img/legacy/dospB-01.jpg)


## Uninstall



```
winget uninstall --id Microsoft.Powershell
```

```
Path: docs/debian-guest/windows-powershell-terminal
```