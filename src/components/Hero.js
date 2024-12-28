import HeroImg from '../assets/hero.png'
import { AiOutlineGithub, AiOutlineYoutube, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config={
        subtitle:'Im a Full-stack Developer.'
    }
    return<section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center' id="hero">
        <div className='md:w-1/2'>
        <h1 className=' text-deepgreen text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-hero-font'>
            Hi, <br/>Im Tamilarasi
            <p className='md:text-4xl text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 text-deepgreen'>
            <a href='https://github.com/tamilarasi-smvcoder' className='pr-5 hover:text-black'><AiOutlineGithub size={40}/></a>
            <a href='http://www.youtube.com/@smvtutorials7867' className='pr-5 hover:text-red-600'><AiOutlineYoutube size={40}/></a>
            <a href='https://www.linkedin.com/in/tamilarasis12/' className='hover:text-vivid-blue'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImg} alt="Hero Image"/>
    </section>
}