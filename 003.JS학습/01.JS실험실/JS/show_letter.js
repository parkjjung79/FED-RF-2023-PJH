// 글자등장1 JS - show_letter.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////


  // 1. 구현요구사항 : 
  // - 글자를 박스에 넣고 하나씩 날아오면서 등장

  // 2. 대상선정 : .stage-letters
  const stage = domFn.qs('.stage-letters');
  console.log('대상:',stage);

  // 3. 글자 데이터 변수할당
  const myText = '무궁화꽃이 피었습니다!';

  // 4. 데이터글자 한글자씩 태그로 싸기
  // fot of 사용!

  // html태그변수
  let hcode = '';
  // 순번증가변수
  let seqNum = 0;

  for(let x of myText){
    // console.log(x);
    if(x==' ')
        hcode += '&nbsp'
    else
     hcode += `<span>${x}</span>`;
  } /////// for of /////////

  console.log('코드:',hcode);

  // 5. 스테이지박스에 코드 출력하기
  stage.innerHTML = hcode;
