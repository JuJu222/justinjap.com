import React from 'react';
import FadeIn from '@/components/animations/fade-in';

function Awards() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-20' enableInView>
      <h2 className='text-4xl font-bold text-primary-gradient'>Awards</h2>
      <p className='text-gray-500 text-base'>Awards and recognitions I have received.</p>
      <ul className='list-disc list-inside mt-4 space-y-2'>
        <li className='text-gray-500'>Best Developer Award - Tech Conference 2022</li>
        <li className='text-gray-500'>Innovative Project Award - Startup Expo 2021</li>
        <li className='text-gray-500'>Excellence in Coding - CodeFest 2020</li>
      </ul>
    </FadeIn>
  );
}

export default Awards;
