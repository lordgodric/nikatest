$(document).ready(function() {
	$(".input-checkbox").click(function(){
		// Видалимо всі обрання із елементів input-checkbox 
		$(".input-checkbox").removeClass("checked"); 
		// Добавимо обраному елементу клас checked
       	$(this).addClass("checked");
       	
       	
    });
});