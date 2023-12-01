"use client"

import Image from 'next/image'
import { useState } from 'react';
import styles from './components/style.module.css'
import { images } from '../../next.config';



const generateData = () => {
  const data = [
    {
      text: "1",
      src: "/pine.png"
    },
    {
      text: "1",
      src: "./pine.png"
    },
    {
      text: "2",
      src: "./pine.png"
    },
    {
      text: "2",
      src: "./pine.png"
    },
    {
      text: "3",
      src: "./pine.png"
    },
    {
      text: "3",
      src: "./pine.png"
    },

    {
      text: "4",
      src: "./pine.png"
    },
    {
      text: "4",
      src: "./pine.png"
    },

  ];



  return data
};

export default function Home() {
  const [data] = useState(generateData())
  const [flipped, setFlipped] = useState([])

  return (
    <div className={styles.container}>
      <p className={styles.font}>Memory</p>

      <div className={styles.grid}>
        {data.map((item, index) => {
          const isFlipped = flipped.includes(index)
          return (
            <div key={index} className={styles.random} >
              <div className={styles.scope}>

                {isFlipped ? <img src={item.src} /> : <div onClick={(event) => {
                  console.log(flipped.push(event.target))
                }} className={styles.count}>{item.text}</div>}

              </div>
            </div>

          )
        })}
      </div>
      <button className={styles.btn}>New Game</button>
    </div>
  )
};
