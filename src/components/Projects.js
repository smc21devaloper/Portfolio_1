import websiteImg1 from '../assets/Website-Bootstrap.png';
import websiteImg2 from '../assets/Website-React.png';
import websiteImg3 from '../assets/IDCardMaker.png';
export default function Projects()
{
    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'I created website using Bootstrap Framework, HTML & CSS.',
                link:'https://tamilarasi-smvcoder.github.io/SMV_Web/'

            },
            {
                image: websiteImg2,
                description: 'I created website using Node JS, React JS and Three JS.',
                link:'https://smv-karpom-karpipom.netlify.app/'

            },
            {
                image: websiteImg3,
                description: 'ID Card Maker build using HTML, CSS and Bootstrap Framework.',
                link:'https://tamilarasi-smvcoder.github.io/BootstrapIDcardMaker/web/index.html'

            }
        ]
    }
    return <section className="flex flex-col py-20 px-10 justify-center bg-sea-green font-bold text-custom-cream" id="projects">
        <div className="w-full ">
            <div className="flex flex-col px-5 py-5">
                <h1 className='text-4xl border-b-4 border-[#E3F0AF] mb-5 w-[140px]'>Projects</h1>
                <p>These are some of my best projects. I have built these with React, Node JS, and Bootstrap Frameworks.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-5 gap-5 justify-center'>
                {config.projects.map((project)=>(

                    <div className='relative'>
                        <img className='h-[250px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5 text-deepgreen'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View</a>
                            </div>
                        </div>
                    </div>

                ))}
                
            </div>
        </div>
    </section>
}