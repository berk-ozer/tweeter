// when DOM loads
$(document).ready(() => {

  const $textArea = $('.new-tweet textarea');

  // updates the character counter every time text is inputted
  $textArea.on('keyup', function(e) {
    
    const remainingChars = 140 - $(this).val().length;

    $(this).siblings('.counter').text(remainingChars);
  })

})  