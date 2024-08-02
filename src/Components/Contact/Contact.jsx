import React, { useState } from "react";
import Star from "./../Star and lines/Star";

export default function Contact() {
  
  const testArray = [true ,true  ,true ,true  ];
  const [inputChange, setInputChange] = useState(testArray)
  
  const testFunc = function (e,idx) {
    if(!e.target.value.trim()){
      const newInputChange = structuredClone(inputChange)
      newInputChange.splice(idx,1,true)
      setInputChange(newInputChange)
      
    }
    else{
      const newInputChange = structuredClone(inputChange)
      newInputChange.splice(idx,1,false)
      setInputChange(newInputChange)
    }
  }
    return (
        <div className="h-[95vh] flex flex-col items-center justify-center">
            <h2 className="text-5xl uppercase font-bold">Contact Section</h2>
            <div className="">
                <Star white={false}/>
            </div>
            <div className="w-3/6 ">
                <div>
                  <label
                      className={`block relative ${inputChange[0] ? "-bottom-10" : "bottom-0"} transition-all duration-150 text-gray-700 text-sm font-bold mb-2`}
                      htmlFor="username"
                  >
                      Username
                  </label>
                  <input
                      className=" border-b-2 relative border-slate-200 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      onChange={(e)=> testFunc(e,0)}
                      placeholder="Username"
                  />
                </div>
                <div className="mt-8">
                  <label
                      className={`block relative ${inputChange[1] ? "-bottom-10" : "bottom-0"} transition-all duration-150 text-gray-700 text-sm font-bold mb-2`}
                      htmlFor="age"
                  >
                      Userage
                  </label>
                  <input
                      className=" border-b-2 relative border-slate-200 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="text"
                      onChange={(e)=> testFunc(e,1)}
                      placeholder="Userage"
                  />
                </div>
                <div className="mt-8">
                  <label
                      className={`block relative ${inputChange[2] ? "-bottom-10" : "bottom-0"} transition-all duration-150 text-gray-700 text-sm font-bold mb-2`}
                      htmlFor="mail"
                  >
                      Email
                  </label>
                  <input
                      className=" border-b-2 relative border-slate-200 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="email"
                      onChange={(e)=> testFunc(e,2)}
                      placeholder="email"
                  />
                </div>
                <div className="mt-8">
                  <label
                      className={`block relative ${inputChange[3] ? "-bottom-10" : "bottom-0"} transition-all duration-150 text-gray-700 text-sm font-bold mb-2`}
                      htmlFor="mail"
                  >
                      Password
                  </label>
                  <input
                      className=" border-b-2 relative border-slate-200 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="password"
                      onChange={(e)=> testFunc(e,3)}
                      placeholder="Password"
                  />
                </div>
                <button className="bg-sky-500 rounded-2xl px-5 py-2 mt-8 w-full hover:bg-sky-900 hover:text-white  focus:border-black border-4">
                  Send These Data
                </button>
            </div>
        </div>
    );
}
