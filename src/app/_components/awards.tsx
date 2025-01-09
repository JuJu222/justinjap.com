import React from 'react';
import FadeIn from '@/components/animations/fade-in';

function Awards() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-12 md:mt-20' enableInView>
      <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>Awards</h2>
      <p className='text-gray-500 text-sm md:text-base mt-2'>Achievements and recognitions I have received.</p>
      <ul className='list-disc list-inside mt-4 space-y-2 md:space-y-3'>
        <li className='text-gray-500 text-sm md:text-base'>
          <span className='font-bold text-primary-gradient'>Best Academic Performance (Highest GPA in the Batch)</span>{' '}
          - Ciputra University, 2024
        </li>{' '}
        <li className='text-gray-500 text-sm md:text-base'>
          <span className='font-bold text-primary-gradient'>Most Active Leader in Student Organization</span> - Ciputra
          University, 2024
        </li>
        <li className='text-gray-500 text-sm md:text-base'>
          <span className='font-bold text-primary-gradient'>Swift Student Challenge Winner</span> - Apple WWDC, 2023
        </li>
        <li className='text-gray-500 text-sm md:text-base'>
          <span className='font-bold text-primary-gradient'>1st Place in Mobile App Competition</span> - LO Kreatif,
          2023
        </li>
      </ul>
    </FadeIn>
  );
}

export default Awards;
