// When DOM is loaded
$(document).ready(() => {
  
  // Takes in a tweet object, returns an <article> element containing the tweet
  const createTweetElement = tweetData => {

    // The tweet article element which will be returned in the end
    const $tweet = $('<article>').addClass('tweet');

    const daysSinceTweet = (Date.now() - tweetData.created_at) / 86400000;

    // The tweet element's inner html
    const htmlContent = `
      <header>
        <img src=${tweetData.user.avatars} alt="${tweetData.user.handle}-avatar">
        <span>${tweetData.user.name}</span>
        <span>${tweetData.user.handle}</span>
      </header>
      <p>${tweetData.content.text}</p>
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
