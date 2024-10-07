import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1.5}}
      className="my-10 text-center text-3xl">Connect with Me</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileHover={{scale:1.2, transition:{duration:0.2}}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion.a 
        whileHover={{scale:1.2, transition:{duration:0.2}}} 
        href="#" className="border-b">{CONTACT.email}</motion.a>
      </div>
    </div>
  )
}

export default Contact
