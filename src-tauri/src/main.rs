// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use std::{io::Read, process::{Command, Stdio}};

#[tauri::command]
fn get_message(code: &str) -> String {
    let command = Command::new("croc")
            .arg("--yes")
            .arg(code)
            .output()
            .expect("croc command failed to start");
    
    let output = command.stdout;
    format!("{}", String::from_utf8(output).expect("error"))
}

//TODO resolve ChildStdout
#[tauri::command]
fn send_message(message: &str) -> String {
    let command = Command::new("croc")
            .arg("send")
            .arg("--text")
            .arg(message)
            .stdout(Stdio::piped())
            .spawn()
            .expect("croc command failed to start");

    let output = command.stdout.unwrap();
    format!("{}", String::from_utf8_lossy(&output))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_message, send_message])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
