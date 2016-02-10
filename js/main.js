$(document).ready(function() {

    
    // Регуляр фільтра ціни / range slider
    $("#range").ionRangeSlider({
        type: "double",
        min: 15000,
        max: 1000000,
        from: 57000,
        to: 645000,
        postfix: " P"
    });
    
    $(".active-window-for-gold-watches").hide();
    $(".active-window-for-silver-watches").hide();

    // При наведенні мишки на кнопку із золотими годинниками або уже відкритого вікна з ним 
    $(".gold-watches, .active-window-for-gold-watches").mouseover(function(){
        // Закриємо вікно із срібними годинниками
        $(".active-window-for-silver-watches").hide();
        // Відкриємо із золотими годинниками
        $(".active-window-for-gold-watches").show();
        // При виведенні мишки із вікна із золотими годинниками 
        $(".active-window-for-gold-watches").add('.gold-watches').mouseout(function(event) {
            // Сховаємо вікно із золотими годинниками 
            $(".active-window-for-gold-watches").hide();
        });
    });
    
    // Аналогічно до золотих годинників
    $(".silver-watches, .active-window-for-silver-watches").mouseover(function(){
        $(".active-window-for-gold-watches").hide();
        $(".active-window-for-silver-watches").show();
        $(".active-window-for-silver-watches").mouseout(function(event) {
            $(".active-window-for-silver-watches").hide();
        });
        
    });

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
            $(".toggle-map").text('Развернуть ');                       // змінюємо на значення розгорнути
            $(".hide-img").attr('src','img/down-arrowhead.png');              // і замінюємо картинку стрілки
        } else if($(".toggle-map").text() == 'Развернуть '){
            $(".toggle-map").text('Свернуть ');;
            $(".hide-img").attr('src','img/up-arrowhead.png');
        }
    });



    // Вибір міста зі списку
    $(".cityList").children().click(function(){                     // клік на дочірнюму елементу списка
        $(".favoritesCity").text($(this).text());                    // добавимо значення обраного елемента
        $(".closeArrow").css('display', 'inline-block');            // воводимо стрілку видалення міста із обраного (по замовчуванню воно прихована)
    });
    $(".cityList").children().click(function(event) {
        $(".btn-group").removeClass('open');
    });
    // Видалення міста із обраного
    $(".closeArrow").click(function(){                              // клік по стрілці видаллення міста із обраного
        $(".favoritesCity").empty();                                // очищення значення обраного міста
        $(".closeArrow").css('display', 'none');                                        // приховуваня стрілки
    });

    // Вибір "Для кого"
    $(".forWhomList").children().click(function(){                  // клік на дочірнюму елементу списка
        $(".alreadyChosedForWhom").text($(this).text());             // добавимо значення обраного елемента
        $(".closeArrowForWhom").css('display', 'inline-block');     // воводимо стрілку видалення елемента із обраного (по замовчуванню воно прихована)
    });
    $(".forWhomList").children().click(function(event) {
        $(".forWhom").removeClass('open');
    });
    // Видалення елемента із поля "Для кого"
    $(".closeArrowForWhom").click(function(){                       // клік по стрілці видаллення елемента із обраного
        $(".alreadyChosedForWhom").empty();                         // очищення значення обраного елемента
        $(".closeArrowForWhom").css('display', 'none');             // приховуваня стрілки
    });

    // Вибір "Металу корпусу"
    $(".forCaseMetal").children().click(function(){                      // клік на дочірнюму елементу списка
        $(".alreadyChosedForCaseMetal").text($(this).text());             // добавимо значення обраного елемента
        $(".closeArrowForCaseMetal").css('display', 'inline-block');     // воводимо стрілку видалення елемента із обраного (по замовчуванню воно прихована)
    });
    $(".forCaseMetal").children().click(function(event) {
        $(".forCaseMetalbtn-group").removeClass('open');
    });
    // Видалення елемента із поля "Матал корпусу"
    $(".closeArrowForCaseMetal").click(function(){                       // клік по стрілці видаллення елемента із обраного
        $(".alreadyChosedForCaseMetal").empty();                         // очищення значення обраного елемента
        $(".closeArrowForCaseMetal").css('display', 'none');             // приховуваня стрілки
    });

    // Вибір "Кольору"
    $(".forColor").children().click(function(){                          // клік на дочірнюму елементу списка
        $(".alreadyChosedForColor").text($(this).text());                 // добавимо значення обраного елемента
        $(".closeArrowForColor").css('display', 'inline-block');         // воводимо стрілку видалення елемента із обраного (по замовчуванню воно прихована)
    });
    $(".forColor").children().click(function(event) {
        $(".forColorbtn-group").removeClass('open');
    });
    // Видалення елемента із поля "Кольору"
    $(".closeArrowForColor").click(function(){                           // клік по стрілці видаллення елемента із обраного
        $(".alreadyChosedForColor").empty();                             // очищення значення обраного елемента
        $(".closeArrowForColor").css('display', 'none');                 // приховуваня стрілки
    });

    // Вибір "Вставок"
    $(".forInsert").children().click(function(){                         // клік на дочірнюму елементу списка
        $(".alreadyChosedForInsert").text($(this).text());                // добавимо значення обраного елемента
        $(".closeArrowForInsert").css('display', 'inline-block');        // воводимо стрілку видалення елемента із обраного (по замовчуванню воно прихована)
    });
    $(".forInsert").children().click(function(event) {
        $(".forInsertbtn-group").removeClass('open');
    });
    // Видалення елемента із поля "Вставок"
    $(".closeArrowForInsert").click(function(){                          // клік по стрілці видаллення елемента із обраного
        $(".alreadyChosedForInsert").empty();                            // очищення значення обраного елемента
        $(".closeArrowForInsert").css('display', 'none');                // приховуваня стрілки
    });




    // Відкрити додаткове вікно для кожного годинника (під картою)
    // Ховаємо всі обгортки блоку інформації
    $(".info").hide();

    // Ховаємо всі кнопки які розміщення поверх зображення годинників
    $(".select-dial").hide();

    // Клік на годдинику
    $(".oneWatches").mouseover(function(){

        // знову закриємо всі обгорти для блоку інформації
        // тим самим ми робимо так що якщо вже відкрита якась обгортка
        // то вона таким чином закриється і залишиться лише одна + теж саме із кнопками на зображенні
        $(".info").hide();
        $(".select-dial").hide();


        // зміна для обгортки для зображення годинників + розгортання і згортанню обгортки блоку інформації
        var selectedImageWrapper = $(this).parent().next().toggle();

        // розгортання і згортання обгортки блоку інформації для останнього контейнера годинників
        $(this).parent().prev().toggle();

        // перемикає показ кнопки на зображенню з годинниками
        $(this).next().toggle();
        
        var selectedWatchesWrapper = selectedImageWrapper.parent();                             // обрана обгортка для зображення та вікна інформації
        var lastSelectedWatchesWrapper = $(".watchesWrapper").last();                           // остання обгортка зі списку всих обгорток
        // порівняння обранної обгортки із останньою
        // якщо вони рівні то робимо для неї щоб обгортка інформації і зображення мінялися місцями
        if (selectedWatchesWrapper.get(0) == lastSelectedWatchesWrapper.get(0)) {               

            // змінна для останньої обгортки для зображення з годинниками
            var watchesWrapper = $(lastSelectedWatchesWrapper).children(":first");

            // змінна для останньої обгортки для додаткової інформації
            var watchesInfoWrapper = $(lastSelectedWatchesWrapper).children(":last");

            // змінна місцями 2-ох останніх обгорток
            $(watchesInfoWrapper).insertBefore($(watchesWrapper));

            // зміни в стилях для динамічних 2-ох останніх обгорток (не знаю чого саме 14 але саме при такому 
            // значенні нічого не лізе - можливо 2 обгортка більша за інші на 1 піксель)
            $(lastSelectedWatchesWrapper).children(":first").css("margin-right", "14px");
            $(lastSelectedWatchesWrapper).children(":first").css("margin-left", "0px");
            
        }
        
        
    });



    // Змінна картинки новини при hover на блок новини
    $(".single-text-block:nth-child(1)").hover(function(){
        $('.newsImage').attr("src", "../../img/news1.png");
    });
    $(".single-text-block:nth-child(2)").hover(function(){
        $('.newsImage').attr("src", "../../img/news2.png");
    });
    $(".single-text-block:nth-child(3)").hover(function(){
        $('.newsImage').attr("src", "../../img/news1.png");
    });

    

    // Закрити вікно dropdown-menu в футер що знаходиться в футері при натисканні на кнопку "Закрити"
    $(".dropdown-menu .closeDrowpdownMenu").click(function() {
        $('.in,.open').removeClass('in open');
    });

});
