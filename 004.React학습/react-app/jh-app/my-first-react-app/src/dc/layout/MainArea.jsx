// 메인영역 컴포넌트

import { Character } from "../contents/CHARACTERS";
import { Main } from "../contents/Main";
import { Video } from "../contents/Video";
import { Comics } from "../contents/COMICS";
import { Movies } from "../contents/MOVIES";
import { Games } from "../contents/GAMES";
import { News } from "../contents/NEWS";


export function MainArea(props){
    // cat(category) 속성으로 메뉴분류 전달
   

    return(
        <main className="cont">
            {
                props.cat=='main'&&
            <Main cat={props.cat}/>
            }
            {
                props.cat=='CHARACTERS'&&
            <Character cat={props.cat}/>
            }
            {
                props.cat=='VIDEO'&&
                <Video />
            }
            {
                props.cat=='COMICS'&&
            <Comics cat={props.cat}/>
            }
            {
                props.cat=='MOVIES'&&
            <Movies cat={props.cat}/>
            }
            {
                props.cat=='GAMES'&&
            <Games cat={props.cat}/>
            }
            {
                props.cat=='NEWS'&&
            <News cat={props.cat}/>
            }
        </main>
    );
    
} //////////// MainArea 컴포넌트 ////////////