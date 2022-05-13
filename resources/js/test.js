function setText() {
    document.getElementById('question').innerHTML = `do you want to run test command?`;
}

function textConfirmation() {
    //let commandResponse = await Neutralino.os.execCommand('echo "Hello World!"');
    document.getElementById('response').innerHTML = `${commandResponse.stdOut}`;
}

Neutralino.init();
setText();