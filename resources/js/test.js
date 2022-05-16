function setText() {
    document.getElementById('question').innerHTML = `do you want to run test command?`;
}

async function textConfirmation() {
    let commandResponse = await Neutralino.os.execCommand('echo "hello world"');
    let os = NL_OS;
    document.getElementById('question').innerHTML = `${os}`;
    //document.getElementById('response').innerHTML = commandResponse.stdOut;
}

Neutralino.init();
setText();