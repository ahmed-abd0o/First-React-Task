import Modal from "./Modal";
import { useState } from "react";
import Star from './../Star and lines/Star';

export default function Portfolio() {
    const arrayOfImages = ["../../../public/Home/routeegy.github.io/poert1.png","../../../public/Home/routeegy.github.io/port2.png","../../../public/Home/routeegy.github.io/port3.png"]
    const [hideState, setHideState] = useState(true)
    const [modalSrc, setModalSrc] = useState("../../../public/Home/routeegy.github.io/poert1.png")
    function modalFunction(item){
        setHideState(false)
        setModalSrc(item)
    }
    document.addEventListener("keydown",function(e){
        if(e.key == "Escape")
            setHideState(true)
    })
    function imageComponent(item){
        return(
        <div onClick={()=>modalFunction(item)} className="img-container relative flex justify-center items-center group" >
                    <img
                        src={item}
                        className="w-full"
                        alt=""
                    />
                    <div className="text-9xl text-white absolute bg-emerald-300 w-full h-full flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  duration-300 select-none cursor-pointer leading-3">
                        +
                    </div>
                </div>
    )}
    
    return (
        <div className="h-[95vh] flex flex-col items-center justify-center">
            <h2 className="text-5xl uppercase font-bold">
                portfolio component
            </h2>
            <div>
                <Star white={false}/>
            </div>
            <div className="grid grid-cols-3 container  gap-10 *:rounded-2xl *:overflow-hidden mt-8"  >
                {arrayOfImages.map((item)=>imageComponent(item))}
                {arrayOfImages.map((item)=>imageComponent(item))}
            </div>
            <Modal state={hideState} src={modalSrc}/>

        </div>
        
    );
}
