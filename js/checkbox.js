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
    	if ($(".toggle-map").text() == 'Свернуть ') {                 // якщо стоїть значення згорнути то
    		$(".toggle-map").text('Развернуть ')                        // змінюємо на значення розгорнути
    		$(".hide-img").attr('src','img/down-arrowhead.png'); 			  // і замінюємо картинку стрілки
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
        $(".closeArrow").css('display', 'none');							// приховуваня стрілки
    });

		// Вибір "Для кого"
    $(".forWhomList").children().click(function(){                      // клік на дочірнюму елементу списка
        $(".alreadyChosedForWhom").text($(this).text())                           // добавимо значення обраного елемента
        $(".closeArrowForWhom").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });
		// Видалення міста із поля "Для кого"
    $(".closeArrowForWhom").click(function(){                              // клік по стрілці видаллення міста із обраного
        $(".alreadyChosedForWhom").empty();                                // очищення значення обраного міста
        $(".closeArrowForWhom").css('display', 'none');							// приховуваня стрілки
    });

		// Вибір "Металу корпусу"
    $(".forCaseMetal").children().click(function(){                      // клік на дочірнюму елементу списка
        $(".alreadyChosedForCaseMetal").text($(this).text())                           // добавимо значення обраного елемента
        $(".closeArrowForCaseMetal").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });
		// Видалення міста із поля "Матал корпусу"
    $(".closeArrowForCaseMetal").click(function(){                              // клік по стрілці видаллення міста із обраного
        $(".alreadyChosedForCaseMetal").empty();                                // очищення значення обраного міста
        $(".closeArrowForCaseMetal").css('display', 'none');							// приховуваня стрілки
    });

		// Вибір "Кольору"
    $(".forColor").children().click(function(){                      // клік на дочірнюму елементу списка
        $(".alreadyChosedForColor").text($(this).text())                           // добавимо значення обраного елемента
        $(".closeArrowForColor").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });
		// Видалення міста із поля "Кольору"
    $(".closeArrowForColor").click(function(){                              // клік по стрілці видаллення міста із обраного
        $(".alreadyChosedForColor").empty();                                // очищення значення обраного міста
        $(".closeArrowForColor").css('display', 'none');							// приховуваня стрілки
    });

		// Вибір "Вставок"
    $(".forInsert").children().click(function(){                      // клік на дочірнюму елементу списка
        $(".alreadyChosedForInsert").text($(this).text())                           // добавимо значення обраного елемента
        $(".closeArrowForInsert").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });
		// Видалення міста із поля "Вставок"
    $(".closeArrowForInsert").click(function(){                              // клік по стрілці видаллення міста із обраного
        $(".alreadyChosedForInsert").empty();                                // очищення значення обраного міста
        $(".closeArrowForInsert").css('display', 'none');							// приховуваня стрілки
    });

		// Закрити віко dropdown-menu
		$(".dropdown-menu .closeDrowpdownMenu").click(function() {
    		$('.in,.open').removeClass('in open');
		});
});
