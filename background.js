
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

