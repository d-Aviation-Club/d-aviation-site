import styles from '@/styles/Navbar.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import {useRef, useState, useEffect} from 'react'

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      setNavbar(true)
      // document.getElementById('navbar').style.background = "white";
    } else {
      setNavbar(false)
    }
  }
  useEffect(()=>{
    changeBackground()
    console.log(navbar)
    window.addEventListener("scroll", changeBackground)
  }, [navbar])
  // this.state = {
  //     active: false,
  // };
  // const navbar = document.getElementsByClassName('navbarCN')
  //   useEffect(() => {
  //     window.addEventListener('scroll', () => {
  //       navbar.classList.add("sticky")
  //     })
  //   }, [])
  // ${navbar ? "bg-white p-4" : "bg-none p-6"} fixed 

    return (
    <div id='navbar' className={`absolute flex w-full items-center justify-between text-white 
    transition-all top-0 z-50 p-6`} >
      <div className="flex w-full justify-between items-center">
        <div className="h-fit"><Image className="" src='/DAVIATION-LOGO-3.png' width={100} height={100} alt="D.Aviation Logo"></Image></div>
        <ul className={styles.middle}>
          <span>
            <a href="" className={`hover-underline-animation `}>Photo Gallery</a>
          </span>
          <span>
            <a href="" className={`hover-underline-animation `}>Sponsors</a>
          </span>
          <span>
            <a href="" className={`hover-underline-animation `}>About Us</a>
          </span>
        </ul>
        <div>
        <Button className={`${styles.cta} text-white bg-primary border-white`}>Join</Button>
        </div>
      </div>
    </div>
    )
    
  }
  

  export default Navbar;