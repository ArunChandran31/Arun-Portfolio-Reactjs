import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:0.7}}
      className="my-20 text-center text-3xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2> 
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.img 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x: -100}}
              transition={{duration:0.5}}
              src={aboutImg} alt="about" className="rounded-2xl" />
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <motion.p 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration:0.5}}
                className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
