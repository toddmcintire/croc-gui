#!/usr/bin/env zx

function displayText() {
    document.getElementById('question').innerHTML = "FLIPPER FLIP FLOP";
}
function testZXFunc() {
    void async function() {
        var response = await $`ls`;
        document.getElementById('answer').innerHTML = response;
    }();
}

Neutralino.init();
displayText();