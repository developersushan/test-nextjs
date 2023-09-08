"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'

export default function product() {
const [open,setOpen] = useState(false)
    const imgs = [
        {id:0,value:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'},
        {id:1,value:'https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15408-1632754154.jpg'},
        {id:2,value:'https://www.cnet.com/a/img/resize/14ea17e64f78845b1aa8dc52a7f67d766390f123/hub/2022/09/12/06157953-aea2-43b5-ac47-dd9e3f4ca9a2/no-bull.jpg?auto=webp&fit=crop&height=675&width=1200'},
        {id:3,value:'https://cdn.thewirecutter.com/wp-content/media/2023/08/watershoes-2048px-1243-2.jpg'},
        {id:4,value:'https://i.ebayimg.com/images/g/Rd8AAOSwn5FkXn7e/s-l1600.png'},
    ]
    const [sliderData,setSliderData] =useState(imgs[0])
    const handleSlider =(index)=>{
        console.log(index)
        const slider = imgs[index]
        setSliderData(slider)
    }
//solution
const menuRef = useRef()
const buttonRef =useRef()
window.addEventListener('click', (e)=>{
    if(e.target !==menuRef.current && e.target !== buttonRef.current){
        setOpen(false)
    }
})
  return (
    <div className='mx-auto  items-center overflow-hidden w-2/3'>
        <div className='mx-auto text-center justify-center flex items-center mb-3'>
            <img src={sliderData.value} width={500} height={500} alt="" />
        </div>
        
        <div className='flex gap-5'>
            {
                imgs.map((data,i)=> <img key={data.id} onClick={()=>handleSlider(i)} className={sliderData.id ===i ?'clicked':''} src={data.value} alt='product image' width={200} height={200}/> )
            }
        </div>
        <div className='mt-4'>
            <button ref={buttonRef} onClick={()=>setOpen(!open)} className={open ?'bg-pink-600 border-[1px] border-gray-400 p-3 rounded-lg text-white w-64':'bg-white border-[1px] border-gray-400 p-3 rounded-lg text-black w-64'}>menu item</button>
            {open &&             <div ref={menuRef} className='w-64 bg-white text-black rounded-xl overflow-hidden'>
                <ul className='rounded-xl'>
                    <Link className='block border-[1px]  border-gray-300 p-2 hover:bg-pink-500 ease-out duration-150 hover:text-white' href='/Home'>Home</Link>
                    <Link className='block border-[1px]  border-gray-300 p-2 hover:bg-pink-500 ease-out duration-150 hover:text-white' href='/product'>product</Link>
                    <Link className='block border-[1px]  border-gray-300 p-2 hover:bg-pink-500 ease-out duration-150 hover:text-white' href='/se'>seller</Link>
                    <Link className='block border-[1px]  border-gray-300 p-2 hover:bg-pink-500 ease-out duration-150 hover:text-white' href='/'>details</Link>
                </ul>
            </div>}
        </div>
    </div>
  )
}
