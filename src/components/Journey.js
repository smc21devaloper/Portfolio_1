import JourneyImg from '../assets/journey.png';

export default function Journey() {
  return (
    <section className="relative w-full h-screen" id="journey">
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
          <p className="indent-8 mb-6 text-1xl md:text-2xl">
            I was born and raised in a simple background, studying from <b>1st to 12th standard in a
Government School, entirely in Tamil medium.</b> After completing school, I joined <b>Vi Institute of
Technology</b>, an Anna University affiliated engineering college located, just <b>7 km from my home.</b>
It was 2019, engineering was losing popularity. Many people around me believed that
“engineering has no future” and “you won’t get a job.” Out of the entire 2019 batch in my school, I
was the <b>only student who chose engineering.</b> Even in my college, less than 30 students joined
across all departments, and I eventually became part of the <b>last batch before the college closed down.</b>

          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">Learning Without a Classroom</h3>
          <p className="indent-8 mb-6 text-1xl md:text-2xl">
            The journey was far from easy. As the college faced challenges, lack of faculty, limited
resources, we were often left to study on our own. There were days without formal classes or
experienced lecturers. But I refused to give up.
          </p>
          <p className='mb-6 text-1xl md:text-2xl'>
            In <b>2020, during my second semester</b>, the <b>COVID-19 pandemic</b> hit. Colleges shut down, and
learning shifted online. During this time, I developed a passion for learning new things. My principal,
Dr. Radhakrishnan, recognized this and gave me an opportunity to work with <b>Vi Microsystems</b>, led by
our college chairman Dr. R. Vijayarajeshwaran.
          </p>
          <p className='mb-6 text-1xl md:text-2xl'>
            This was my entry into the world of <b>IoT</b>. I learned to build IoT projects and gained hands-on
experience in <b>embedded programming</b>. It was here that I saw how technology could solve real-world
problems.
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">Giving Back to My Community</h3>
          <p className="indent-8 mb-6 text-1xl md:text-2xl">
            With my father’s support, I started a small computer coaching centre in my village. I taught
students <b>basic computer skills, programming fundamentals, and Tamil &amp; English typewriting.</b> I also began helping people in surrounding villages, educating them about government schemes and
assisting them with applications.
          </p>
        <p className="mb-6 text-1xl md:text-2xl">
            This was a turning point in my life. Until then, I was a very introverted person. Teaching and
community service helped me grow socially and emotionally. I learned how to connect with people
and understand their needs.
          </p>
          <h3 className="text-xl font-semibold mb-2  text-primary">Lessons That Shaped Me</h3>
          <p className="mb-4 text-1xl md:text-2xl">Through this journey, I discovered three powerful truths:</p>
          <ul className="list-disc list-inside mb-6 ml-4 text-1xl md:text-2xl">
            <li><b>Opportunities may be few, but determination can multiply them.</b></li>
            <li><b>Language is not a barrier — mindset is.</b></li>
            <li><b>When you have no one to guide you, you can still guide yourself.</b></li>
          </ul>

          <p className="mb-6 text-1xl md:text-2xl">
            Eventually, my efforts paid off — I was placed at <b>Signatech Services Pvt. Ltd.</b> My journey from a
Tamil-medium government school to a corporate office is proof <b>that background doesn’t decide your
future, consistency and willpower do.</b>
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">A Philosophy That Guides Me</h3>
          <p className="mb-6 text-1xl md:text-2xl">
            My father once shared a lesson that shaped how I see life. To succeed in any skill, five elements play
            a major role:
          </p>
          <ul className="list-disc list-inside mb-6 ml-4 text-1xl md:text-2xl">
            <li><b>Parents (early environment): </b> Support, values, discipline, encouragement</li>
            <li><b>Society (friends, mentors, community): </b> Exposure, opportunities, motivation</li>
            <li><b>Time: </b> Consistent, effective investment in learning and practice</li>
            <li><b>Personal Drive: </b> Self-motivation and determination</li>
            <li><b>Access to Resources: </b> Books, training, internet, and tools</li>
          </ul>

          <p className="mb-6 text-1xl md:text-2xl">
            I also believe that true learning begins at the roots. Whenever I study something new, I ask:
          </p>
          <ul className="list-disc list-inside mb-6 ml-4 text-1xl md:text-2xl">
            <li><strong>Why?</strong> – Understand the reason it exists</li>
            <li><strong>For what?</strong> – Know the purpose or problem it solves</li>
            <li><strong>How?</strong> – Learn the mechanism or process behind it</li>
          </ul>
          <p className="mb-6">
            This kind of root thinking builds not just knowledge, but confidence to take the next step.
          </p>

          <h3 className="text-xl font-semibold mb-2  text-primary">My Skills</h3>
          <ul className="list-disc list-inside mb-6 ml-4 text-1xl md:text-2xl">
            <li>Basic computer hardware & software, IoT</li>
            <li>Tamil Nadu government procedures (Panchayat, Revenue, Metro Corporation, Labour Welfare, Aadhar, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2  text-primary">My Dream for the Future</h3>
          <p className='indent-8 text-1xl md:text-2xl'>
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
