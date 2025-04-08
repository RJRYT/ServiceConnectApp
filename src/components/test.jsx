import React from 'react';
import Mainheader from './mainheader';

function Test() {
  return (
    <div className='relative'>
      <Mainheader title="Test Page" />
      <div className='p-5 bg-amber-500 w-full h-screen'>content here</div>
    </div>
  );
}

export default Test;
