// when DOM loads
$(document).ready(() => {

  // tweet input area
  const $textArea = $('.new-tweet textarea');

  // when text is inputted (keyup)
  $textArea.on('keyup', function(e) {
   console.log(140 - $(this).val().length);
  })

})  