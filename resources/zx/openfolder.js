#!/usr/bin/env zx
/* script to open folder based on specific os type */
const { os } = require("zx");

export async function openFolder(location) {
    // sets platform type to platform variable
    let platform = await os.platform();
    // changes to the location
    cd(`${location}`);
    // checks if platform is windows if it is run start .
    platform === "win32" ? $`start .` ? 
    // checks if platform is mac if it is run open
    platform === "darwin" : $`open` ?
    //TODO: figure out linux way of opening folder
    platform === "linux" : $`xdg-open` : console.log("platform not supported");

};