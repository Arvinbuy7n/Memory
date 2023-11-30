"use client"
import Image from 'next/image'
import { useState } from 'react';

const generateData = () => {
  const data = [];

  for (let i = 0; i < 8; i++) {
    data.push({
      value: i
    })
    data.push({
      value: i
    })
  }

  return data
}

export default function Home() {
  const [data, setData] = useState(generateData())

  return (
    <div className='flex flex-col justify-center items-center bg-teal-300 w-full h-fit gap-5'>
      <p className='text-3xl'>Memory</p>
      <div className='flex bg-black w-[100px] h-[100px] text-white justify-center items-center text-7xl'> X </div>

      {data.map((item) => <div className='flex'>{item.value}</div>)}
    </div>
  )
}
