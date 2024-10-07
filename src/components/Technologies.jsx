import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration:1.5}}
         className="my-20 text-center text-3xl">Expertise</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <FaJava className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <FaPython className="text-7xl text-purple-400"/>
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <SiMysql className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <FaHtml5 className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <FaReact className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <IoLogoJavascript className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <IoLogoGithub className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <FaDocker className="text-7xl text-purple-400" />
            </div>
            <div className="rounded-2xl border-0 border-neutral-800 pb-4">
                <FaPlus className="text-2xl text-white-400" />
            </div>
        </motion.div>
    </div>
  )
}

export default Technologies
