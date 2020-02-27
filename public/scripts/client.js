// 
// FUNCTIONS
// 

// Escapes unsafe characters and returns safe html. To prevent XSS
const escape = str => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Takes in a tweet object, returns an <article> element containing the tweet
const createTweetElement = tweetData => {

  // The tweet article element which will be returned in the end
  const $tweet = $('<article>').addClass('tweet');

  const daysSinceTweet = (Date.now() - tweetData.created_at) / 86400000;

  // The tweet element's inner html
  const htmlContent = `
    <header>
      <img src=${escape(tweetData.user.avatars)} alt="${escape(tweetData.user.handle)}-avatar">
      <span>${escape(tweetData.user.name)}</span>
      <span>${escape(tweetData.user.handle)}</span>
    </header>
    <p>${escape(tweetData.content.text)}</p>
    <footer>
      ${Math.round(daysSinceTweet)} days ago
      <span>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>
  `

  // Add the inner html to tweet and return it
  return $tweet.html(htmlContent);
};

// adds all tweets to #tweets-container
const renderTweets = tweetsDatabase => {

  // remove any tweets that are already in the container
  $('#tweets-container').empty();

  // turn each tweet in database into an html element, and append them to container
  for (const tweet of tweetsDatabase) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

// 
// WHEN DOM IS READY
// 

$(document).ready(() => {

  // shows/hides new tweet section when clicked the arrow icon on navbar
  $('nav i').on('click', () => {
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  });

  // handling new tweet form submit
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();

    const $errorMessage = $(this).children('h4');
    const $textArea = $(this).children('textarea');
    const inputText = $textArea.val();

    // hide error message in case it's in display
    $errorMessage.slideUp(50);

    // check if input is valid, show error message if it's not
    if (!inputText) {
      $('.tweet-error').text('You cannot tweet an empty text!');
      $errorMessage.slideDown(300);
      
    } else if (inputText.length > 140) {
      $('.tweet-error').text('Please make sure your tweet is under 140 characters!');
      $errorMessage.slideDown(300);
    
    } else { 
      // input is valid, serialize the data and send to server
      // on success, load tweets from the server and display on page
      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST',
        success: () => loadTweets(),
        error: (data, text, error) => console.error(error)
      })
      
      // clear textarea
      $textArea.val('');
    }
  })

  // GET tweets from the server and render them on the page
  const loadTweets = () => {
    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'JSON',
      success: tweets => renderTweets(tweets),
      error: (data, text, error) => console.error(error)
    })
  };

  // TESTING
  loadTweets();
})