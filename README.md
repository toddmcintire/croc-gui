# croc-gui
croc-gui is a graphical user interface (GUI) for [croc](https://github.com/schollz/croc) for Windows.
## requirements
until future features are added currently croc-gui requires that `croc` be installed via powershell with [Chocolatey](https://chocolatey.org). 
run powershell as administrator
```
Set-ExecutionPolicy AllSigned; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

choco install croc
```

### functions 
#### isAdmin  
checks if currently ran as admin
```
isAdmin()
```

#### getExecution
returns the output of the Get-ExecutionPolicy powershell cmdlet
```
getExecution()
```

#### changerExecution
if getExecution is returned as restricted then it attempts to change it to allsigned if the user agrees
```
changerExecution()
```

#### installChoco
a test function to hopefully install choco one day, currently does not work.
```
installChoco()
```

#### isChocoInstalled()
returns 1 if choco is not installed and 0 if choco is installed
```
isChocoInstalled()
```

#### is_tool
checks weather `name` is on PATH and marched as executable and returns .
```
is_tool(name)
```
