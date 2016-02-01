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
    	if ($(".toggle-map").text() == 'Свернуть ') {               // якщо стоїть значення згорнути то
    		$(".toggle-map").text('Развернуть ')                    // змінюємо на значення розгорнути
    		$(".hide-img").attr('src','img/down-arrowhead.png'); // і замінюємо картинку стрілки
    	} else if($(".toggle-map").text() == 'Развернуть '){
    		$(".toggle-map").text('Свернуть ')
    		$(".hide-img").attr('src','img/up-arrowhead.png');
    	}
    });

    // Вибір міста зі списку
    $(".cityList").children().click(function(){                     // клік на дочірнюму елементу списка
        $(".favoritesCity").text($(this).text())                    // добавимо значення обраного елемента
        $(".closeArrow").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });

    // Видалення міста із обраного
    $(".closeArrow").click(function(){                              // клік по стрілці видаллення міста із обраного
        $(".favoritesCity").empty();                                // очищення значення обраного міста
        $(".closeArrowForWhom").css('display', 'none');                    // приховуваня стрілки
    });

    $(".forWhom").children().click(function(){                      // клік на дочірнюму елементу списка
        $(".person").text($(this).text())                           // добавимо значення обраного елемента
        $(".closeArrow").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });


});
