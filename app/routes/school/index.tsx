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
      <div className="flex flex-col items-center max-w-16">
      <div className="mt-6">
          <div className="card-white rounded-lg my-4 p-10">
          <h3 className="text-8xl md:text-8xl font-extrabold">Mission </h3>
          <h3 className="text-xl font-extrabold mt-05">To increase the probability that curious, driven students thrive and innovate in a world of exponentiating technology.</h3>
        </div>
        <div className="mt-6  ">
          <div className="card-white rounded-lg my-4 p-10">
            <h3 className="text-8xl md:text-8xl font-extrabold">Problem </h3>
            <p className="text-xl mt-05">Traditional schools lack efficiency and effectiveness. They are not able to rapidly iterate due to scale and administration restraints. The curve of technological advancements is exponentially departing the pace of what a traditional school can persist. The combination of an overburdened administration and lack of resources for quality teachers creates an environment that is not conducive to success for anyone. Communities continue to fragment in an increasingly independent world.  <br></br><br></br>
          There are nearly 50 million students going through the public school system who are subject to a consistent bureaucratic whiplash of control, poor communication, waste, and administration fads. Many private school students go through this too. Teachers, who are a school's very best asset, have diminishing incentives to continue their profession each day. Preparing for an increasingly unknown future is difficult, but we know that creating students who are not adaptive, resilient, confident, learned, or interested is a failure for our future civilization.</p>
        </div>
        <div className="card-white rounded-lg my-4 p-10">
          <h3 className="text-8xl md:text-8xl font-extrabold">Solution</h3>
          <p className="text-xl mt-05">We are going to create an expansive network of small, private schools that prioritize grit, curiosity, and adaptability. We firmly believe that having and retaining the best teachers is the best way to have the best school and our business model centers around retaining the best. By operating in the private sector, automating administration, and streamlining processes, we will free up resources to attract, keep, and promote the best teachers. 
          <br></br><br></br>
          Our baseline is fundamental mastery across the essential foundations of reading, writing, mathematics, physics, and history. We will utilize first-principles ideology. Then we will create specialized pathways for students to pursue what interests them. Students will consistently interact with content that is relevant and build essential skills to become functioning citizens. Students will graduate knowing how to learn.</p>
        </div>
        </div>
        </div>
        <a href="https://www.twitter.com/msmurph_" className="text-xl"><FaTwitter /></a>
      </div>
      <img src={oliveOyl} className="olive-oyl"></img>
    </main>
    );
  }