import React, { useEffect, useState } from 'react'
import "./scrollToTop.css"

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)


    const scrollToTop = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    const listenToScroll = () => {
      // Height after which we want to hide
      let heightToHidden = 250;
      // Shows the distance in px from top while scrolling
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      //console.log(heightToHidden, winScroll)

      winScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);

    }

    useEffect(()=>{
      window.addEventListener("scroll", listenToScroll)
      // To remove load from  the app and stop listening the scroll event
      return () => window.removeEventListener("scroll", listenToScroll)
    },[])



  return (
    <>
    {
      isVisible &&  <div className='go-to-top' onClick={scrollToTop}>
      <i class="fa fa-arrow-up"></i>
      </div>
    }
       
    </>
    
  )
}


