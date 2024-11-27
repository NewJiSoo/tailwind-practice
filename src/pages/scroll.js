// IntersectionObserver에 관한 블로그
// https://www.heropy.dev/p/ydKoQO

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const PAGE_TITLES = ["Don't", 'you', 'just', 'hate', 'popups?']
// 1. IntersectionObserver을 이용한 방법
// function Scroll() {

//   // 현재 보이는 페이지 인덱스 상태
//   const [currentPage, setCurrentPage] = useState(0);
//   // 각 페이지 참조
//   const pageRefs = useRef([]);

//   useEffect(() => {
//     // const io = new IntersectionObserver((entries, observer) => {}, options)
//     // 관찰 대상이 등록되거나 가시성 변화가 생기면 콜백을 실행
//     const observer = new IntersectionObserver(
//       // entries는 IntersectionObserverEntry 인스턴스 배열로 observe()로 관찰하는 대상들을 의미한다.
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           // inIntersecting은 관찰 대상의 교차 상태를 의미한다(true, false)
//           if (entry.isIntersecting) {
//             console.log(pageRefs.current)
//             console.log(entry.target)
//             const index = pageRefs.current.indexOf(entry.target);
//             if (index !== -1) {
//               setCurrentPage(index);
//               // scrollIntoView()
//               // 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤한다.
//               pageRefs.current[index].scrollIntoView({
//                 // 스크롤을 즉시 적용할지 아니면 부드러운 애니메이션을 적용할지 결정
//                 // smooth, instant, auto
//                 behavior: 'smooth', // 스무스한 스크롤 이동

//                 // 수직 정렬을 의미
//                 // start, center, end, nearest(기본값:start)
//                 block: 'center',    // 중앙에 배치

//                 //수평 정렬을 의미
//                 // start, center, end, nearest(기본값:nearest)
//                 //inline: 'start'
//               });
//             }
//           }
//         });
//       },
//       //option
//       // 관찰 범위를 설정하기 위한 옵션
//       // root : 관찰 대상 가시성 검사를 위해 뷰포트 대신 사용할 요소 지정
//       // rootMargin : 바깥 여백을 이용해 root 범위 확장, 축소
//       { threshold: 0.5 } // 50%가 화면에 보이면 트리거
//     );

//     // 대상 요소의 관찰 시작
//     pageRefs.current.forEach((page) => {
//       observer.observe(page);
//     });

//     return () => {
//       // IntersectionObserver 인스턴스가 관찰하는 모든 요소의 관찰을 중지
//       observer.disconnect();
//     };
//   }, []);


//   return (
//     <div>
//       {PAGE_TITLES.map((title, index) => (
//         <div
//           key={title}
//           ref={(el) => (pageRefs.current[index] = el)}
//           className={`h-[80vh] flex justify-center items-center text-2xl transition-all duration-500 ${currentPage === index ? 'transform scale-110 text-blue-500' : ''
//             }`}
//         >
//           <div>{title}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

function PageTitle({ title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const styleClass = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-20";

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-in-out ${styleClass} h-[100vh] flex justify-center items-center`}
    >
      <h2 className="text-6xl">{title}</h2>
    </div>
  );
}

function Scroll() {
  return (
    <div>
      {PAGE_TITLES.map((title, index) => (
        <PageTitle key={index} title={title} />
      ))}
    </div>
  );
}

export default Scroll;