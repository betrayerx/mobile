var globalAjax = true; //��� �������

$(function() 
{ 
if (!globalAjax) return;

	$("ul.nav li.mainMenu a").click(function()
		{ 
		var url = $(this).attr("href"); // ������� ������ 
		$("#content").load(url);
			
		$("ul.nav li.mainMenu").removeClass("active"); //������� �������� �� ���� ���������
		
		$(this.parentNode).addClass('active');//jQuery(this).parent('li').addClass('yourClass');
			
		$('#navbar-collapse').removeClass('in'); //������� ���� �� ���������
		
		return false; // ���������� false, ���� �� �������� ������� �� ������               
		}); 
		
	$("a#mainDrop").click(function()
		{
		$("ul.nav li.mainMenu").removeClass("active"); //������� �������� �� ���� ���������		
		});

	//������������� http://jquery.page2page.ru/index.php5/On
	$("div.jumbotron").on("click","li.zagNav a",function()
		{
		var url = $(this).attr("href");
		$("#content").load(url); 
		
		return false;
		});	
});
