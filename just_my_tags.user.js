// ==UserScript==
// @name         Steemit Just My Tags
// @version      0.2
// @description  Update both menu to list only your tags
// @author       blervin
// @include      https://steemit.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==

(async () => {
	let mytags = await GM.getValue("tags");

	if(mytags == undefined){
		mytags = 'life,steemit';
	}

	var tags = mytags.split(',');

	$(".c-sidebar--left").remove();
	var newTags = '<aside class="c-sidebar c-sidebar--left">';
	newTags += '<div class="c-sidebar__module">';
	newTags += '<div class="c-sidebar__header">';
	newTags += '<h3 class="c-sidebar__h3">Just my tags...</h3></div>';
	newTags += '<div class="c-sidebar__content">';
	newTags += '<div class="c-sidebar__content">';
	newTags += '<ul class="c-sidebar__list">';

	for (var i = 0, len = tags.length; i < len; i++) {
		newTags += '<li class="c-sidebar__list-item"><a class="c-sidebar__link" href="/trending/' + tags[i] + '">' + tags[i] + '</a> <small><a href="/created/' + tags[i] + '">(new)</a></small></li>';
	}

	newTags += '<li class="c-sidebar__link"><a class="c-sidebar__link c-sidebar__link--emphasis" href="/tags">View all tags</a></li>';
	newTags += '</ul>';
	newTags += '</div>';
	newTags += '</div>';
	newTags += '</div>';
	newTags += '</aside>';

	$(".PostsIndex").append(newTags);

	tagsSidebar = '<div class="c-sidebar__module">';
	tagsSidebar += '<div class="c-sidebar__header"><h3 class="c-sidebar__h3">My tags</h3></div>';
	tagsSidebar += '<a class="c-sidebar__link tags_settings" href="#">Set tags</a>';
	tagsSidebar += '<div id="tags-form" padding-top:10px;" title="Set your tags">';
	tagsSidebar += '<label for="tags_input">Tags</label>';
	tagsSidebar += '<textarea type="text" name="tags_input" id="tags_input" placeholder="coding,programming"></textarea>';
	tagsSidebar += '<a href="#" class="save_tags">Save</a>';
	tagsSidebar += '</div>';
	tagsSidebar += '</div>';

	$(".c-sidebar--right").append(tagsSidebar);

	$('textarea#tags_input').html(mytags);
	$('#tags-form').hide();

	$(".save_tags").click(function() {
		var tagsValue = $('#tags_input').val();
		tagsValue = tagsValue.replace(/\s/g,'');
		GM.setValue("tags", tagsValue);
		$('#tags-form').hide();
		location.reload();
	});

	$(".tags_settings").click(function() {
		$('#tags-form').show();
	});

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
})();