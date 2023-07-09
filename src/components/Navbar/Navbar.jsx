// import React, { useState } from 'react';
// import './Navbar.scss';
// import { images } from '../../constants';
// import { HiMenu, HiX} from 'react-icons/hi';
// import { motion } from 'framer-motion';


// const list = [ 'home', 'about', 'our fleet', 'service', 'contact'];
// const languages = [
//   { lang: 'Eesti', imgSrc: images.est },
//   { lang: 'English', imgSrc: images.eng },
//   { lang: 'Русский', imgSrc: images.rus },
// ];

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const [activeLink, setActiveLink] = useState(list[0]);
//   const [underlineStyle, setUnderlineStyle] = useState(activeLink.offsetWidth);

//   const handleLinkClick = (item, event) => {
//     event.preventDefault();
//     setActiveLink(item);
//   };

//   const handleMouseEnter = (event) => {
//     const target = event.target;
//     setUnderlineStyle({
//       width: target.offsetWidth,
//       left: target.offsetLeft,
//     });
//   };

//   const handleMouseLeave = () => {
//     const activeLinkElement = document.querySelector(`.nav__link.active`);
//     if (activeLinkElement) {
//       setUnderlineStyle({
//         width: activeLinkElement.offsetWidth,
//         left: activeLinkElement.offsetLeft,
//       });
//     } else {
//       setUnderlineStyle({});
//     }
//   }

//   return (
//     <nav className='app__nav app__flex'>
//       <div className='nav__wrapper'>
//         <a href='/' className='logo__link'>
//           <img src={images.logo} alt='VipBuss logo' />
//           <i>Premium Bus Transfers</i>
//         </a>
//         <div className='nav__main'>
//           <div className='nav__lang'>
//             {languages.map((language, index) => (
//               <a className='lang-link' href='#' key={index}>
//                 <img className='lang-img' src={language.imgSrc} alt={language.lang} />
//               </a>
//             ))}
//           </div>
//           <ul
//             className='nav__links'
//             onMouseLeave={handleMouseLeave}
//           >
//             {list.map((item) => (
//               <li
//                 className='app__flex'
//                 key={`link-${item}`}
//               >
//                 <a
//                   className={`nav__link ${
//                     activeLink === item ? 'active' : ''
//                   }`}
//                   href={`#${item}`}
//                   onClick={(event) => handleLinkClick(item, event)}
//                   onMouseEnter={handleMouseEnter}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//             <div
//               className='nav__underline'
//               style={underlineStyle}
//             />
//           </ul>
//         </div>
  
//         <div className='app__navbar-menu'>
//           <HiMenu onClick={() => setToggle(true)}/>

//           {toggle && (
//             <motion.div
//               className='navbar__container' 
//               whileInView={{x: [300, 0]}}
//               transition={{duration: 0.85, ease: 'easeInOut'}}
//             >
//               <div className='navbar__langs'>
//                 <div>
//                   {languages.map((language, index) => (
//                   <a className='lang-link' href='#' key={index}>
//                     <img className='lang-img' src={language.imgSrc} alt={language.lang} />
//                   </a>
//                 ))}
//                 </div>
//                 <HiX onClick={() => setToggle(false)}/>
//               </div>
//               <ul>
//                 {list.map((item) => (
//                   <li className='' key={item}>
//                     <a href={`#${item}`} onClick={() => setToggle(false)}>
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar
import { images } from '../../constants';

import React from 'react';
import './Navbar.scss';


const Navbar = () => {

  const languages = [
    { lang: 'Eesti', imgSrc: images.est },
    { lang: 'English', imgSrc: images.eng },
    { lang: 'Русский', imgSrc: images.rus },
  ];
  

  return(
    <nav>
      <input type='checkbox' id='check'></input>
      <label for='check' class='checkbtn'>
        <i className="bx bx-menu"></i>
      </label>
      <label className='logo'>
        VipBus
      </label>
      <ul>
        <li>
          <a href='#' class='active'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>fleet</a>
        </li>
        <li>
          <a href='#'>service</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
        <li className='lang__mobile'>
          <a>
            <img className='lang-img' src={images.est} alt={'lang'} />
          </a>
        </li>
        <li className='lang__mobile'>
          <a>
            <img className='lang-img' src={images.rus} alt={'lang'} />
          </a>
        </li>
        <li className='lang__mobile'>
          <a>
            <img className='lang-img' src={images.eng} alt={'lang'} />
          </a>
        </li>
      </ul>
      <div className='lang__container'>
        <a className='lang-first' href='#'>
          <img className='lang-img' src={images.est} alt={'lang'} />
        </a>
        <a className='lang' href='#'>
          <img className='lang-img' src={images.rus} alt={'lang'} />
        </a>
        <a className='lang' href='#'>
          <img className='lang-img' src={images.eng} alt={'lang'} />
        </a>
      </div>
        
      
    </nav>
  )
}

export default Navbar