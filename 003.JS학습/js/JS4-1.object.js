// 영화 초이스 객체 //// object.js

// 탐쌤 초이스! //////////////////////
const tom_sam = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
tom_sam.title = "럭키";

// 2. 감독
tom_sam.director = "이계벽";

// 3. 배우
tom_sam.actor = "유해진,조윤희";

// 4. 장르
tom_sam.genre = "코미디";

// 5. 관람가
tom_sam.ratings = "15세";

// 6. 예고편
tom_sam.trailer = function () {
    console.log("예고편:", "G2zyFe4Z5w0");
    // 플레이어함수 호출!
    playMovie("G2zyFe4Z5w0");
}; ///////// trailer 함수 ///////

// 이조은의 오브젝트!
const zoe_obj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
zoe_obj.title = "이터널 션샤인";
// 2. 감독
zoe_obj.director = "미셸 공드리";
// 3. 배우
zoe_obj.actor = "짐캐리, 케이트 윈슬렛";
// 4. 장르
zoe_obj.genre = "로맨스";
// 5. 관람가
zoe_obj.ratings = "12세";

// 6. 예고편
zoe_obj.trailer = function () {
    console.log("예고편:", "07-QBnEkgXU");
    // 플레이어함수 호출!
    playMovie("07-QBnEkgXU");
}; ////// trailer 함수 ////////

// 이동엽의 오브젝트!
const nick_obj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
nick_obj.title = "공조2:인터내셔날";

// 2. 감독
nick_obj.director = "이석훈";

// 3. 배우
nick_obj.actor = "현빈, 유해진, 윤아, 다니엘 헨리, 진선규";

// 4. 장르
nick_obj.genre = "액션,코미디";

// 5. 관람가
nick_obj.ratings = "15세";

// 6. 예고편
nick_obj.trailer = function () {
    console.log("예고편:", "fzUKUfHeIYA");
    // 플레이어함수 호출!
    playMovie("fzUKUfHeIYA");
}; ///////////// trailer 함수 ///////////////

// 신용진의 오브젝트!
const shin_Obj = {};
// 오브젝트 형만 만들고 할당은 아래에서
// 1. 영화제목
shin_Obj.title = "말아톤";
// 2. 감독
shin_Obj.director = "정윤철";
// 3. 배우
shin_Obj.actor = "조승우,김미숙";
// 4. 장르
shin_Obj.genre = "드라마";
// 5. 관람가
shin_Obj.ratings = "전체 관람가";
// 6. 예고편
shin_Obj.trailer = function () {
    console.log("예고편", "mGgYQOiUq4s");
    // 플레이어함수 호출
    playMovie("mGgYQOiUq4s");
}; /////////////trailer함수////////////////

// 최수진의 Object
const csj_obj = {};

// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
csj_obj.title = "가디언즈오브갤럭시vol.3";
// 2. 감독
csj_obj.director = "제임스건";
// 3. 배우
csj_obj.actor = "크리스프랫,조샐다나";
// 4. 영화장르
csj_obj.genre = "SF코미디어드벤처";
// 5. 관람가
csj_obj.ratings = "12세";
// 6. 예고편
csj_obj.trailer = function () {
    console.log("예고편:", "XyHr-s3MfCQ");

    // 플레이어함수 호출!!
    playMovie("XyHr-s3MfCQ");
}; ////////////// trailer 함수 ////////////////////


//유혜경의 오브젝트!
const hg_obj = {};
// 오브젝트 형만 만들고 객체 내용은 아래에서 !

// 1. 영화제목
hg_obj.title = "엘리멘탈";

// 2. 감독
hg_obj.director = "피터 손";

// 3. 배우
hg_obj.actor = "레아 루이스";

// 4. 장르
hg_obj.genre = "애니메이션";

// 5. 관람가
hg_obj.ratings = "전체관람가";

// 6. 예고편
hg_obj.trailer = function () {
    console.log("예고편:", "BOqFRHCrN-k");
    //플레이어 함수 호출!
    playMovie("BOqFRHCrN-k");
}; //////////////////trailer함수/////////////////////


// 박서진의 오브젝트
const seo_obj = {};
// 오브젝트 형만 만들고 객체 내용은 아래에서!!
// 1. 영화제목
seo_obj.title = "너의 결혼식";

// 2. 영화감독
seo_obj.director = "이석근";

// 3. 영화배우
seo_obj.actor = "박보영,김영광";

// 4. 영화장르
seo_obj.genre = "멜로";

// 5. 관람가
seo_obj.ratings = "12세 이상";

// 6. 예고편
seo_obj.trailer = function () {
    console.log("예고편:", "HuQ6YFDYY0s");
    // 플레이어 함수 호출
    playMovie("HuQ6YFDYY0s");
}; /////////트레일러 함수//////////


// 민정의 오브젝트!
const kmj_obj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
kmj_obj.title = "가디언즈 오브 갤럭시: Volume 3";

// 2. 감독
kmj_obj.director = "제임스 건";

// 3. 배우
kmj_obj.actor = "크리스 프랫";

// 4. 장르
kmj_obj.genre = "SF,코미디";

// 5. 관람가
kmj_obj.ratings = "15세";

// 6. 예고편
kmj_obj.trailer = function () {
    console.log("예고편:", "XyHr-s3MfCQ");
    // 플레이어함수 호출!
    playMovie("XyHr-s3MfCQ");
}; ///////// trailer 함수 ///////

// 경은의 오브젝트

const lke_obj = {};
// 오브젝트 형만 만들고 할당은 아래에서
// 1. 영화제목
lke_obj.title = "WALL·E";
// 2. 감독
lke_obj.director = "앤드루 스탠튼";
// 3. 배우
lke_obj.actor = "벤 버트, 엘리사 나이트외";
// 4. 장르
lke_obj.genre = "애니메이션";
// 5. 관람가
lke_obj.ratings = "전체관람가";
// 6. 예고편
lke_obj.trailer = function () {
    console.log("예고편:", "3Mi62VKDhm0");

    //플레이어함수 호출
    playMovie("3Mi62VKDhm0");
}; /// trailer 함수 /////

// 주현의 오브젝트!
const an_obj = {};
// 오브젝트 형과 할당만 하고 속성 및 값은 아래에서
// 1. 영화제목 : title
an_obj.title = "리바운드";
// 2. 감독 : director
an_obj.director = "장항준";
// 3. 배우
an_obj.actor = "안재홍, 이신영, 정진운, 김택, 정건주, 김민, 안지호 外";
// 4. 장르
an_obj.genre = "스포츠, 농구, 성장, 코미디";
// 5. 상영등급
an_obj.ratings = "12세";
// 6. 예고편
an_obj.trailer = function () {
    console.log("예고편", "D2RAJe0ZL1Q");
    // 플레이어 함수 호출!
    playMovie("D2RAJe0ZL1Q");
}; /////////// trailer함수 ////////////

// 윤민의 오브젝트
const kimyoonmin_obj = {};

// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
kimyoonmin_obj.title = "인셉션";

// 2. 감독
kimyoonmin_obj.director = "크리스토퍼 놀란";

// 3. 배우
kimyoonmin_obj.actor = "레오나르도 디카프리오, 조셉 고든 레빗";

// 4. 장르
kimyoonmin_obj.genre = "액션";

// 5. 관람가
kimyoonmin_obj.ratings = "12";

// 6. 예고편
kimyoonmin_obj.trailer = function () {
    console.log("예고편: ", "1FdB6LPSMkI");
    playMovie("1FdB6LPSMkI");
}; /////////////trailer 함수 ////////////////////


// 지민의 오브젝트!
const cake_obj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
cake_obj.title = "암살";
// 2. 감독
cake_obj.director = "최동훈";
// 3. 배우
cake_obj.actor = "전지현, 이정재, 하정우, 최덕문, 조진웅";
// 4. 장르
cake_obj.genre = "액션/드라마";
// 5. 관람가
cake_obj.ratings = "15세 관람가";

// 6. 예고편
cake_obj.trailer = function () {
    console.log("예고편 :", "RnGxpZ75zFU");
    // 프레이어 함수 호출
    playMovie("RnGxpZ75zFU");
}; // trailer 함수

// 승준의 오브젝트
const Moon_Obj = {};
// 오브젝트 형만 만들고 할당은 아래서
// 1. 영화제목
Moon_Obj.title = "어바웃 타임";
// 2. 감독
Moon_Obj.director = "리처드 커티스";
// 3. 출연배우
Moon_Obj.actor = "도널 글리슨, 레이첼 맥아담스";
// 4. 장르
Moon_Obj.genre = "로맨스";
// 5. 관람가
Moon_Obj.ratings = "15세";
// 6. 예고편
Moon_Obj.trailer = function () {
    console.log("예고편", "Ugmu8HOdpdo");
    playMovie("Ugmu8HOdpdo");
};

// 진구의 오브젝트
const tonyFilm = {};
//movie info
//1.title
tonyFilm.title = "창궐";
//2.director
tonyFilm.director = "김성훈";
//3.actors
tonyFilm.actor = "현빈,장동건,조우진,기타등등등등등";
//4.genre
tonyFilm.genre = "액션사극";
//5.age
tonyFilm.ratings = "15세";
//6.teaser
tonyFilm.trailer = function () {
    console.log("trailer", "XvH4t7pvDc0");
};
