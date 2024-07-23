import Image from 'next/image';
import React from 'react';
import gafasImg from '../../public/assets/projects/gafas.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gafasImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 z-10 p-2'>
          <h2 className='py-2'>Agency website - By Gafas</h2>
          <h3>Wordpress / php / css / JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           This website belongs to an agency i worked for. Website is build in Wordpress.
          </p>
          <a
            href='https://gafas.be'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-white'>Website</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-sm shadow-gray-500 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github Auth
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Auth
              </p>
            </div>
          </div>
        </div>
        <Link href='/nl/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
