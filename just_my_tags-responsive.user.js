// ==UserScript==
// @name         Steemit Just My Tags - Left Sidebar
// @version      0.1
// @description  Update sidebar menu to list only your tags
// @author       blervin
// @include      https://steemit.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

var tags = ['utopian-io','linux','steemsql','sql','linux','programming','coding','technology'];

function setMyTags(current_path){
	$(".Topics > option").each(function() {
		this.remove();
	});

	$(".Topics").append('<option value="/' + current_path + '/">All Tags</option>');
	$(".Topics").append('<option value="/' + current_path + '/"></option>');
	for (var i = 0, len = tags.length; i < len; i++) {
		$(".Topics").append('<option value="/' + current_path + '/' + tags[i] + '">' + tags[i] + '</option>');
	}
}

$("a").click(function() {
	var url = this.href;
	if(url.includes('created')){
		setMyTags('created');
	}

	if(url.includes('trending')){
		setMyTags('trending');
	}

	if(url.includes('hot')){
		setMyTags('hot');
	}

	if(url.includes('promoted')){
		setMyTags('promoted');
	}
});

setMyTags(window.location.pathname.split('/')[1]);