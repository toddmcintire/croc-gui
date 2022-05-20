//TODO: set text to ask if they want to install based on the OS
//TODO: show warning that they have not completed the prerequisites and must install them first.
//TODO: if yes, run install command and if no, close launcher window.
import 'zx/globals';

function osDetection() {
    let os = NL_OS;
     document.getElementById('question').innerHTML = 'do you want to run the install?';
    if (os === 'Windows') {
    }
    if (os === 'Linux') {
    }
    if (os === 'Darwin') {
        //TODO: check if brew is installed
        const brew = checkForProgram('brew');
        brew != null ? document.getElementById('response').innerHTML = 'brew is installed' : document.getElementById('response').innerHTML = 'brew is not installed';
        //TODO: check if port is installed
    }
}

void async function checkForProgram(program) {
    return which.sync(`${program}`, {nothrow: true});
}

Neutralino.init();
osDetection();