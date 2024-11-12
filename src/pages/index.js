export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div>
        <span className="flex ">
          <span className="rounded-full bg-gradient-to-tr from-[#096BDE] via-[#096BDE] via-30% to-[#DDF1FF] w-[24px] h-[24px] mx-1 shadow-custom-shadow"></span>
        </span>
      </div>

      <div className="bg-gray-100">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15c064] to-[#00d1ff] font-bold text-6xl">Shopify</span>
      </div>

      <div >
        <span className="bg-gradient-to-r from-[#e9f9f4] to-[#cfebfe] text-2xl font-bold">from hello world to IPO.</span>
      </div>

      <div>
        <a href="#" className="group underline flex items-center gap-3">
          <div className="font-bold">Theme Store</div>
          <svg
            className="w-4 h-4 transition-all duration-300 opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 "
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>

      <div>
        <div className="group flex justify-between w-[20%] border-b-2 border-black py-2 cursor-pointer ">
          <svg
            className="w-6 h-6 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="font-bold text-lg -translate-x-10 group-hover:-translate-x-1 transition-all duration-300">Seize every sale</div>
          <svg
            className="w-6 h-6 group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-300"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}
