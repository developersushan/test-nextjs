"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function count() {
    const [days,setDays] = useState(0);
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const {theme,setTheme} = useTheme()
    useEffect(()=>{
        const target = new Date('9/26/2023 12:20:20')
        const interval = setInterval(()=>{
            const now = new Date()
            const difference = target.getTime() - now.getTime()
            const d = Math.floor(difference / (1000*60*60*24))
            setDays(d);
            const h = Math.floor(difference %(1000*60*60*24) / (1000*60*60))
            setHours(h)
            const m = Math.floor(difference%(1000*60*60)/(1000*60))
            setMinutes(m)
            const s = Math.floor(difference%(1000*60)/(1000))
            setSeconds(s)
        },1000)
        return ()=> clearInterval(interval)
    },[])
  return (
    <div className='flex justify-center items-center'>
        <div>
            <span onClick={()=>setTheme('light')}>light</span>
            <span onClick={()=>setTheme('dark')}>dark</span>
            ({theme})
        </div>
        <div className='flex justify-around gap-10'>
        <div className='bg-pink-600 p-10 text-4xl rounded-xl'>{days} days</div>
        <div className='bg-pink-600 p-10 text-4xl rounded-xl'>{hours} hour</div>
        <div className='bg-pink-600 p-10 text-4xl rounded-xl'>{minutes} minutes</div>
        <div className='bg-pink-600 p-10 text-4xl rounded-xl'>{seconds} seconds</div>
        </div>
    </div>
  )
}
