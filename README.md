# croc-gui
croc-gui is a graphical user interface (GUI) for [croc](https://github.com/schollz/croc) for Windows, Mac and Linux.
## requirements
***
You will need to install [croc](https://github.com/schollz/croc) based on your devices method, There is some intructions below but its a good idea to check [croc's](https://github.com/schollz/croc) page directly and verify.

## Installation
***

### Windows
until future features are added currently croc-gui requires that `croc` be installed via powershell with [Chocolatey](https://chocolatey.org). 
run powershell as administrator
```
Set-ExecutionPolicy AllSigned; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

and then install 

```
choco install croc
```

### Mac
For apple devices its reccomended you install croc with [homebrew](https://brew.sh)
```
brew install croc
```
### Linux




## Develop
***
