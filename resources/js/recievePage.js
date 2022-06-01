//GLOBALTODO
//TODO: ask for place to save the files otherwise save it in the downloads folder?
//TODO: upon entering code and clicking submit the program downlaods and shows progress until completeion

import { openFolder } from "../zx/openfolder";

/** Sets file install directory. */
async function setFileLocation() {
    return await Neutralino.os.showFolderDialog('Select installation directory');
}

async function createDownloadFolder(location) {
    Neutralino.filesystem.createDirectory(location + '/CrocDownload');
}

async function checkDownloadFolder(location) {
    await Neutralino.filesystem.readDirectory(location + '/CrocDownload') === NE_FS_NOPATHE ? createDownloadFolder(location) : console.log('folder already exists');
}
//TODO: download files
async function downloadFiles(code, location) {
    //change directory to the download folder
    
    //run command to download folder
    await Neutralino.os.execCommand(`croc ${code}`);

    //TODO: throw error if code is too short

    // opens files after download
    openFolder(location);
}


async function getCode() {
    // gets the code from the input form
    var code = document.getElementById("value").value;
    // displays the output of the code to the "text" div
    let crocCommand = await Neutralino.os.execCommand(`croc ${code}`);
    // sets crocCommand error to error variable
    let error = crocCommand.stdErr;
    
    //TODO: FIX THIS LINE 
    //let jsonStringerr = JSON.stringify(crocCommand.stdErr);
    document.getElementById("text").innerHTML = `${jsonStringerr}`;
}


Neutralino.init();