/* global $ tubeSearch*/
// in tubeSearch.js ==> renders // event handlers
// in api.js ==> call to api and modules
// in index.js ==> calling tubeSerach.bindeventlistener tubesearch.render

// -1 - user plugs in search in input form
// -2 - user presses submit button
// -3 - website fetches youtube api results passing in searchterm
// 4 - we take / parse data from youtube api
//    -- push into store
// 5 - we read item from store and create html item 
// 6 - we push item to htmlItem array
// 7 - rendering htmlItms array to page
'use strict';

$(document).ready(function(){
  tubeSearch.watchSubmit();
});







