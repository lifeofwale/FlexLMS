
$(document).ready(function(){
  $('#aside__toggle').click(function(){
    event.preventDefault();
      $('span.aside__menuname').toggle();
      $('img.aside__applogo').toggle();
      $('aside.aside').toggleClass('aside__width');
      $('main.main').toggleClass('main__width').toggleClass('main__offset');
  

  });
  $('#aside__toggle2').click(function(){
        $('aside.col-sm-2').toggleClass('aside__open');
  });
});
