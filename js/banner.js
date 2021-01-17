$(window).load(function(){
  
    var $banWrap, // .banner
         $banList, // ul.banner_slides
         $banLi, // .banner_slides의 li
         $banImg, // li의 img
         banImgNum, // 배너 img 개수
         banImgWidth, // 배너 img 너비값
         btn, // 버튼
         timer; // 시간
    
    init()
    banReset()
    onPlay()
    inEvent()
    
    
    function init(){ // 함수 초기화
        $banWrap = $(".banner"); // 배너영역 둘러싼 div
        $banList = $(".banner_slides"); // ul
        $banLi = $banList.children(); // ul의 자식요소들인 li
        $banImg = $banLi.children(); // li의 자식요소들인 img
        banImgNum = $banList.children().size(); // li의 개수
        banImgWidth = $banImg.width(); // img 너비값
        btn = $banWrap.children('span'); // 
        $banList.children().last().prependTo($banList); // ul의 마지막 자식요소를 ul의 앞에 붙임
    }
    
    
    function banReset(){ // 배너 너비값 reset
        
        var window_width = $(window).innerWidth(); // 안쪽너비값을 전체너비값으로 변수 선언
        banImgWidth = window_width; // 배너img너비값 = 전체너비값
        
        $banLi.css({ // li의 너비값=전체너비값
            'width': banImgWidth
        });
        $banImg.css({ // 배너img의 너비값=전체너비값
            'width': banImgWidth
        })
        $banWrap.css({ // div높이값=배너img의 높이값
            'height': $banImg.height()
        });
        $banList.css({ // ul의 너비값=배너img너비값 x 배너img개수
            'width': banImgWidth * banImgNum
        });
        $banList.css({ // ul을 배너img너비값만큼 왼쪽으로 이동
            'left':-banImgWidth
        }); 
        
        }
        
        
    
        
        function inEvent(){ // 이벤트 함수
            $(window).on('resize', banReset); // 윈도우 크기 변할 때, banReset(너비값 함수) 적용
            btn.on('mouseenter', onStop); // 버튼에 마우스 올렸을 때 자동슬라이드 정지
            btn.on('mouseleave', onPlay); // 버튼에 마우스 내렸을 때 자동슬라이드 재생
            $('#next').on('click', onSlideNext); // 다음버튼 클릭했을 때 'ul왼쪽이동' 함수 실행
            $('#prev').on('click', onSlidePrev); // 이전버튼 클릭했을때 'ul오른쪽이동' 함수 실행
        }
        
        
        
        
        
        function onSlideNext(){ // (다음 버튼) ul이 통째로 왼쪽으로 이동
            
            var currentPosition = $banList.position().left; // ul의 왼쪽위치값을 초기위치값으로 선언
            
            $(".banner_slides:not(:animated)").animate({ // ul이 애니메이션되지 않을 때, 애니메이션 시작
                'left': currentPosition - banImgWidth // 초기위치값 - 전체너비값만큼 왼쪽으로 이동
             }, 1300, "easeInOutQuad", function () {
                    $banList.children().first().appendTo($banList); 
                    // ul의 첫번째 자식요소 li를 ul 뒤에 붙임 -> next 누르면 오른쪽 마지막에 다시 1번 배너부터 위치하도록
                    $banList.css({ // ul을 배너img너비값만큼 왼쪽으로 이동
                        "left": -banImgWidth
                    });
            });   
        }
        
        function onSlidePrev() { // (이전 버튼) ul이 통째로 오른쪽으로 이동
            
            var currentPosition = $banList.position().left; // ul의 왼쪽위치값을 초기위치값으로 선언
            
            $(".banner_slides:not(:animated)").animate({ // ul이 애니메이션되지 않을 때, 애니메이션 시작
                'left': currentPosition + banImgWidth // 초기위치값 + 배너img너비값만큼 왼쪽으로 이동
             }, 1300, "easeInOutQuad", function () {
                    $banList.children().last().prependTo($banList);
                    // ul의 마지막 자식요소를 ul 앞에 붙임 -> prev 누르면 왼쪽 첫번째에 다시 3번 배너부터 위치하도록
                    $banList.css({ // ul을 배너img너비값만큼 오른쪽으로 이동
                        "left": -banImgWidth
                    });
            });   
        }
    
    
    
    
        function onStop() {
            clearInterval(timer);
            // 밑의 자동 슬라이드 정지
        }
        
        function onPlay() {
            timer = setInterval(onSlideNext, 2000);
            // 2초마다 next슬라이드가 주기적으로 발생 (자동 슬라이드) 
        }
    
    
    
    
});