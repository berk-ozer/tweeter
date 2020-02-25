// when DOM loads
$(document).ready(() => {

  const $textArea = $('.new-tweet textarea');

  // updates the character counter every time text is inputted
  $textArea.on('keyup', function() {

    const $charCounter = $(this).siblings('.counter');
    const remainingCharCount = 140 - $(this).val().length;

    $charCounter.text(remainingCharCount);

    // makes character counter red if over character limit
    if (remainingCharCount < 0) {
      $charCounter.addClass('over-char-limit');

    } else {
      $charCounter.removeClass('over-char-limit');
    }
  });

});