// 움직이는 폰 + 무한글자이동 JS - iphone.js

// DOM 메서드
import dFn from '../js/dom.js';

/************************************************ 
        [ 아이폰 영역오버시 회전기능 ]
        1. 화면에 10등분된 투명 영역을 구현
        2. 이 영역이 이벤트 대상이 됨
        3. 오버시 변경대상인 아이폰에 회전값 변경
        4. 트랜지션으로 애니메이션 설정적용!
        5. 애니메이션 후에 이벤트박스를 보이게함
        (최초 width:0 -> width:100vw)
************************************************/

// 0. 데이터 셋팅: x,y축 회전 각도를 배열에 셋팅!
const iDeg = [ // 제일 중요한 각도셋팅!
    // 상단영역
    [30,-60,"imgs_moving/mv1.jpg"],
    [30,-30,"imgs_moving/mv2.jpg"],
    [30,0,"imgs_moving/mv3.jpg"],
    [30,30,"imgs_moving/mv4.jpg"],
    [30,60,"imgs_moving/mv5.jpg"],
    // 중간영역
    [0,-60,"imgs_moving/mv6.jpg"],
    [0,-30,"imgs_moving/mv7.jpg"],
    [0,0,"imgs_moving/mv8.jpg"],
    [0,30,"imgs_moving/mv9.jpg"],
    [0,60,"imgs_moving/pt1.jpg"],
    // 하단영역
    [-30,-60,"imgs_moving/pt2.jpg"],
    [-30,-30,"imgs_moving/pt3.jpg"],
    [-30,0,"imgs_moving/pt4.jpg"],
    [-30,30,"imgs_moving/pt5.jpg"],
    [-30,60,"imgs_moving/pt6.jpg"],
];

// 이벤트 박스에 속박스 넣기
const eBox = dFn.qs('.evt-box');
for(let i=0;i<15;i++){
    eBox.innerHTML += '<div></div>';
} ///////// for 함수 //////////




// 1. 대상선정
// 1-1. 이벤트 대상: .evt-box div
const evtBox = dFn.qsa('.evt-box div');
// 1-2. 변경대상: .iphone
const iphone = dFn.qs('.iphone');
// 1-3. 스크린: #screen
const screen = dFn.qs('#screen');

console.log('대상:',evtBox,iphone);

// 2. 이벤트설정 : 이벤트 종류 - mouseenter(경계선안에들어옴)
evtBox.forEach(
    (ele,idx)=>
    dFn.addEvt(ele,'mouseenter',()=>seeMe(idx)));

// 3. 함수 만들기 //////////////////////
function seeMe(seq){// seq - 순번받기
    // console.log('나를봐!',event.currentTarget,seq);

    // 1. 변경적용하기 : 
    // 대상 - .iphone
    iphone.style.transform = 
    `rotateX(${iDeg[seq][0]}deg) rotateY(${iDeg[seq][1]}deg)`;
    // 트랜지션 변경하기
    iphone.style.transition = '.4s ease-out';

    // 2. 변경적용하기 :
    // 앞면 이미지
    screen.style.backgroundImage = `url(images/${iDeg[seq][2]})`
    screen.style.backgroundColor = `white`

} ////// seeMe 함수 //////////////////

// 이벤트영역 박스 5초후 작동되도록 width값 변경하기 ///
// 대상: .evt-box -> eBox변수
setTimeout(()=>{
    eBox.style.width = '100vw';
},5000);

// 마우스 포인터 변경하기!
// 대상: .evt-box -> eBox변수
dFn.addEvt(eBox,'mouseover',()=>{
    
    console.log('마우스 포인터바뀜!')
})

/* 
    [ 마우스 오버/아웃 관련 이벤트 차이점 ]
    1. mouseover/mouseout : 요소자체를 기준
    2. mouseenter/mouseleave : 요소 경계선 기준
    -> 둘의 차이는 이벤트 버블링에 있다!
    -> 경계전 기준의 이벤트인 mouseenter/mouseleavesms 자체요소에서만
    발생하고 버블링되지 않는다!
    -> 자손요소에서 버블링되어 발생하는 mouseover/mouseout으로 셋팅할
    경우 빈번한 이벤트 발생이 문제가 될 경우
    mouseenter/mouseleave를 사용할 것을 w3c가 권고함!

*/
