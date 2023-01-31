import { Link } from "@remix-run/react";
import { FaTwitter } from 'react-icons/fa';
import oliveOyl from '../styles/oliveoyl.png';

export default function Index() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-8 py-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="lg:text-9xl font-extrabold">Welcome to MsMurph<span className="blinking">_</span></h1>
        <p className="text-xl py-3 flex items-center">We are just getting started ... 
        <a href="https://www.twitter.com/msmurph_" className="text-xl ml-2"><FaTwitter /></a>
        </p>
        <Link
            to="/school"
            className="text-xl mt-05"
          >
        <button className="p-4 bg-black rounded-md text-white">School v0.1.0</button>
          </Link>
      </div>
      <img src={oliveOyl} className="olive-oyl"></img>
    </main>
  );
} 
