// When DOM is loaded
$(document).ready(() => {
  
  // Takes in a tweet object, returns an <article> element containing the tweet
  const createTweetElement = tweetData => {
    
    // The tweet article which will be returned in the end
    const $tweet = $('<article>').addClass('tweet');

    // Creating the header and appending it to $tweet
    const $header = $('<header>');

    const $img = $('<img>').attr({
      src: tweetData.user.avatars,
      alt: `${tweetData.user.handle}-avatar`
    });

    $header.append($img);
    $header.append($('<span>').text(tweetData.user.name));
    $header.append($('<span>').text(tweetData.user.handle));

    $tweet.append($header);
  }
})
