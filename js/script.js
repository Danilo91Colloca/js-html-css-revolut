/*seleziono il container del menu.al click avvio una funzione che quando cliccherò sull'elemento triggera la classe al suo opposto ovvero se la funzione hide è display none diventerà display block */
$('.drop-down-container').click(function(){
  $(this).find('.dropDown-menu').toggleClass('hide');
})
