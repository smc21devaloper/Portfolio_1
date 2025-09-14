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
            I grew up in a small village and studied from 1st to 12th standard in a Government School, entirely in
Tamil medium. After completing school, I joined Vi Institute of Technology, an Anna University
affiliated engineering college located, just 7 km from my home.
<br />
It was 2019, engineering was losing popularity. Many people around me believed that “engineering
has no future” and “you won’t get a job.” Out of the entire 2019 batch in my school, I was the only
student who chose engineering. Even in my college, less than 30 students joined across all
departments, and I eventually became part of the last batch before the college closed down.

          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Learning Without a Classroom</h3>
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

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Giving Back to My Community</h3>
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

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">My Career at SignaTech</h3>
          <p className="indent-8 mb-6 text-1xl md:text-2xl">
            I started my career at <b>SignaTech</b> as a Trainee, where I was introduced to the fundamentals of IT
infrastructure and daily operations. After my trainee period, I moved into the role of <b>Associate
System Engineer</b>. Our team’s core responsibility has been to ensure smooth IT operations by
monitoring client servers, networks, and security, as well as supporting end users with their day-to-
day technical requirements.</p>

<p className="mb-6 text-1xl md:text-2xl">In the beginning, I worked mostly on infrastructure monitoring and patch management. Working in
enterprise infrastructure was a completely new experience for me. With my team lead’s guidance, I
began strengthening my technical foundation and gradually built expertise in managing and
supporting enterprise IT environments. Over time, I also gained exposure to addressing end-user
challenges and technical escalations, which enhanced both my problem-solving and troubleshooting
skills.</p>
  <p className="mb-6 text-1xl md:text-2xl">
    Along the way, I also handled internal user tickets and onboarding/offboarding processes. As part of
my <b>asset management</b> responsibilities, I made sure to maintain an up-to-date asset inventory. I
never closed my day without ensuring accuracy. These efforts were recognized when I was honored
with the <b>SPOT Recognition Award for February 2025</b>, which acknowledged my dedication and
contributions to the team. This recognition reinforced my belief in delivering consistent results and
continuously pushing myself to explore new areas, while always aiming to give my best in every task.
  </p>
  <p className="mb-6 text-1xl md:text-2xl">
    What I value most is the culture at SignaTech. Programs like the “Theme of the Month” helped me
overcome stage fear and improve my confidence, while the company’s encouragement constantly
motivated me to keep learning and innovating.
  </p>
  <p className="mb-6 text-1xl md:text-2xl">
    Another highlight of my journey has been that SignaTech recognizes individual talents. Since I have
an interest in coding, I was given opportunities to contribute beyond my core role, such as designing
a webpage for our site and even working on a project to consolidate all company products into a
single website for easier client access during reviews. Although the project is still in progress, I
continue to contribute to it whenever time permits, as I see it as a valuable initiative that adds real
impact. On the infrastructure side, I was introduced to automation practices and modern
infrastructure tools, which I am now learning to further enhance my skills.
  </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Lessons That Shaped Me</h3>
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


          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">A Philosophy That Guides Me</h3>
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
          <p className="mb-6 text-1xl md:text-2xl">
            This kind of root thinking builds not just knowledge, but confidence to take the next step.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">My Skills</h3>
          <ul className="list-disc list-inside mb-6 ml-4 text-1xl md:text-2xl">
            <li>Basic computer hardware & software, IoT</li>
            <li>Tamil Nadu government procedures (Panchayat, Revenue, Metro Corporation, Labour Welfare, Aadhar, etc.)</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Looking Ahead</h3>
          <p className='indent-8 text-1xl md:text-2xl'>
            Overall, I see myself as someone who is always ready to <b>explore new technologies and apply them in
practical scenarios</b>. Looking back, I feel truly grateful for the supportive colleagues, inspiring leaders,
and opportunities for growth that have shaped my journey from a trainee to an associate system
engineer. Moving forward, I aspire to deepen my expertise in cloud platforms, automation, and IT
service management, while continuing to contribute to the success of SignaTech.
          </p><br></br>
          <p className='text-1xl md:text-2xl'>
            My dream is to build a Hardware and Software Research and Development Institute — not only for
personal income, but to empower the next generation. I want to create a space where young minds
can explore, innovate, and learn with the right guidance and resources. A place where they can
shape a better future for all of us.
          </p>
        </div>
      </div>
    </section>
  );
}
