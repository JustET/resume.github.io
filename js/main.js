$(document).ready(function(){
	
	//平滑过渡
	smoothMove();
 
	$(window).scroll(function(){

	//高亮显示导航
		heightLight();

    //上滑显示导航
        toggleNav();

    //技能进度条
		fullBar();	

	});

});


var h = $(window).height();
var Top = $(window).scrollTop();
var bescroll=Top;
var flag=true;

function smoothMove(){
	$("#header").find("ul li a").click(function(){
		$('html, body').stop()
		.animate({scrollTop: $($(this).attr('href')).offset().top}, 600);
		event.preventDefault();
	});

    $('#more').click(function(){
        $('html, body').stop()
        .animate({scrollTop: $('#part_mes').offset().top}, 600);
        event.preventDefault();
    });
}

function toggleNav(){
	var afscroll=$(window).scrollTop();
    var res=afscroll-bescroll;
    var mH=$(window).scrollTop()-h;

    if(mH<0){
        $('.nav').css('background','transparent');
    }else{
        $('.nav').css('background','#333');
    }

    if(res<0){
        $('.nav').slideDown(300);
    }else{
        $('.nav').slideUp(500);
    }
    bescroll = $(window).scrollTop();
}

function heightLight(){
	var currentId = "";	
	$('section').each(function(){
        if (Top > $(this).offset().top-10) {
            currentId = "#" + $(this).attr("id");        
        } else {
            return false;
        }
	})
    if (currentId) {
        $('.active').removeClass("active");
        $("[href =" + currentId + "]").addClass("active");
    }
}


function fullBar(){
	var skillH=$('#part_skill').offset().top;
	if($(window).scrollTop()>skillH-300 && flag==true){
		
        $('.bar:eq(0)').stop().animate({width: "80%"}, 800);
        $('.bar:eq(1)').stop().animate({width: "70%"}, 600);
        $('.bar:eq(2)').stop().animate({width: "70%"}, 600);
        $('.bar:eq(3)').stop().animate({width: "80%"}, 800);
        $('.bar:eq(4)').stop().animate({width: "60%"}, 700);
        $('.bar:eq(5)').stop().animate({width: "80%"}, 800);
        flag=false;
    }
    else{
    	return false;
    } 
          
}
