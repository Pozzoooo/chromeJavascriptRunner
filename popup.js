'use strict';

window.onload = function() {
  chrome.tabs.executeScript(
    null,
    {code: 'document.getElementById("player_pp_icon").click()'});
};

