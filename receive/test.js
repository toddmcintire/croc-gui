// get the system platform using node.js
var os = require('os');
const { spawn } = require('node:child_process');
//document.write('You are running on ', os.platform());

// ls
function test () {
  const ls = spawn('ls', ['-lh', '/usr']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    document.getElementById("p1").innerHTML = `${data}`;
  });

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}