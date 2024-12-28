import ResumeImg from '../assets/resume.png';
export default function Resume() {
    const config = {
        link : '/resume.pdf'
    }
    return <section className="flex flex-col md:flex-row bg-custom-cream px-5" id="resume">
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img src={ResumeImg} alt="resume_image"/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-deepgreen font-bold'>
            <h1 className='text-4xl border-b-4 border-sea-green mb-5 w-[135px]'>Resume</h1>
            <p className='mb-5'>You can view my resume <a className=" btn text-white" href={config.link} target='_blank' rel="noopener noreferrer">Download</a></p>
    
        </div>
        </div>
    </section>
}