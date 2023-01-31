import { Link } from "@remix-run/react";
import oliveOyl from '../../styles/oliveoyl.png';
import { FaTwitter } from 'react-icons/fa';

export default function School() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-8 py-6">
        <nav className="p-6 flex w-full">
        <Link
            to="/"
            className="text-xl font-extrabold"
          >
            <p>MsMurph<span className="blinking">_</span></p>
          </Link>
        </nav>
    <div className="flex flex-col items-center max-w-7xl">
    <div className="mt-6">
        <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Mission </h3>
        <h3 className="text-xl font-extrabold mt-05">To increase the probability that curious, driven students thrive and innovate in a world of exponentiating technology.</h3>
      </div>
      <div className="mt-6  ">
        <div className="card-white rounded-lg my-4 p-10">
          <h3 className="text-6xl font-extrabold">Problem </h3>
          <p className="text-xl mt-05">Traditional schools lack efficiency and effectiveness. They are not able to rapidly iterate due to scale and administration restraints. The curve of technological advancements is exponentially departing the pace of what a traditional school can persist. Schools are not only falling behind, they are getting lapped.  The combination of an overburdened administration and lack of resources for quality teachers creates an environment that is not conducive to student success. Communities continue to fragment in an increasingly independent world.  <br></br><br></br>
        There are nearly 50 million students going through the public school system who are subject to a consistent bureaucratic whiplash of control, poor communication, waste, and administration fads. Teachers, who are a school's very best asset, have diminishing incentives to continue their profession each day. Preparing for an increasingly unknown future is difficult, but we know that creating students who are not adaptive, resilient, confident, learned, or interested is a failure for our future civilization.</p>
      </div>
      <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Solution</h3>
        <p className="text-xl mt-05">We are going to create an expansive network of small, private schools that prioritize mastery-based education and a sense of community across the United States. We will start with K-5 but will expand to PreK-12. We firmly believe that having and retaining the best teachers is the best way to have the best school and our business model centers around retaining the best. By operating in the private sector, automating administration, and streamlining processes, we will free up resources to attract, keep, and promote the best teachers. We are proud Americans who simultaneously will avoid government bureaucracy in education so we can confidently iterate to create the best learning environment possible. Our baseline is a focus on fundamental mastery across the essential foundations of reading, writing, mathematics, physics, and history where we will utilize first-principles ideology. Then we will create specialized pathways for students to pursue what interests them. Along the way, students will participate in “life courses” that will teach them relevant, essential skills to be a functioning citizen.</p>
      </div>
      <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Target Market</h3>
        <p className="text-xl mt-05">Our market consists of motivated, curious, and interested students who are looking for a personalized, mastery-based learning experience. We prioritize students who have a passion for STEM subjects, but also offer a well-rounded curriculum to nurture diverse interests. Our ideal families value a growth mindset, resilience, pursuing individual passions, and have an entrepreneurial spirit regardless of their background. They are supportive of their children's education and are looking for a school that prioritizes student success over bureaucratic constraints. We aim to create a community of learners where students can thrive and reach their full potential.</p>
      </div>
      <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Business Model</h3>
        <p className="text-xl mt-05">Our business model is centered around a network of physical schools, where families pay tuition to become equity holders in the school. Tuition payments are used to fund a principal pool that generates dividends for families to direct dollars back into their pockets and simultaneously supports our commitment to paying teachers a competitive salary, as we believe they are the most valuable part of our team. We aim to position our schools as the best in the market and attract motivated students regardless of their financial situation. To launch, we will initially seek foundation donations to create the initial principal sum needed to generate enough interest to support our operations.  Once this initial principal is generated, our goal is financial self-sustainability through tuition, compounding interest investments, real estate valuation of the schools themselves, and providing additional community membership perks. Our focus is on creating a unique model for education that prioritizes student success through skin-in-the-game for everyone and prioritizing retaining the best teachers.</p>
        </div>
        <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Competitors</h3>
        <p className="text-xl mt-05">128,000 public schools that house ~50 million students. Please note, our focus is not to dismantle public education. We believe we can better educate the nation through our own methods that include high improvement iteration, small and nimble teams, and a constant focus on encouraging excited students rather than attempting to lobby a giant corporation in the limit to completely rebuild its educational system. We realize that more students enrolling in our schools means less will enroll in public schools which will in turn result in less funding for the public school system. In our minds, it is up to the government and those best suited to make a change in the government to reallocate funds efficiently instead of consistently seeking more money.</p>
        </div>
        <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Traction</h3>
        <p className="text-xl mt-05">While our project is just starting, we plan to leverage AI and software tools to increase our reach and promote our brand. We are confident in our ability to achieve traction and drive growth, given our focus on delivering exceptional education and our commitment to using technology to streamline operations and reach families. Our traction plan includes the following steps:</p>
        <ul className="text-xl">
            <li>Develop and launch a comprehensive marketing campaign to raise awareness of our brand and educate families about our unique approach to education.</li>
            <li>Leverage AI and software tools to streamline enrollment and administrative processes, making it easier for families to enroll and for us to manage operations.</li>
            <li>Establish partnerships with foundations and other organizations to provide funding and support for our schools.</li>
            <li>Launch early adopter and pilot programs to test our approach and gather feedback from families and students.
            </li>
            <li>Continuously refine and improve our offerings based on feedback and insights from our early adopters and pilot programs.
            </li>
        </ul>
        </div>
        <div className="card-white rounded-lg my-4 p-10">
        <h3 className="text-6xl font-extrabold">Team</h3>
        <p className="text-xl mt-05">Things are just getting started and at the moment, it's just the founder leading the charge. However, once this initial plan is enhanced, assembling the right team of excellent individuals will be the top priority. The founder brings a unique combination of technical and educational experience to the project, making her well-equipped to start this endeavor:</p>
        <ul className="text-xl">
            <li>With years of experience as a software developer, creating applications and integrations for school enrollment pipelines, the founder brings a strong technical background to the team.</li>
            <li>The founder also has startup experience in marketing, sales, and systems.</li>
            <li>From attending public K-8 in Wyoming with a class of less than 25, to attending a New England boarding school for 9-12, to graduating summa cum laude and in the top 10% of business school, the founder has a passion for education and a deep appreciation for the importance of providing students with a quality education.</li>
            <li>With a rational approach to financials, the founder will prioritize ensuring the business model of the school works and will strategically hire the best teachers to lead the educational side of the business.</li>
        </ul>
        </div>
      </div>
      </div>
      <a href="https://www.twitter.com/msmurph_" className="text-xl"><FaTwitter /></a>
    </div>
    <img src={oliveOyl} className="olive-oyl"></img>
  </main>
  );
}