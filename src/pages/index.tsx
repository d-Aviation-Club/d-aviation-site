import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import background from '../images/background.jpg'
import { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
import { Button } from 'antd'

import {
  faSearch,
  faAngleDown,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  useEffect(()=>{
   
    const parallax = document.getElementById('parallax')
    const layer1 = document.getElementById('layer1cn')
    const layerbg = document.getElementById('layerbg')
    const layer2 = document.getElementById('layer2')
    const layer3 = document.getElementById('layer3')
    const header = document.getElementById('header')
    const plane = document.getElementById('plane')
    // const jude = document.getElementById('jude')
    window.addEventListener('scroll', ()=>{
      const value = window.scrollY;
      // layer1.style.marginTop = value * 3.5 + 'px'
      plane.style.marginLeft = value * -2.5 + 'px'
      layer2.style.top = value * 0.5 + 'px';
      layer1.style.top = value * 1.5 + 'px';
      // jude.style.marginTop = value * -0.5 + 'px';
      // header.style.top = -value * -1.5 + 'px';
    })
  })
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {/* CLASSES FOR OVAL THING: h-[1000rem]  */}
      <main className={`
      ${styles.main} relative
       h-full pb-[100rem] `}
      >
        {/* <h1 className="text-[3rem] font-medium text-capitilize text-[#303356]" id="header"> Welcome to D.Aviation</h1> */}
        <section id='parallax' className="parallax z-1 bg-[#1fa0e0]">
            <div id="layer1cn">
              <img src="/Layer1.png" id="layer1" alt="" />
            </div>
            {/* <div id='jude' className="z-0">
              <h1>By JUDE</h1>
            </div> */}
            <img src="/Plane.png" className='z-10' id="plane" alt="" />
            <img src="/Layer2.png" id="layer2" alt="" />
            <img src="/Layer3v2.png" className='z-10' id="layer3" alt="" />
        </section>
        {/* <section className={styles.parallax}>
          <div className="parallax-inner">
            <br />
            <h1 className="center">Welcome to Jude</h1>
            <br />
          </div>
        </section> */}
        <section className='relative grid grid-cols-1 sm:grid-cols-5 my-[10rem] w-full max-w-[80vw] justify-between gap-12 m-auto max-md:flex-col items-start'>
          <div className="col-span-3 bg-[#EBF5FA] rounded-md ">
            <img className='w-full h-auto rounded-md' src="https://airlines.iata.org/sites/default/files/event_images/Drone-shutterstock_698384557.jpg" alt="" />
          </div>
          <div className='flex col-span-2 gap-2 flex-col align-start '>
            <h1 className="text-[2rem] font-medium">Our Drone</h1>
            <p>Say hello to DRONE 500! Assembled and programmed by student members.</p>
            <Button type="primary"  className='bg-primary mt-5' color="primary" variant="contained">Drone Program</Button>
          </div>
        </section>
        <section className='relative grid grid-cols-1 sm:grid-cols-5 my-[10rem] w-full max-w-[80vw] justify-between gap-12 m-auto max-md:flex-col items-start'>
          <div className='flex col-span-2 gap-2 flex-col align-start '>
            <h1 className="text-[2rem] font-medium">Photos!</h1>
            <p>Check out some awesome photos of the program.</p>
            <Button type="primary"  className='bg-primary mt-5' color="primary" variant="contained">View Gallery</Button>
          </div>
          <div className="grid col-span-3 grid-cols-1 sm:grid-cols-2 gap-4 rounded-md">
            <div className="relative rounded-md">
              <img src="https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2021/03/how-to-build-your-own-fpv-drone-jt.jpg?fit=crop" alt="Image 1" className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-md">
              <img src="https://s4.reutersmedia.net/resources/r/?m=02&d=20170321&t=2&i=1177436023&w=&fh=545&fw=810&ll=&pl=&sq=&r=2017-03-21T174509Z_25997_MRPRC13F2549640_RTRMADP_0_USA-DRONE-HUNTER" alt="Image 2" className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-md">
              <img src="https://www.cpomagazine.com/wp-content/uploads/2018/04/eye-in-the-sky-drone-surveillance-and-privacy_1500.jpg" alt="Image 3" class="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-md">
              <img src="https://diginomica.com/sites/default/files/images/2020-09/drone-2816244_1280_0.jpg" alt="Image 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>


        <footer className="bg-[#303356] text-gray-300">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-center md:order-2">
                <a href="#" className="text-gray-400 hover:text-gray-500 ml-6">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20 3h-3.82c-.78 0-1.47.47-1.77 1.16l-1.57 3.89-.43 1.06h-6.01l-.43-1.06-1.57-3.89A1.99 1.99 0 0 0 4.82 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3.82c.78 0 1.47-.47 1.77-1.16l1.57-3.89.43-1.06h6.01l.43 1.06 1.57 3.89c.3.69.99 1.16 1.77 1.16H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 ml-6">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M23.998 4.569a9.29 9.29 0 0 1-2.675.73A4.65 4.65 0 0 0 23.304 3.1a9.232 9.232 0 0 1-2.944 1.128A4.612 4.612 0 0 0 15.912 0c-2.536 0-4.594 2.058-4.594 4.593 0 .36.04.712.112 1.05A13.112 13.112 0 0 1 1.568 1.268a4.55 4.55 0 0 0-.633 2.312c0 1.594.81 2.996 2.04 3.82a4.617 4.617 0 0 1-2.09-.577v.056c0 2.223 1.582 4.072 3.683 4.498a4.704 4.704 0 0 1-1.23.164c-.298 0-.586-.027-.875-.083a4.627 4.627 0 0 0 4.312 3.206 9.33 9.33 0 0 1"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 ml-6">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.305 3.438 9.8 8.207 11.387.6.111.793-.26.793-.576 0-.284-.011-1.04-.015-2.042-3.338.724-4.042-1.609-4.042-1.609-.545-1.384-1.333-1.753-1.333-1.753-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236
                      1.838 1.236 1.07 1.844 2.809 1.309 3.495.999.108-.776.419-1.309.762-1.607-2.665-.304-5.466-1.307-5.466-5.816 0-1.284.459-2.335 1.236-3.164-.124-.303-.536-1.504.117-3.132 0 0 1.002-.319 3.276 1.212.95-.265 1.968-.397 2.982-.402 1.014.005 2.032.137
                      2.982.402 2.273-1.531 3.276-1.212 3.276-1.212.653 1.628.242 2.829.118 3.132.776.829 1.235 1.879 1.235 3.164 0 4.518-2.804 5.51-5.479 5.807.429.36.813 1.089.813 2.195 0 1.586-.015 2.862-.015 3.248 0 .319.192.694.798.576C20.567 21.795 24 17.31
                      24 12c0-6.627-5.373-12-12-12z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="mt-8 md:mt-0 md:order-1">
                <p className="text-center text-base">&copy; 2023 D.Aviation Corporation. All rights reserved.</p>
              </div>
            </div>
            </div>
          </footer>







        {/* <BackgroundImg></BackgroundImg> */}
          {/* <img className={styles.backgroundImg} src={"https://upload.wikimedia.org/wikipedia/commons/d/d9/Plane_Flying_Past_Mount_Kinabalu.jpg"}  /> */}
      </main>
      
    </>
  )
}