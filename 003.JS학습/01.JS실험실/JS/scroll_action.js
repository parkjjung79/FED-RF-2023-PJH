// 스크롤 액션 js - scroll_action.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

    // 바운딩 위치값 함수
    getBCR: ele => ele.getBoundingClientRect().top,
  }; /////// domFn 객체 /////////////
  

  /************************************************ 
    [ 스크롤 이벤트를 활용한 등장액션 기능구현하기 ]
  
    1. 사용이벤트 : scroll
    -> 스크롤 바가 있는 페이지에서 또는 부분박스에서
    스크롤 바가 이동할 떄 발생하는 이벤트

    *주의! wheel(휠) 이벤트와는 다르다! 무엇이? 스크롤바가
    이동하지 않아도 마우스 휠이 작동될때 발생한다!
    (휠이벤트는 모바일에서 사용불가!)

    2. 스크롤바 위치값 알아내기 : 세로방향(Y축)
     (1) window.scrollY (IE6~11지원안함)
     (2) document.scrollingElement.scrollTop
     (3) document.documentElement.scrollTop
     (4) document.querySelector('html').scrollTop

     -> 가로방향 스크롤바는 Y대신 X라는 문자를 사용함!

     ************************************************/

    // 1. 대상선정:
    // 스크롤 등장 대상: .scact
    const scAct = domFn.qsa('.scact')
    console.log('대상:',scAct);

    // 2. 전체 window에 스크롤 이벤트 셋팅하기
    domFn.addEvt(window,'scroll',showIt);


    // 요소 위치값
    // let pos1 = scAct[0].offsetTop;
    // let pos2 = scAct[1].offsetTop;
    // let pos3 = scAct[2].offsetTop;

    // 3. 스크롤 등장액션 함수 만들기
    function showIt(){
        // 스크롤바 위치값(Y축) 읽어오기
        let scTop = window.scrollY;
        // let scTop = document.scrollingElement.scrollTop;
        // let scTop = document.documentElement.scrollTop;
        // let scTop = document.querySelector('html').scrollTop;
        // console.log(scTop);

        // 스크롤 등장 요소 위치값 찍기!
        // console.log(pos1,'/',scTop);

        // 정해진 위치의 요소를 스크롤 위치 값으로 등장시키기
        // if(scTop > pos1-500) scAct[0].classList.add('on');
        // if(scTop > pos2-500) scAct[1].classList.add('on');
        // if(scTop > pos3-500) scAct[2].classList.add('on');


        // 요소의 바운딩 위치값 찍기
        scAct.forEach((ele,idx)=>{
            let bTop = domFn.getBCR(ele);
            console.log('바운딩값',idx,':',bTop);

            if(bTop<window.innerHeight/6*2) ele.classList.add('on');


        }); /////////////// forEach /////////////



    } ////////////// showIt 함수 ///////////////