/* global $ api*/

'use strict';
const tubeSearch = (function() {

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
    return `<div data-item-id=${item.id} class='search-result'>
    <h3>${item.title}</h3> <a href='http://www.youtube.com/watch?v=${item.id}'>
    <img src = ${item.imageUrl} class='search-image'></img></a>
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
      api.getDataFromAPI(queryVal, render);
    });

  }
  return {
    watchSubmit: watchSubmit,
  };

}());