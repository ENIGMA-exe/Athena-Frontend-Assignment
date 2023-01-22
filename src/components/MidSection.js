import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {setVideo, SetVideo} from '../Action/action';

import Getdata from "../API"
import Article from "./Article"
import Video from "./video"


export default function Midsection(){

    var dispatch = useDispatch()
    var vstate = useSelector(state => state.VisibleBox)

    console.log(vstate)

    var [articles,setArticles] = useState([])
    const URL = [
        `https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4`,
        `https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4`,
        `https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4`
    ]

    //handle scroll
    var handleScroll = (e)=>{
        var text_section_buttom = e.target.getBoundingClientRect().bottom;
        var children = [...e.target.children]
        var max_visible_id = 0;
        var visible_height = Number.MAX_SAFE_INTEGER;
    
        children.forEach((child,index) => {
            var bottom = child.getBoundingClientRect().bottom
    
            if(Math.abs(text_section_buttom-bottom) < visible_height){
                visible_height = Math.abs(text_section_buttom-bottom)
                max_visible_id = Number(child.id)
            }
        });

        console.log(max_visible_id)
        if(!vstate[max_visible_id]){
            console.log("triger")
            dispatch(setVideo(max_visible_id))
        }
    
    }
    
    useEffect(()=> {
        //...............Api fetch.................
        Getdata()
        .then(res=>setArticles(res.texts))
        .catch((e)=>{console.log(e)})

    },[vstate])

  return(
      <section className="mid">
            <aside className="txt" onScroll={(e)=>{handleScroll(e)}}>
                {
                    (articles.length > 0)&&articles.map((article,index)=>{
                        return(
                            <Article
                            key={index}
                            id={index}
                            heading={article.heading}
                            subHeading={article.subHeading}
                            description = {article.description}
                            url={URL[index]}
                            />
                        )
                    })
                }
                
            </aside>
                {/* {(vstate[0])&& <Video url={URL[0]}/>}
                    {(vstate[1])&& <Video url={URL[1]}/>}
                    {(vstate[2])&& <Video url={URL[2]}/>} */}
            <aside className="media"> 
                {
                    URL.map((u,i)=>{
                        return(
                            (vstate[i])&&<Video url={u} key={i}/>
                        )
                    })
                }
                
            </aside>
      </section>
  )
}