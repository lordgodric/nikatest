$(document).ready(function() {
	// Чекбокс
	$(".input-checkbox").click(function(){
		// Видалимо всі обрання із елементів input-checkbox 
		$(".input-checkbox").removeClass("checked"); 
		// Добавимо обраному елементу клас checked
       	$(this).addClass("checked");
    });

	// Перемикання кнопки "Свернуть" на "Розвернуть" і змінна іконки
	$(".toggle").click(function(){
    	$(".middle").slideToggle(400);
    	if ($(".toggle-map").text() == 'Свернуть ') {
    		$(".toggle-map").text('Развернуть ')
    		$(".hide-img").attr('src','../img/down-arrowhead.png');
    	} else if($(".toggle-map").text() == 'Развернуть '){
    		$(".toggle-map").text('Свернуть ')
    		$(".hide-img").attr('src','../img/up-arrowhead.png');
    	}
    });
    

    
    
});