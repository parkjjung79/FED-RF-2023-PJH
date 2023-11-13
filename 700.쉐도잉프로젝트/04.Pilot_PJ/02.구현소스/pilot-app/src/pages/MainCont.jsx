// 메인 페이지 컨텐츠 컴포넌트

import { MenSub } from "./MenSub";
import { WomenSub } from "./WomenSub";

export function MainCont(props){
    // props.page 속성값으로 main/men/women/style

    return(
        <>
            <h2>메인영역</h2>
            {props.page=='main'&&<MainCont />}
            {props.page=='men'&&<MenSub />}
            {props.page=='women'&&<WomenSub />}
            {props.page=='style'&&<StyleSub />}
            
            
            
            
        </>
    )

} /////////////// MainCont 컴포넌트 ///////////////