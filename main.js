$(document).ready(function(){

  var quote;
  var author;

  function getNewQuote(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response){
        quote= response.quoteText;
        author=response.quoteAuthor;
        $('#quote').text(quote);
        if (author){
          $('#author').text('said by ' + author);
        } else {
          $('#author').text('- Anonymous');
        }
    });
  }
             
             
  
  getNewQuote();

  $('.get-quote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });

  $('.share-quote').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--' + author));
  });
});
