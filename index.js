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
  return ``;
}

function watchSubmit(){
  $('.js-search-form').submit((event) => {
    event.preventDefault();
    const query = $(event.currentTarget).find('.js-query');
    const queryVal = query.val();
    $(event.currentTarget).find('.js-query').val('');
  });

}

watchSubmit();