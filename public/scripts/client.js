// When DOM is loaded
$(document).ready(() => {
  
  // Takes in a tweet object, returns an <article> element containing the tweet
  const createTweetElement = tweetData => {

    const $tweet = $('<article>').addClass('tweet');

    const htmlContent = `
      <header>
        <img src=${tweetData.user.avatars} alt="${tweetData.user.handle}-avatar">
        <span>${tweetData.user.name}</span>
        <span>${tweetData.user.handle}</span>
      </header>
      <p>${tweetData.content.text}</p>
      <footer>
        10 days ago
        <span>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    `
    return $tweet.html(htmlContent);
    
    // // The tweet article element which will be returned in the end
    // const $tweet = $('<article>').addClass('tweet');

    // // Creating the header and appending it to $tweet
    // const $header = $('<header>');

    // const $img = $('<img>').attr({
    //   src: tweetData.user.avatars,
    //   alt: `${tweetData.user.handle}-avatar`
    // });

    // $header.append($img);
    // $header.append($('<span>').text(tweetData.user.name));
    // $header.append($('<span>').text(tweetData.user.handle));

    // $tweet.append($header);

    // // Creating the tweet text and appending it to $tweet
    // $header.append($('<p>').text(tweetData.content.text)) ;

    // // Creating the footer and appending it to $tweet
    // const $footer = $('<footer>');

    // const daysSinceTweet = (Date.now() - tweetData.created_at) / 86400000;
    // $footer.text(`${Math.round(daysSinceTweet)} days ago`);

    // const $iconsSpan = $('<span>');
    // $iconsSpan.append($('<i>').addClass('fas fa-flag'));
    // $iconsSpan.append($('<i>').addClass('fas fa-retweet'));
    // $iconsSpan.append($('<i>').addClass('fas fa-heart'));

    // $footer.append($iconsSpan);

    // $tweet.append($footer);

    // // Returning the tweet article
    // return $tweet;
  }

  // TESTING
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);
  
  console.log($tweet);
  $('#tweets-container').append($tweet);
})
