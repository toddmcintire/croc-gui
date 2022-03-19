import subprocess

#TODO: run proccess as admin somehow
def getExecution():
    """returns the output of the Get-ExecutionPolicy powershell cmdlet"""
    result = subprocess.run(["C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\powershell.exe", "Get-ExecutionPolicy"], capture_output=True)
    return str(result.stdout)
#TODO: function if execution is restricted and change it if user agrees to
#TODO: read output from powershell call to see if execution policy is set



restVal = "b'Restricted\r\n'"
restValEncoded = restVal.encode("unicode_escape").decode("utf-8")

if getExecution() == restValEncoded:
    print("Restricted")
    val = input("permission to change? Y/N\n")
    yes = ['y','Y','yes','Yes']
    if val in yes:
        print("changing")
        

else:
    print("Not restricted")