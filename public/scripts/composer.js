// When DOM loads
$(document).ready(() => {

  // detect any scrolling
  $(window).scroll(function() {

    // check if we are all the way to the top
    // if yes, show the 'write a new tweet' on navbar, hide scroll up button on bottom right
    if ($(this).scrollTop() === 0) {
      $('nav span:nth-child(2)').show(200);
      $('.scroll-up').hide(200)
  
      // if no, do vice versa
    } else {
      $('nav span:nth-child(2)').hide(200);
      $('.scroll-up').show(200)
    }
  })

  // when pressed scroll-up button, scroll up and focus on new-tweet form
  $('.scroll-up').click(() => {
    $(window).scrollTop(0);
  })
})