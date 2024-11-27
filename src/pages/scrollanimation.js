//https://github.com/codeit-bootcamp-frontend/FE-ADV-Practice/blob/8ac047b9020f83b82e3b5ddd8d5923e610484530/pages/scroll-linked.tsx


import { motion, useScroll, useTransform, circOut } from "framer-motion";
import { useRef } from "react";

function Scrollanimation() {
  const ref = useRef(null);

  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll();

  const clipPath = useTransform(scrollYProgress, [0, 1], ['circle(0%)', 'circle(30%)']);
  const y = useTransform(scrollYProgress, [0.7, 0.8], ['100%', '0%'], { bounce: 0 });

  return (
    <div className="h-[200vh] overflow-hidden" ref={ref}>
      {/* 배경을 덮는 원 */}
      <motion.div
        className="fixed top-1/2 left-1/2 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw]"
        style={{
          clipPath: clipPath,
        }}
      />


      {/* 'hi' 텍스트 */}
      <div>
        <div className="fixed top-5 left-0 m-11 overflow-hidden text-3xl font-bold">
          <motion.div
            className="text-blue-600"
            style={{ y }}
          >
            You found me!

          </motion.div>
        </div>
        <div className="fixed top-5 left-0 m-11 mt-2 overflow-hidden text-3xl font-bold">
          <motion.div
            className="text-blue-600"
            style={{ y }}
          >
            Aha!
          </motion.div>
        </div>
      </div>



    </div >
  );
}

export default Scrollanimation;
