
import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/button";
import Section from "./Section"
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className='w-screen min-h-screen bg-white'>
      {/* <div className='h-screen w-full relative'>
        <Spline scene="/homepage.spline" className='w-screen h-screen'/>
        <div className='absolute top-0 w-full h-full flex items-center z-40'>
          <div className=' lg:p-20 p-3'>
            <h1 className={`font-bold text-7xl pl-5 lg:text-9xl mf3`}>TTREX</h1>
            <h2 className='mf1 text-xl pl-6'>
              Invest in Iconic Real Estate – Fraction by Fraction
            </h2>
            <h3 className='w-2/3 mf2 pl-6 text-md pt-3'>
              Our platform lets you own a fract ion of world-famous landmarks via NFTs. Trade, govern, and earn from real estate like never before.
            </h3>
            <div className='py-6 px-3 gap-2 flex pl-6'>
                  <Button onClick={() => navigate('/page1')} variant="default">
                    Start Investing Now
                  </Button>
                  <Button onClick={() => navigate('/page2')} variant="outline" className='border-0' >
                    Explore Properties
                  </Button>
            </div>
          </div>
        </div>
      </div>
      <Section/> */}
      <Button></Button>
    </div>
  );
}
