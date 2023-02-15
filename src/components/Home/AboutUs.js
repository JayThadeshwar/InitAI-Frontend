import React from "react";
import About from "../../assets/About.svg";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b font-['Montserrat'] from-[#edf5fe] to-[#cee3fc]">
      <div className="relative">
        <img className="w-screen h-full" src={About} alt="" />
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center pb-7">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-[#4051A3] ">
              <div className="flex flex-col justify-between p-4 leading-normal my-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Who we are?
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                InIT.AI is the AI club of the Information Technology Department at Dwarkakdas J Sanghvi College of Engineering. It was founded in 2017 with a mission to educate, inspire and help the students to explore the field of Artificial Intelligence. This club aims to educate group members about the terms and concepts related to various sub-fields of AI with the purpose of increasing awareness about past, current and potential future research directions.
                </p>
              </div>
            </div>

          <div className="">
            <div
              to="/"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-[#4051A3] my-4"
            ><div className="flex flex-col justify-between p-4 leading-normal my-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Why AI?
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  ‘Big Data is the new natural resource’ – IBM. ‘AI is the new
                  electricity’ - Andrew Ng, Chief Scientist of Baidu, Co-Founder
                  of Coursera, Professor at Stanford University. It’s pretty
                  evident from the two quotes that Data and AI are going to
                  shape the future of the world. We believe that with the
                  increasing advances in making machines smarter and amount of
                  data growing day by day, the AI era has begun and it is going
                  to revolutionize all spheres of life be it commuting to your
                  office in a driverless car or getting interviewed by a
                  chatbot. Sounds fun? This is exactly what attracted and pulled
                  us towards AI. No wonder the job profile “Data Scientist” has
                  been quoted as the sexiest job of 21st century. Because AI is
                  making heads turn; and it most certainly has our undivided
                  attention.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-[#4051A3]"
            ><div className="flex flex-col justify-between p-4 leading-normal my-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Team
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Essentially, we are just like you. We check all the boxes for
                  a typical CS engineer stereotype. Not happy with the
                  curriculum, check. Feel like our potential is being
                  squandered, check. But, there is a teensy bit more to us than
                  just the aforementioned stereotypes. Individually, all of us
                  have been through the exact same journey wherein we first
                  toyed with Web development, then we moved onto Android app-dev
                  because it was “the rage” and if you did not know app-dev then
                  you’d be considered a dummy. We couldn’t really find our
                  footing in these domains and they just did not have that
                  X-factor for us. But, we are a pack of inquisitive, intrusive,
                  impatient minds. Our stubbornness made us look further and
                  after flirting with a few other domains, we finally found our
                  sweet spot. Artificial Intelligence is where it’s at for us.
                  We were fascinated by the AI dream and that is what brought us
                  together as we attempt to transform it into a reality. Don’t
                  get me wrong, we ourselves are no Andrew Ng’s yet but having
                  said that, we are constantly striving to get there. This
                  initiative is to ensure that you guys do not have to struggle
                  or toil the way we have had to, to really grasp the
                  fundamentals of AI and its sub-domains. For us, heaven is that
                  point where we will have reached a peak understanding of AI
                  and for everyone out there who wishes to be a part of this
                  journey, our motive is to create a stairway to that heaven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
