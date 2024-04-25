import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import haachtImg from '../public/assets/projects/haacht.jpeg';
import lizyImg from '../public/assets/projects/lizy.jpeg';
import gafasImg from '../public/assets/projects/gafas.jpeg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import finvictum from '../public/assets/projects/app-finvictum.jpeg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-sky-700'>
          Projects
        </p>
        <h2 className='py-4'>Spotlight</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Brewery'
            backgroundImg={haachtImg}
            projectUrl='/brewery'
            tech='Gatsby JS / React JS'
          />
          <ProjectItem
            title='Car dealer'
            backgroundImg={lizyImg}
            projectUrl='/cardealer'
            tech='Next JS / React JS'

          />
          <ProjectItem
            title='Agency'
            backgroundImg={gafasImg}
            projectUrl='/agency'
            tech='Wordpress'

          />
          <ProjectItem
            title='Finvictum start-up'
            backgroundImg={finvictum}
            projectUrl='/finvictum'
            tech='React Native / React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
