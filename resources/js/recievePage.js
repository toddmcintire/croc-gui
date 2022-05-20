async function recieveCode() {
    // gets the code from the input form
    var code = document.getElementById("value").value;
    // displays the output of the code to the "text" div
    let crocCommand = await Neutralino.os.execCommand(`croc ${code}`);
    let error = crocCommand.stdErr;
    //TODO: FIX THIS LINE let jsonString = JSON.stringify(crocCommand.stdErr);
    document.getElementById("text").innerHTML = `${jsonString}`;;
}
Neutralino.init();