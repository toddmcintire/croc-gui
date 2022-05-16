function setText() {
    document.getElementById('question').innerHTML = `do you want to run test command?`;
}

async function textConfirmation() {
    let  commandResponse = await Neutralino.os.execCommand('echo "hello world"');
    document.getElementById('response').innerHTML = commandResponse.stdOut;
}

Neutralino.init();
setText();