'use strict';

function playJango() {
	return "document.getElementById('player_pp_icon').click()"
}

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

window.onload = function() {
  findAndPlayJango();
};
