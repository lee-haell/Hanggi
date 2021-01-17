$(function () {

    var $firstImg = $('#firstsns'); // 1번 sns영역
    var $secondImg = $('#secondsns'); // 2번 sns영역
    var $thirdImg = $('#thirdsns'); // 3번 sns영역
    var $foursns = $('#foursns'); // 4번 sns영역


$firstImg.hover(function(){ 
    $(this).children('#user-id01').toggleClass('green');
});

$secondImg.hover(function(){ 
    $(this).children('#user-id02').toggleClass('green');
});

$thirdImg.hover(function(){ 
    $(this).children('#user-id03').toggleClass('green');
});

$foursns.hover(function(){ 
    $(this).children('#user-id04').toggleClass('green');
});

    
/* a링크 막기 */  
$('#user-id01').click(function(e) { 
    e.preventDefault(); 
});
$('#user-id02').click(function(e) { 
    e.preventDefault(); 
});
$('#user-id03').click(function(e) { 
    e.preventDefault(); 
});
$('#user-id04').click(function(e) { 
    e.preventDefault(); 
});   
    
    
});
