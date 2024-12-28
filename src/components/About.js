import AboutImg from '../assets/program.png';
export default function About() {
    const config = {
        line1 : 'Hi, My name is Tamilarasi, I am a Full stack web developer. I built beautiful website with React.js and Tailwind CSS.',
        line2 : 'I am proficient in Frontend skills like React.js, Tailwind CSS, CSS3, Bootstrap and many more.',
        line3 : 'In backend I know Node.js, Java, Python, C, C++, SQL.'
    }
    return <section className="flex flex-col md:flex-row bg-custom-cream px-5" id="about">
        <div className='py-5 md:w-1/2 flex justify-center'>
            <img src={AboutImg} alt='About Image'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-deepgreen font-bold'>
            <h1 className='text-4xl border-b-4 border-sea-green mb-5 w-[170px]'>About Me</h1>
            <p className='mb-5'>{config.line1}</p>
            <p className='mb-5'>{config.line2}</p>
            <p className='mb-5'>{config.line3}</p>
        </div>
        </div>
    </section>
}