import JourneyImg from '../assets/journey.png';

export default function Journey() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src={JourneyImg}
        alt="My Journey"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Centered Scrollable Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 overflow-y-auto">
        <div className="bg-black bg-opacity-60 rounded-xl p-6 md:p-10 w-[95%] max-w-[1600px] max-h-[90vh] overflow-y-auto text-left text-white scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">


          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center font-hero-font">My Journey</h1>

          {/* Journey Content */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Transforming Limitations into Learning Opportunities</h2>
          <p className="indent-8 mb-6">
            I was born and raised in a simple background, studying from 1st to 12th standard in a
Government School, entirely in Tamil medium. After completing school, I joined Vi Institute of
Technology, an Anna University affiliated engineering college located, just 7 km from my home.
It was 2019, engineering was losing popularity. Many people around me believed that
“engineering has no future” and “you won’t get a job.” Out of the entire 2019 batch in my school, I
was the only student who chose engineering. Even in my college, less than 30 students joined
across all departments, and I eventually became part of the last batch before the college closed
down.
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">Learning Without a Classroom</h3>
          <p className="indent-8 mb-6">
            The journey was far from easy. As the college faced challenges, lack of faculty, limited
resources, we were often left to study on our own. There were days without formal classes or
experienced lecturers. But I refused to give up.
          </p>
          <p className='mb-6'>
            In 2020, during my second semester, the COVID-19 pandemic hit. Colleges shut down, and
learning shifted online. During this time, I developed a passion for learning new things. My principal,
Dr. Radhakrishnan, recognized this and gave me an opportunity to work with Vi Microsystems, led by
our college chairman Dr. R. Vijayarajeshwaran.
          </p>
          <p className=' mb-6'>
            This was my entry into the world of IoT. I learned to build IoT projects and gained hands-on
experience in embedded programming. It was here that I saw how technology could solve real-world
problems.
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">Giving Back to My Community</h3>
          <p className="indent-8 mb-6">
            With my father’s support, I started a small computer coaching centre in my village. I taught
students basic computer skills, programming fundamentals, and Tamil &amp; English typewriting. I also began helping people in surrounding villages, educating them about government schemes and
assisting them with applications.
          </p>
        <p className="mb-6">
            This was a turning point in my life. Until then, I was a very introverted person. Teaching and
community service helped me grow socially and emotionally. I learned how to connect with people
and understand their needs.
          </p>
          <h3 className="text-xl font-semibold mb-2  text-primary">Lessons That Shaped Me</h3>
          <p className="mb-4">Through this journey, I discovered three powerful truths:</p>
          <ul className="list-disc list-inside mb-6 ml-4">
            <li>Opportunities may be few, but determination can multiply them.</li>
            <li>Language is not a barrier — mindset is.</li>
            <li>When you have no one to guide you, you can still guide yourself.</li>
          </ul>

          <p className="mb-6">
            Eventually, my efforts paid off — I was placed at Signatech Services Pvt. Ltd. My journey from a
Tamil-medium government school to a corporate office is proof that background doesn’t decide your
future, consistency and willpower do.
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">A Philosophy That Guides Me</h3>
          <p className="mb-6">
            My father once shared a lesson that shaped how I see life. To succeed in any skill, five elements play
            a major role:
          </p>
          <ul className="list-disc list-inside mb-6 ml-4">
            <li>Parents (early environment): Support, values, discipline, encouragement</li>
            <li>Society (friends, mentors, community): Exposure, opportunities, motivation</li>
            <li>Time: Consistent, effective investment in learning and practice</li>
            <li>Personal Drive: Self-motivation and determination</li>
            <li>Access to Resources: Books, training, internet, and tools</li>
          </ul>

          <p className="mb-6">
            I also believe that true learning begins at the roots. Whenever I study something new, I ask:
          </p>
          <ul className="list-disc list-inside mb-6 ml-4">
            <li><strong>Why?</strong> – Understand the reason it exists</li>
            <li><strong>For what?</strong> – Know the purpose or problem it solves</li>
            <li><strong>How?</strong> – Learn the mechanism or process behind it</li>
          </ul>
          <p className="mb-6">
            This kind of root thinking builds not just knowledge, but confidence to take the next step.
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">My Skills</h3>
          <ul className="list-disc list-inside mb-6 ml-4">
            <li>Basic computer hardware & software, IoT</li>
            <li>Tamil Nadu government procedures (Panchayat, Revenue, Metro Corporation, Labour Welfare, Aadhar, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2  text-primary">My Dream for the Future</h3>
          <p className='indent-8'>
            My dream is to build a Hardware and Software Research and Development Institute — not
only for personal income, but to empower the next generation. I want to create a space where
young minds can explore, innovate, and learn with the right guidance and resources. A place where
they can shape a better future for all of us.
          </p>
        </div>
      </div>
    </section>
  );
}
