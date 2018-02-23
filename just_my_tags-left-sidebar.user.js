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