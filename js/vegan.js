$(function () {

    var $header, // header영역
        $h1, // 로고
        $menu, // 대메뉴 li
        $menuTxt, // 대메뉴 a
        $olTxt, // 서브메뉴 a
        w_height, // 전체 높이값
        $toggleBtn, //햄버거 버튼
        $toggleMenu, //햄버거 메뉴
        $toggleTxt, //햄버거 메뉴 텍스트
        on_off = false;


    $(window).ready(function () {
        noneBg()
    });

    function init() { // 초기화 함수
        $header = $('header'),
            $h1 = $('h1'),
            $menu = $('#nav-skip>ul>.menu'),
            $menuTxt = $('#nav-skip>ul>.menu>a'),
            $olTxt = $('#nav-skip>ul>.menu>ol>li>a'),
            w_height = $(window).scrollTop(),
            $toggleBtn = $header.find('.openmenu-btn'),
            $toggleMenu = $header.find('#openmenu-nav'),
            $toggleTxt = $toggleMenu.find('.openmenu');
    }


    init()
    skipMenu()
    noneBg()
    greenBg()
    hover()


    function noneBg() { // header 배경 없을 때 함수 설정
        $menuTxt.css({ 'color': '#27706b' }); // 대메뉴 a 색상 초록
        $olTxt.css({ 'color': '#888' }); // 서브메뉴 a 색상 변경
        $h1.removeClass('on'); // 로고 .on(로고 색 변경) 제거
        $header.css({ 'background': 'none' }); // header의 배경색 제거
    }

    function greenBg() { // header 배경 초록일 때 함수 설정
        $menuTxt.css({ 'color': '#fff' }); // 대메뉴 a 색상 흰색
        $h1.addClass('on'); // 로고 .on(로고 색 변경) 추가
        $header.css({ 'backgroundColor': '#27706b' }); // header의 배경색 초록
    }


    function hover() { // 마우스 올리고 내렸을 때 함수 설정
        $header.on('mouseenter', greenBg); // header에 마우스 올렸을 때 '함수 greenBg' 출력
        $header.on('mouseleave', noneBg); // header에 마우스 내렸을 때 '함수 noneBg' 출력
    }


    function skipMenu() {
        $menuTxt.on('mouseenter');
        $olTxt.on('show');
    }


    $(window).scroll(function () { // 전체 스크롤 했을 때 할 일
        if ($(this).scrollTop() > 0) { // 만약에 전체 창의 scrollTop값이 600이상이면
            greenBg() // 함수 greenBg 출력
            $header.off('mouseleave', noneBg);
            $toggleBtn.find('span').css('backgroundColor','#fff');
            // scrollTop값이 600을 넘었을 때는 off메서드로 mouseleave 제거 -> 배경색 유지
        } else { // scrollTop값이 600을 넘으면
            noneBg() // 함수 noneBg 출력
            $toggleBtn.find('span').css('backgroundColor','#333');
        }
    });


    /* 메뉴 ol 내려오는 애니메이션 */
    $menu.mouseenter(function () { //대메뉴 li의 a에 마우스를 올렸을 때
        $('ol', this).stop().slideDown(500); //a의 형제요소(ol) .5초 동안 내려오게
    });
    $menu.mouseleave(function () { //대메뉴 li의 a에 마우스를 내렸을 때
        $('ol', this).stop().slideUp(600); //a의 형제요소(ol) .5초 동안 올라가게
    });



    /* 햄버거 버튼 애니메이션 */
    $toggleBtn.click(function (e) {
        e.preventDefault();
        $(this).find('span').toggleClass('active');
        $toggleMenu.toggleClass('active');
        $(window).off('scroll');
        if(on_off=!on_off){ //true
            greenBg()
            $header.off('mouseleave', noneBg);
            $(this).find('span').css('backgroundColor','#fff');
        }else{ //false
            noneBg()
            $header.on('mouseleave', noneBg);
            $(window).on('scroll', greenBg);
            $(this).find('span').css('backgroundColor','#333');
        }
    });


    /* 햄버거 서브메뉴 애니메이션 */
    function mobileMenuSlide(){
        $(this).siblings('ol').slideToggle();
    }

    $('#openmenu-nav > ul > li > a').on('click', mobileMenuSlide);

    $('#openmenu-nav > ul > li > a').siblings('ol').on('click', mobileMenuSlide);
    
    $h1.click(function(){
        $(location).attr('href','index.php');
    });

});