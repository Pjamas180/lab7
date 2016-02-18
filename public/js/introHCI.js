'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$(".btn").click(function() {
		ga("send", "event", "like", "click")});
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}