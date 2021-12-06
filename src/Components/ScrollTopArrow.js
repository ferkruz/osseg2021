import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (

        <FaArrowCircleUp className="scrollTop btn btn-primary btn-lg float-end" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>

  );
}

export default ScrollTopArrow;