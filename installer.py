from asyncio.subprocess import PIPE
#from pickle import TRUE
import subprocess
import ctypes, sys
import time
#from shutil import which    -------changed to import below
import shutil
import tkinter as tk
import tkinter.filedialog, tkinter.messagebox
#from tkinter import *
#from tkinter.filedialog import askopenfile, askopenfiles
#from tkinter import messagebox
#import PySide6.QtWidgets as qt

def is_admin():
    """checks if user has administrator rights"""
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def getExecution():
    """returns the output of the Get-ExecutionPolicy powershell cmdlet"""
    result = subprocess.run(["C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\powershell.exe", "Get-ExecutionPolicy"], capture_output=True)
    print(str(result.stdout))
    return str(result.stdout)


def changerExecution():
    restVal = "b'Restricted\r\n'"
    restValEncoded = restVal.encode("unicode_escape").decode("utf-8")
    restrictedStatus = None

    if getExecution() == restValEncoded:
        print("Restricted")
        restrictedStatus = True
        val = input("permission to change? Y/N\n")
        yes = ['y','Y','yes','Yes']
        if val in yes:
            print("changing")
            if is_admin():
                # Code of your program here
                allsigned = subprocess.run(["C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\powershell.exe", "Set-ExecutionPolicy AllSigned"], capture_output=True)
                print(str(allsigned))
                time.sleep(5.0)
            else:
                # Re-run the program with admin rights
                ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)    
    else:
        print("Not restricted no need to change")
        restrictedStatus = False
    
    return "Restricted" if restrictedStatus == True else "Not restricted no need to change"


#TODO:  change from install choco to install croc until a better solution for installing choco can be worked out
def installChoco():
    """installs choco"""
    if is_admin():
        result = subprocess.Popen(["C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\powershell.exe","Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"])
        result.communicate()
    else:
        ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)
    return result.stdout

def installCroc():
    """installs croc with gui""" 
    response = tk.messagebox.askquestion("install auth", "Do I have your permission to install croc?")
    if response == "yes":
        tk.messagebox.showinfo("install auth accepted", "installation will now proceed")
        #TODO: complete function so that it installs croc with choco
        result = subprocess.run(["C:\\WINDOWS\\system32\\cmd.exe", "choco install croc"], check=True, stdout=PIPE)
        print(result.stdout)
        return result.stdout
    elif response == "no":
        tk.messagebox.showinfo("install auth declined", "installation will now quit")
    else:
        tk.messagebox.showinfo("install auth error", "unknown error quitting")



def isChocoInstalled():
    """returns the output of choco"""
    result = subprocess.run(["C:\\WINDOWS\\system32\\cmd.exe", "choco"], check=True, stdout=PIPE)
    print(result.stdout)
    return result.stdout


def is_tool(name):
    """
    Check whether `name` is on PATH and marked as executable.
    
    >>> is_tool('ls')
    True
    """
    return shutil.which(name) is not None

""" 
def exitIfChocoIsNotInstalled(toolOutput=is_tool("choco")):
    #if toolOutput is True then 
    if toolOutput == True:
        sys.exit("choco is not currently installed please install") 
"""

def chocoQuit():
    """shows error window and closes the program"""
    tk.messagebox.showerror("error", "choco is not installed, please install and rerun the program")
    sys.exit()


#TODO: send button
#needs to be able to select files
def file_select():
    filename = tk.filedialog.askopenfilenames()

    def sanatizePath(path):
        """removes the brackets from the string"""
        stringfile = str(path)
        removeComma = stringfile.replace(",","")
        removeQuote = removeComma.replace("'","")
        removeP1 = removeQuote.replace("(","")
        removeP2 = removeP1.replace(")","")
        path = removeP2
        return path
    
    if sys.platform.startswith('win32'):
        result = subprocess.run(["C:\\WINDOWS\\system32\\cmd.exe", "croc send" +  str(filename)])
        print(result)
    elif sys.platform.startswith('linux'):
        path = sanatizePath(filename)
        command = ["croc", "send", path]
        result = subprocess.run(command, shell=False) 
    elif sys.platform.startswith('darwin'):
        path = sanatizePath(filename)
        command = ["croc", "send", path]
        result = subprocess.run(command, shell=False)
    else:
        print("unknown platform")


#displays code in a text box
#displays sending progress bar
#TODO: recieve button
#acceptance of files
#displays recieving progress bar