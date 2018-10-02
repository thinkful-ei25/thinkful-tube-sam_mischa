/* global $ */

'use strict';
const api = (function (){
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

  return {
    getDataFromAPI
  };
}() );