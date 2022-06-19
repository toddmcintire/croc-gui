//GLOBALTODO
//TODO: ask for place to save the files otherwise save it in the downloads folder?
//TODO: upon entering code and clicking submit the program downlaods and shows progress until completeion

import { openFolder, cd } from "../../node_modules/zx/zx.mjs";

/* Sets file install directory. */
async function setFileLocation() {
    return await Neutralino.os.showFolderDialog('Select installation directory');
}

function testLocation() {
    let entry = await Neutralino.os.showFolderDialog('Select installation directory');
    console.log('You have selected:', entry);
}

/* creates "CrocDownload" folder */
async function createDownloadFolder(location) {
    await Neutralino.filesystem.createDirectory(location + '/CrocDownload');
}

/* sets active loaction to users downloads folder then calls createDownloadFolder and cd's into it. */
async function changeDirectory(){
    let downloadPath = await Neutralino.os.getPath('downloads');
    createDownloadFolder(downloadPath);
    cd(`${downloadPath}/CrocDownload`);
}

/* checks specified location if CrocDownload exists. if it does not it creates it, if it does then outputs to console that folder exists */
async function checkDownloadFolder(location) {
    await Neutralino.filesystem.readDirectory(location + '/CrocDownload') === NE_FS_NOPATHE ? createDownloadFolder(location) : console.log('folder already exists');
}


//TODO: download files
async function downloadFiles(code, location) {
    //change directory to the download folder
    
    //run command to download folder
    await Neutralino.os.execCommand(`croc --yes ${code}`);

    //TODO: throw error if code is too short

    // opens files after download
    openFolder(location);
}


async function getCode() {
    // gets the code from the input form
    var code = document.getElementById("value").value;
    // displays the output of the code to the "text" div
    document.getElementById("text").innerHTML = code;
}


Neutralino.init();