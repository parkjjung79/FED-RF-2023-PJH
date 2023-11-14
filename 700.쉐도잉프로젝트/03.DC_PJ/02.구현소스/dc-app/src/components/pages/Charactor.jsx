// 캐릭터페이지 메인컨텐츠

import { Banner } from "../modules/Banner";

export function Character(){
    return(
        <>
            <h1 style={{textAlign:'center'}}>캐릭터 페이지</h1>
            <Banner category="WONDER WOMAN" />
            <Banner category="GREEN LENTURN" />
            <Banner category="BATMAN" />
            <Banner category="AQUAMAN" />
            <Banner category="CYBORG" />
            <Banner category="THE FLASH" />
        </>
    )

} ////////////  Character 컴포넌트 ///////////