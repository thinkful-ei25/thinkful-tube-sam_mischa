/* global $ */
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
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

//api
function getDataFromAPI(searchTerm, callback){
  const query = {
    part : 'snippet',
    q: `${searchTerm}`,
    key : 'AIzaSyBItVsoMU25394d1QMxKfHzokuEJOLB5qw'
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

//tubeSearch
function createItem(result){
  return {
    imageUrl : result.snippet.thumbnails.default.url,
    title: result.snippet.title,
    id: result.id.videoId
  };
}

//tubeSearch
function generateHtmlElement(result) {
  console.log('result: ' , result);
  const item = createItem(result);
  return `<div data-item-id=${item.id}>
    <h3>${item.title}</h3>
    <img src = ${item.imageUrl}></img>
   </div>`;
}

//tubeSearch
function render(data){
  const items = data.items;
  const results = items.map((item) => generateHtmlElement(item));
  $('.js-search-results').html(results);
}

//tubeSearch
function watchSubmit(){
  $('.js-search-form').submit((event) => {
    event.preventDefault();
    const query = $(event.currentTarget).find('.js-query');
    const queryVal = query.val();
    $(event.currentTarget).find('.js-query').val('');
    getDataFromAPI(queryVal, render);
  });

}

$(watchSubmit);