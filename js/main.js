var globalAjax = true; //для отладки

$(function() 
{ 
if (!globalAjax) return;

	$("ul.nav li.mainMenu a").click(function()
		{ 
		var url = $(this).attr("href"); // возьмем ссылку 
		$("#content").load(url);
			
		$("ul.nav li.mainMenu").removeClass("active"); //удаляем активное со всех элементов
		
		$(this.parentNode).addClass('active');//jQuery(this).parent('li').addClass('yourClass');
			
		$('#navbar-collapse').removeClass('in'); //убираем меню на мобильных
		
		return false; // возвращаем false, дабы не сработал переход по ссылке               
		}); 
		
	$("a#mainDrop").click(function()
		{
		$("ul.nav li.mainMenu").removeClass("active"); //удаляем активное со всех элементов		
		});

	//делегирование http://jquery.page2page.ru/index.php5/On
	$("div.jumbotron").on("click","li.zagNav a",function()
		{
		var url = $(this).attr("href");
		$("#content").load(url); 
		
		return false;
		});	
});
