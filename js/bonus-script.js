/*seleziono il container del menu.al click avvio una funzione che quando cliccherò sull'elemento triggera la classe al suo opposto ovvero se la funzione hide è display none diventerà display block */

$('.drop-down-container').click(function(){
  $(this).find('.dropDown-menu').toggleClass('hide');
})


/*aggiungendo la funzione hover in accoppiata alla funzione click otteniamo lo stesso comportamento dei menu originali*/
$('.drop-down-container').hover(
  function(){
    //mette in focus lo span che attiva il dropdown
    $(this).find('span').addClass('font-black');
    //mostra il menu
    $(this).find('.dropDown-menu').removeClass('hide');

  }, function(){
    //rimuove il focus dallo span che attiva il dropdown
    $(this).find('span').removeClass('font-black');
    //nasconde il menu
    $(this).find('.dropDown-menu').addClass('hide');
  }
);



//al click mette in focus la sezione personal o business
$('.go-to-area > a.personalArea').click(
  function(){
    $(this).addClass('font-black').next().removeClass('font-black');

});

$('.go-to-area > a.businessArea').click(
  function(){
    $(this).addClass('font-black').prev().removeClass('font-black');

});
