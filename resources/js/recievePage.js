//GLOBALTODO
//TODO: ask for place to save the files otherwise save it in the downloads folder?
//TODO: upon entering code and clicking submit the program downlaods and shows progress until completeion

/** Sets file install directory. */
async function setFileLocation() {
    return await Neutralino.os.showFolderDialog('Select installation directory');
}

//TODO: get code from html

async function getCode() {
    
}

//TODO: check if code is correct
//TODO: if code is correct do below
//TODO: create new folder for downloads
//TODO: download files
//TODO: display 


async function recieveCode() {
    // gets the code from the input form
    var code = document.getElementById("value").value;
    // displays the output of the code to the "text" div
    let crocCommand = await Neutralino.os.execCommand(`croc ${code}`);
    let error = crocCommand.stdErr;
    //TODO: FIX THIS LINE 
    let jsonStringerr = JSON.stringify(crocCommand.stdErr);
    let jsonStringout = JSON.stringify(crocCommand.stdOut);
    document.getElementById("text").innerHTML = `${jsonStringerr}`;
}

Neutralino.init();