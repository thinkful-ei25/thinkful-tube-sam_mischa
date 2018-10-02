/* global $ */
'use strict';
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromAPI(searchTerm, callback){
  const query = {
    part : 'snippet',
    q: `${searchTerm}`,
    key : 'AIzaSyBItVsoMU25394d1QMxKfHzokuEJOLB5qw'
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult(result) {
  return `<div>
  <iframe width="560" height="315" 
  src="https://www.youtube.com/embed/${result.id.videoId}" 
  frameborder="0"
  encrypted-media"></iframe>
   </div>`;
}

function displaySearchData(data){
  console.log(data);
  console.log(typeof data);
  console.log(data.items);
  const items = data.items;
  const results = items.map((item) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit(){
  $('.js-search-form').submit((event) => {
    event.preventDefault();
    const query = $(event.currentTarget).find('.js-query');
    const queryVal = query.val();
    $(event.currentTarget).find('.js-query').val('');
    getDataFromAPI(queryVal, displaySearchData);
  });

}

$(watchSubmit);