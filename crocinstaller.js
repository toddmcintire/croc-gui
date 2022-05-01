#!/usr/bin/env zx
//script to install croc based on os type
void async function test () {
	if (os.type() === `Darwin`) {
		const brew = which.sync('brew', {nothrow: true});
		const port = which.sync(`port`, {nothrow: true});
		brew != null
			? $`brew install croc`
			: port != null
				? $`sudo port selfupdate && sudo port install croc`
				: console.log(`please install either brew or port`); //add end case
	}
	if (os.type() === `Linux`) {
		//TODO: somehow check what type 
	}
	if (os.type() === `Windows_NT`) {
		var scoop;
		var choco = which.sync(`choco`, {nothrow: true});
		choco != null
			? $`choco install croc`
			: scoop != null
				? $`scoop install croc`
				: console.log(`please install either choco or scoop`); //add end case
	}
	//TODO: create function above that if all three faul 
}()
