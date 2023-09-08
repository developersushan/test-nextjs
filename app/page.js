"use client"
import { useRef, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Home() {
  const [scrollCount,setScrollCount] = useState(false)
  const [open,setOpen] = useState(false)
  //solution
  const menuRef = useRef()
  const buttonRef = useRef()
  window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current && e.target !== buttonRef.current){
      setOpen(false)
    }
  })
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}>
      <h2 className="text-4xl"> {scrollCount &&<CountUp start={0} end={100} duration={2} delay={0} />}+ </h2>
      </ScrollTrigger>

    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo omnis illum a earum iste nihil, rem impedit fugiat quo provident modi magni. In, nisi optio. Nemo aliquid ab sed consequuntur error reprehenderit reiciendis modi voluptates, voluptas nulla in recusandae voluptate a illum vel, tenetur amet nam dicta iusto tempore! Illum et deserunt odit? Qui atque vero numquam architecto a dicta, explicabo repellat accusantium dignissimos reicie</p>

    <div className="relative">
      <button ref={buttonRef} onClick={()=>setOpen(!open)} className="text-white border-[1px] border-pink-600 p-2 rounded shadow-lg focus:border-green-500">dropdown menu</button>
      {open &&( <div ref={menuRef} className="bg-white text-black p-2 rounded absolute top-[45px] delay-200 duration-500 left-[0px] w-48">
        <ul>
          <li>HOme</li>
          <li>HOme</li>
          <li>HOme</li>
          <li>HOme</li>
        </ul>
      </div>)}

    </div>
    </main>
  )
}
