// This is just a sample app. You can structure your Neutralinojs app code as you wish.
// This example app is written with vanilla JavaScript and HTML.
// Feel free to use any frontend framework you like :)
// See more details: https://neutralino.js.org/docs/how-to/use-a-frontend-library




function newPage() {
    //spawn new window
    Neutralino.window.create('/html/testpage.html', {
        title: "new window page",
        width: 400,
        height: 400,
        exitProcessOnClose: true
    });
     //as if they want to run command
     //document.getElementById('testZX').innerHTML = `do you want to run test command?`;
     //run command
     //maybe a notification if it succeds?
     //maybe display output on screen?
}


function testZX() {
    //spawn new window
    Neutralino.window.create('/html/testZX.html', {
        title: "ZX test page",
        width: 400,
        height: 400,
        exitProcessOnClose: true
    });
}


//send page
function sendPage() {
    //spawns a new window
    Neutralino.window.create('/html/send.html', {
        // set page for new window
        title: "send page",
        // set width and height for new window
        width: 400,
        height: 400,
        // makes so that the window closes when the process exits
        exitProcessOnClose: true
    });
}

function recievePage() {
    Neutralino.window.create('/html/recieve.html', {
        title: "recieve page",
        width: 400,
        height: 400,
        exitProcessOnClose: true
    });
}

//recieve page

//default code

// function that shows basic info in the "info" div in index.html
// function showInfo() {
//     document.getElementById('info').innerHTML = `
//         ${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS}
//         <br/><br/>
//         <span>server: v${NL_VERSION} . client: v${NL_CVERSION}</span>
//         `;
// }

// function that when button is clicked it opens a webpage to the provided link
// function openDocs() {
//     Neutralino.os.open("https://neutralino.js.org/docs");
// }

// function that when button is clicked it opens a webpage to the provided link
// function openTutorial() {
//     Neutralino.os.open("https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj");
// }

function setTray() {
    if(NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            {id: "VERSION", text: "Get version"},
            {id: "SEP", text: "-"},
            {id: "QUIT", text: "Quit"}
        ]
    };
    Neutralino.os.setTray(tray);
}

function onTrayMenuItemClicked(event) {
    switch(event.detail.id) {
        case "VERSION":
            Neutralino.os.showMessageBox("Version information",
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
            break;
        case "QUIT":
            Neutralino.app.exit();
            break;
    }
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
Neutralino.events.on("windowClose", onWindowClose);

if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray();
}

showInfo();
showNumber(number);
