import { FaTwitter } from 'react-icons/fa';

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">Welcome to MsMurph<span className="blinking">_</span></h1>
        <p className="text-xl py-3">There is nothing here ... yet ... 😈 </p>
        <a href="https://www.twitter.com/msmurph_" className="text-xl"><FaTwitter /></a>
      </div>
    </main>
  );
} 
