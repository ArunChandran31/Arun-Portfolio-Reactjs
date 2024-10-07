import logo from "../assets/arunlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const Navbar = () => {
  const handleLinkedinClick = () =>{
    window.open('https://www.linkedin.com/in/arunkumarc31/', '_blank')
  };
  const handleGithubClick = () =>{
    window.open('https://github.com/arunchandran2806', '_blank')
  };  
  const handleInstagramClick = () =>{
    window.open('https://www.instagram.com/arunn.chandran/', '_blank')
  };
  const handleTwitterClick = () =>{
    window.open('https://www.linkedin.com/in/arunkumarc31/', '_blank')
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-45" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.div whileHover={{scale:1.2, transition:{duration:0.2}}} onClick={handleLinkedinClick} style={{ cursor: 'pointer' }} ><FaLinkedin /></motion.div>
          <motion.div whileHover={{scale:1.2, transition:{duration:0.2}}} onClick={handleGithubClick} style={{ cursor: 'pointer' }}><FaGithub /></motion.div>
          <motion.div whileHover={{scale:1.2, transition:{duration:0.2}}} onClick={handleInstagramClick} style={{ cursor: 'pointer' }}><FaInstagram /></motion.div>
          <motion.div whileHover={{scale:1.2, transition:{duration:0.2}}}onClick={handleTwitterClick} style={{ cursor: 'pointer' }}><FaSquareXTwitter /></motion.div>  
            {/* <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter /> */}
        </div>
    </nav>
  )
}

export default Navbar
