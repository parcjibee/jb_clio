$(document).ready(function(){

    let isClose = true;
    let isClose2 = true;

    $('.langBox li').on("click",function(){//on메소드 시작
        if(isClose == true){
            $('.langBox').addClass('on');
            isClose = false;
            $('.langBox li').show();
        }else{
            $('.langBox').removeClass('on');
            isClose = true;
            $('.langBox li').hide();
            $(this).show();
        }
    });

    $('.user li').on("click",function(){//on메소드 시작
        if(isClose2 == true){
            $('.user').addClass('on');
            isClose2 = false;
            $('.user li').show();
        }else{
            $('.user').removeClass('on');
            isClose2 = true;
            $('.user li').hide();
            $('.user li').show();
        }
    });
    //on끝

    $('.callMenu').on('click',function(){
        $('.subMenuGroup').css({'display':'block','opacity':0}).stop().animate({'opacity':1},400);
        $(this).stop().animate({'opacity':0},100,function(){
            $(this).css({'display':'none'});
        });
        $('.closeMenu').css({'display':'block','opacity': 0}).stop().animate({'opacity':1},200);
    });
    $('.closeMenu').on('click',function(){
        $('.subMenuGroup').stop().animate({'opacity':0},400,function(){
            $('.subMenuGroup').css({'display':'none'});
        });
      
        $(this).stop().animate({'opacity':0},100,function(){
            $(this).css({'display':'none'});
        });
        $('.callMenu').css({'display':'block','opacity': 0}).stop().animate({'opacity':1},200);
    });
    $('.mainSlide .mainSlider').slick({

        autoplay:true,
        swipe:true,
        pauseOnHover:false,
        autoplaySpeed:5000,
        speed:1200,
        dots:true,
        fade:false
    });
    $('.bestSlick').slick({

        swipe:false,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow:5,
        slidesToScroll:1,
        autoplaySpeed:7000,
        speed:1000,
        vertical:false,
        fade:false,
        arrows:true,
        dots:false
    });
    //비디오
    $('#sec2 .mainVideo .btnPlay').on('click',function(e){
        e.preventDefault();
        let videolink = 'https://www.youtube.com/embed/0BnfOuamLFs'

        $('.popup').css({'display':'block', 'opacity':0})
            .stop()
            .animate({'opacity':1},400);

            $('.popup .popup_inner .modal').find('iframe').attr('src','');
            
            $('.popup .popup_inner .modal').find('iframe').attr('src',videolink);
            $('body').css({'overflow':'hidden'});
        
    })
    $('.popup .popup_inner .modal a').on('click',function(e){
        e.preventDefault();

        $('.popup').stop()
            .animate({'opacity':1},400,function(){
                $('.popup').css({'display':'none'})
            });
            $('.popup .popup_inner .modal').find('iframe').attr('src','');
            $('body').css({'overflow-y':'scroll', 'overflow-x':'hidden'});
    });



    $(window).on("scroll",function(){
        let num = $(this).scrollTop();
        console.log(num);

        let img1 = $('#sec1 .sec1_inner .item1 .item1_img');
        let img2 = $('#sec1 .sec1_inner .item2 .item2_img');
        let img3 = $('#sec1 .sec1_inner .item3 .item3_img');
        let img4 = $('#sec1 .sec1_inner .item4 .item4_img');

        if(num >=600){
            $(img1).addClass('on');
          
        }else if(num == 0){
            $(img1).removeClass('on')
           
        }

        if(num >=400){
            $(img2).addClass('on');
        }else if(num == 0){
            $(img2).removeClass('on')
        }

        if(num >=1300){
            $(img3).addClass('on');
 
        }else if(num == 0){
            $(img3).removeClass('on')
   
        }

        if(num >=1500){
            $(img4).addClass('on');
        }else if(num == 0){
            $(img4).removeClass('on')
        }
    });

});