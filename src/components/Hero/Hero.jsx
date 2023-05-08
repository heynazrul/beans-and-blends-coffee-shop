/* eslint-disable react/no-unescaped-entities */
import { Button } from '@material-tailwind/react';
const Hero = () => {
  return (
    <section>
      <div className="max-w-full gap-12 overflow-hidden bg-[url('/more/bg-hero.jpeg')] bg-cover bg-center bg-no-repeat px-4 py-32 text-white md:flex md:px-8 md:py-56">
        <div className="max-w-3xl space-y-5 xl:mx-56">
          <h1 className="font-title text-4xl md:text-6xl">Would you like a Cup of Delicious Coffee?</h1>
          <p className="font-body text-base">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every
            moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm ">
            <Button color="brown" className='!font-body hover:shadow-none hover:outline hover:outline-1 hover:bg-transparent rounded-none' >Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
