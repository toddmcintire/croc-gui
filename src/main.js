const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;
let sendInputEL;
let sendMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("get_message", { code: greetInputEl.value });
}

async function send_message() {
  sendMsgEl.textContent = await invoke("send_message", { message: sendInputEL.value});
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  sendInputEL = document.querySelector("#send-input");
  sendMsgEl = document.querySelector("#send-msg");
  document.querySelector("#send-form").addEventListener("submit", (e) => {
    e.preventDefault();
    send_message();
  });
});