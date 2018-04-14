
chrome.browserAction.onClicked.addListener(function(tab) {
	findAndPlayJango();
});

function playJango() {
	return "document.getElementById('player_pp_icon').click()"
}

chrome.commands.onCommand.addListener(function(command) {
	findAndPlayJango();
	alert("La" + cammand);
});

function findAndPlayJango() {
	chrome.tabs.query({}, function(tabs) {
		for (var i=0; i<tabs.length; ++i) {
			if (tabs[i].url.includes("jango")) {
				chrome.tabs.executeScript(
					tabs[i].id,
					{code: playJango()});
			}
		}
	} );
}

