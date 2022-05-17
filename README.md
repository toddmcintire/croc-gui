# croc-gui
croc-gui is a graphical user interface (GUI) for [croc](https://github.com/schollz/croc) for Windows.
## requirements

***

until future features are added currently croc-gui requires that `croc` be installed via powershell with [Chocolatey](https://chocolatey.org). 
run powershell as administrator
```
Set-ExecutionPolicy AllSigned; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

choco install croc
```

For apple devices install with homebrew

```
brew install croc
```

## installation

***

for windows

for mac

for linux




## Develop
***

in order to start working on croc-gui you will need to get your own version of the neutralinojs binaries, the easiest way to do so is to create a new blank project with npx and then copy the `bin` folder into the project folder.

```
npx @neutralinojs/neu create testProject
```