// react-spring을 스크롤 linked
import { useScroll, animated } from '@react-spring/web';
import React, { useRef, useEffect } from 'react';

function Scrolllinked() {

  // useScroll 훅을 사용하여 스크롤에 따른 진행 상태를 추적
  // scrollYProgress : 스크롤 진행 상태를 나타내는 값으로, 0에서 1까지의 값을 가집니다.
  const { scrollYProgress } = useScroll({ config: { duration: 20, easing: num => num } });


  return (
    <div>
      {/* 스크롤에 따른 진행 바 */}
      <animated.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='p-10'>
        <div className='text-3xl'>스크롤 linked</div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.
        </div>
      </div>
    </div>
  );
}

export default Scrolllinked;