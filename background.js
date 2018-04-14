//
// Maybe I could re add the popup so user could change the main key
//	Hmmm, but then I need to accept the javascript injetion as well
//
// I can see thre approachs here
//	- Pop up and every thing is dynamic, user add whatever he wants;
//	- Pop up with all available options in a combo box;
//	- No pop up, just try all the alternatives at once...
//
// I need to learn a bit more on Javascript, so I could create some better abstraction
//	and create a polimorphyc solution for each option
//

chrome.browserAction.onClicked.addListener(function(tab) {
	findAndRun("jango", play());
});

function playJango() {
	return "document.getElementById('player_pp_icon').click()";
}

function nextJango() {
	return "document.getElementById('player_ff_icon').click()";
}

function play() {
	return playJango();
}

function next() {
	return nextJango();
}

function findAndRun(tabUrl, toRun) {
	chrome.tabs.query({}, function(tabs) {
		for (var i=0; i<tabs.length; ++i) {
			if (tabs[i].url.includes(tabUrl)) {
				chrome.tabs.executeScript(
					tabs[i].id,
					{code: toRun});
			}
		}
	} );
}

chrome.commands.onCommand.addListener(function(command) {
        console.log(command);
	if ('playPause' === command || 'playPause2' === command) {
                findAndRun("jango", play());
        } else if ('next' === command || 'next2' === command) {
		findAndRun("jango", next());
	}
});

