import subprocess
import ctypes, sys
import time

def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def getExecution():
    """returns the output of the Get-ExecutionPolicy powershell cmdlet"""
    result = subprocess.run(["C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\powershell.exe", "Get-ExecutionPolicy"], capture_output=True)
    print(str(result.stdout))
    return str(result.stdout)
#TODO: function if execution is restricted and change it if user agrees to
#TODO: read output from powershell call to see if execution policy is set


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
