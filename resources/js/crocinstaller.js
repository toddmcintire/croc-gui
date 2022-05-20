#!/usr/bin/env zx
//script to install croc based on os type
void async function test() {

	function endCase() {
		const install = question(`Would you like to try to install via the instalall script? Y/N `);
		const yes = [`YES`, `Yes`, `yes`, `Y`, `y`];
		const no = [`NO`, `No`, `no`, `N`, `n`];
		install.includes(yes) === true
			? $`curl https://getcroc.schollz.com | bash`
			: install.includes(no) === true
				? //continue
				: //error not a proper responce;
	}

	if (os.type() === `Darwin`) {
		const brew = which.sync('brew', {nothrow: true});
		const port = which.sync(`port`, {nothrow: true});
		brew != null
			? $`brew install croc`
			: port != null
				? $`sudo port selfupdate && sudo port install croc`
				: console.log(`please install either brew or port`), endCase();
	}
	if (os.type() === `Linux`) {
		//TODO: somehow check what type 
	}
	if (os.type() === `Windows_NT`) {
		let scoop;
		const choco = which.sync(`choco`, {nothrow: true});
		choco != null
			? $`choco install croc`
			: scoop != null
				? $`scoop install croc`
				: console.log(`please install either choco or scoop`), endCase();
	}
}()
