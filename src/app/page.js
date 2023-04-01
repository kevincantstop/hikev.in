'use client'

import {useEffect, useRef} from 'react'
import ProfileCard from '@/components/ProfileCard'
import VanillaTilt from 'vanilla-tilt';

export default function Home() {
  const cardRef = useRef(null);

  useEffect(() => {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 400
      });
  }, [])

  return (
    <main className={"bg-slate-950 font-mono"}>
      <div className={`circle-1 rounded-full`}/>
      <div className={`circle-2 rounded-full`}/>
      <div className={'text-center filter backdrop-blur-xl'}>
        <div className='card-container flex h-screen' ref={cardRef}>
          <ProfileCard />
        </div>
      </div>
    </main>
  )
}
