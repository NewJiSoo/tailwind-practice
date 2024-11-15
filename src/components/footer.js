import { Button, Tab, TabGroup, TabList, Description, Field, Input, Label } from '@headlessui/react'

const categories = [
  {
    name: 'Feature',
  },
  {
    name: 'Reviews',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'FAQs',
  },
]
function Footer() {
  return (
    <div className='max-w-[80rem] m-auto border-t'>
      <div className='flex flex-col justify-start lg:flex-row lg:justify-between lg:items-center py-4 border-b'>
        <div className='flex flex-col gap-5 my-16'>
          <div className='flex gap-5'>
            <span>
              <svg viewBox="0 0 40 40" aria-hidden="true" class="h-10 w-10 flex-none fill-cyan-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path></svg>
            </span>
            <div>
              <div className='font-semibold'>Pocket</div>
              <div>Invest at the perfect time.</div>
            </div>
          </div>

          <TabGroup>
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-lg py-1 px-3 text-sm/6 text-gray-600  data-[hover]:bg-gray-100"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>

        <div className='flex gap-7 p-5 rounded-lg hover:bg-gray-200 cursor-pointer'>
          <div className=''>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
                <path d="M3.2 0H0v3.2h3.2V0ZM3.2 3.2H0v3.2h3.2V3.2ZM3.2 6.4H0v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M3.2 9.6H0v3.2h3.2V9.6ZM3.2 12.8H0V16h3.2v-3.2ZM3.2 16H0v3.2h3.2V16ZM3.2 19.2H0v3.2h3.2v-3.2ZM3.2 25.6H0v3.2h3.2v-3.2ZM3.2 35.2H0v3.2h3.2v-3.2ZM3.2 57.6H0v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M3.2 60.8H0V64h3.2v-3.2ZM3.2 64H0v3.2h3.2V64ZM3.2 67.2H0v3.2h3.2v-3.2ZM3.2 70.4H0v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M3.2 73.6H0v3.2h3.2v-3.2ZM3.2 76.8H0V80h3.2v-3.2ZM6.4 0H3.2v3.2h3.2V0ZM6.4 19.2H3.2v3.2h3.2v-3.2ZM6.4 25.6H3.2v3.2h3.2v-3.2ZM6.4 28.8H3.2V32h3.2v-3.2ZM6.4 32H3.2v3.2h3.2V32ZM6.4 35.2H3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M6.4 38.4H3.2v3.2h3.2v-3.2ZM6.4 48H3.2v3.2h3.2V48ZM6.4 51.2H3.2v3.2h3.2v-3.2ZM6.4 57.6H3.2v3.2h3.2v-3.2ZM6.4 76.8H3.2V80h3.2v-3.2ZM9.6 0H6.4v3.2h3.2V0ZM9.6 6.4H6.4v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M9.6 9.6H6.4v3.2h3.2V9.6ZM9.6 12.8H6.4V16h3.2v-3.2ZM9.6 19.2H6.4v3.2h3.2v-3.2ZM9.6 28.8H6.4V32h3.2v-3.2ZM9.6 32H6.4v3.2h3.2V32ZM9.6 41.6H6.4v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M9.6 44.8H6.4V48h3.2v-3.2ZM9.6 57.6H6.4v3.2h3.2v-3.2ZM9.6 64H6.4v3.2h3.2V64ZM9.6 67.2H6.4v3.2h3.2v-3.2ZM9.6 70.4H6.4v3.2h3.2v-3.2ZM9.6 76.8H6.4V80h3.2v-3.2ZM12.8 0H9.6v3.2h3.2V0ZM12.8 6.4H9.6v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M12.8 9.6H9.6v3.2h3.2V9.6ZM12.8 12.8H9.6V16h3.2v-3.2ZM12.8 19.2H9.6v3.2h3.2v-3.2ZM12.8 25.6H9.6v3.2h3.2v-3.2ZM12.8 38.4H9.6v3.2h3.2v-3.2ZM12.8 48H9.6v3.2h3.2V48ZM12.8 51.2H9.6v3.2h3.2v-3.2ZM12.8 57.6H9.6v3.2h3.2v-3.2ZM12.8 64H9.6v3.2h3.2V64ZM12.8 67.2H9.6v3.2h3.2v-3.2ZM12.8 70.4H9.6v3.2h3.2v-3.2ZM12.8 76.8H9.6V80h3.2v-3.2ZM16 0h-3.2v3.2H16V0ZM16 6.4h-3.2v3.2H16V6.4Z" fill="#171717" />
                <path d="M16 9.6h-3.2v3.2H16V9.6ZM16 12.8h-3.2V16H16v-3.2ZM16 19.2h-3.2v3.2H16v-3.2ZM16 25.6h-3.2v3.2H16v-3.2ZM16 41.6h-3.2v3.2H16v-3.2Z" fill="#171717" />
                <path d="M16 44.8h-3.2V48H16v-3.2ZM16 57.6h-3.2v3.2H16v-3.2ZM16 64h-3.2v3.2H16V64ZM16 67.2h-3.2v3.2H16v-3.2ZM16 70.4h-3.2v3.2H16v-3.2ZM16 76.8h-3.2V80H16v-3.2ZM19.2 0H16v3.2h3.2V0ZM19.2 19.2H16v3.2h3.2v-3.2ZM19.2 28.8H16V32h3.2v-3.2ZM19.2 44.8H16V48h3.2v-3.2ZM19.2 57.6H16v3.2h3.2v-3.2ZM19.2 76.8H16V80h3.2v-3.2ZM22.4 0h-3.2v3.2h3.2V0ZM22.4 3.2h-3.2v3.2h3.2V3.2ZM22.4 6.4h-3.2v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M22.4 9.6h-3.2v3.2h3.2V9.6ZM22.4 12.8h-3.2V16h3.2v-3.2ZM22.4 16h-3.2v3.2h3.2V16ZM22.4 19.2h-3.2v3.2h3.2v-3.2ZM22.4 25.6h-3.2v3.2h3.2v-3.2ZM22.4 32h-3.2v3.2h3.2V32ZM22.4 38.4h-3.2v3.2h3.2v-3.2ZM22.4 44.8h-3.2V48h3.2v-3.2ZM22.4 51.2h-3.2v3.2h3.2v-3.2ZM22.4 57.6h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M22.4 60.8h-3.2V64h3.2v-3.2ZM22.4 64h-3.2v3.2h3.2V64ZM22.4 67.2h-3.2v3.2h3.2v-3.2ZM22.4 70.4h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M22.4 73.6h-3.2v3.2h3.2v-3.2ZM22.4 76.8h-3.2V80h3.2v-3.2ZM25.6 28.8h-3.2V32h3.2v-3.2ZM25.6 32h-3.2v3.2h3.2V32ZM25.6 35.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M25.6 38.4h-3.2v3.2h3.2v-3.2ZM25.6 44.8h-3.2V48h3.2v-3.2ZM25.6 48h-3.2v3.2h3.2V48ZM25.6 51.2h-3.2v3.2h3.2v-3.2ZM28.8 0h-3.2v3.2h3.2V0ZM28.8 19.2h-3.2v3.2h3.2v-3.2ZM28.8 22.4h-3.2v3.2h3.2v-3.2ZM28.8 28.8h-3.2V32h3.2v-3.2ZM28.8 32h-3.2v3.2h3.2V32ZM28.8 35.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M28.8 38.4h-3.2v3.2h3.2v-3.2ZM28.8 44.8h-3.2V48h3.2v-3.2ZM28.8 51.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M28.8 54.4h-3.2v3.2h3.2v-3.2ZM28.8 64h-3.2v3.2h3.2V64ZM28.8 67.2h-3.2v3.2h3.2v-3.2ZM28.8 73.6h-3.2v3.2h3.2v-3.2ZM28.8 76.8h-3.2V80h3.2v-3.2ZM32 0h-3.2v3.2H32V0ZM32 6.4h-3.2v3.2H32V6.4ZM32 16h-3.2v3.2H32V16ZM32 22.4h-3.2v3.2H32v-3.2ZM32 25.6h-3.2v3.2H32v-3.2ZM32 32h-3.2v3.2H32V32ZM32 38.4h-3.2v3.2H32v-3.2ZM32 54.4h-3.2v3.2H32v-3.2ZM32 57.6h-3.2v3.2H32v-3.2Z" fill="#171717" />
                <path d="M32 60.8h-3.2V64H32v-3.2ZM32 76.8h-3.2V80H32v-3.2ZM35.2 0H32v3.2h3.2V0ZM35.2 9.6H32v3.2h3.2V9.6ZM35.2 12.8H32V16h3.2v-3.2ZM35.2 19.2H32v3.2h3.2v-3.2ZM35.2 28.8H32V32h3.2v-3.2ZM35.2 38.4H32v3.2h3.2v-3.2ZM35.2 41.6H32v3.2h3.2v-3.2ZM35.2 48H32v3.2h3.2V48ZM35.2 57.6H32v3.2h3.2v-3.2ZM35.2 64H32v3.2h3.2V64ZM35.2 76.8H32V80h3.2v-3.2Z" fill="#171717" />
                <path d="M38.4 0h-3.2v3.2h3.2V0ZM38.4 3.2h-3.2v3.2h3.2V3.2ZM38.4 6.4h-3.2v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M38.4 9.6h-3.2v3.2h3.2V9.6ZM38.4 12.8h-3.2V16h3.2v-3.2ZM38.4 16h-3.2v3.2h3.2V16ZM38.4 51.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M38.4 54.4h-3.2v3.2h3.2v-3.2ZM38.4 60.8h-3.2V64h3.2v-3.2ZM38.4 64h-3.2v3.2h3.2V64ZM38.4 70.4h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M38.4 73.6h-3.2v3.2h3.2v-3.2ZM38.4 76.8h-3.2V80h3.2v-3.2ZM41.6 3.2h-3.2v3.2h3.2V3.2ZM41.6 12.8h-3.2V16h3.2v-3.2ZM41.6 19.2h-3.2v3.2h3.2v-3.2ZM41.6 22.4h-3.2v3.2h3.2v-3.2ZM41.6 25.6h-3.2v3.2h3.2v-3.2ZM41.6 32h-3.2v3.2h3.2V32ZM41.6 41.6h-3.2v3.2h3.2v-3.2ZM41.6 48h-3.2v3.2h3.2V48ZM41.6 51.2h-3.2v3.2h3.2v-3.2ZM41.6 57.6h-3.2v3.2h3.2v-3.2ZM41.6 67.2h-3.2v3.2h3.2v-3.2ZM41.6 73.6h-3.2v3.2h3.2v-3.2ZM41.6 76.8h-3.2V80h3.2v-3.2ZM44.8 0h-3.2v3.2h3.2V0ZM44.8 6.4h-3.2v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M44.8 22.4h-3.2v3.2h3.2v-3.2ZM44.8 32h-3.2v3.2h3.2V32ZM44.8 41.6h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M44.8 44.8h-3.2V48h3.2v-3.2ZM44.8 51.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M44.8 54.4h-3.2v3.2h3.2v-3.2ZM44.8 57.6h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M44.8 60.8h-3.2V64h3.2v-3.2ZM44.8 64h-3.2v3.2h3.2V64ZM44.8 67.2h-3.2v3.2h3.2v-3.2ZM44.8 70.4h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M44.8 73.6h-3.2v3.2h3.2v-3.2ZM44.8 76.8h-3.2V80h3.2v-3.2ZM48 0h-3.2v3.2H48V0ZM48 16h-3.2v3.2H48V16ZM48 19.2h-3.2v3.2H48v-3.2ZM48 25.6h-3.2v3.2H48v-3.2ZM48 44.8h-3.2V48H48v-3.2ZM48 54.4h-3.2v3.2H48v-3.2ZM48 57.6h-3.2v3.2H48v-3.2Z" fill="#171717" />
                <path d="M48 60.8h-3.2V64H48v-3.2ZM48 67.2h-3.2v3.2H48v-3.2ZM51.2 6.4H48v3.2h3.2V6.4ZM51.2 12.8H48V16h3.2v-3.2ZM51.2 22.4H48v3.2h3.2v-3.2ZM51.2 25.6H48v3.2h3.2v-3.2ZM51.2 28.8H48V32h3.2v-3.2ZM51.2 32H48v3.2h3.2V32ZM51.2 35.2H48v3.2h3.2v-3.2ZM51.2 41.6H48v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M51.2 44.8H48V48h3.2v-3.2ZM51.2 54.4H48v3.2h3.2v-3.2ZM51.2 60.8H48V64h3.2v-3.2ZM51.2 64H48v3.2h3.2V64ZM54.4 6.4h-3.2v3.2h3.2V6.4ZM54.4 12.8h-3.2V16h3.2v-3.2ZM54.4 19.2h-3.2v3.2h3.2v-3.2ZM54.4 28.8h-3.2V32h3.2v-3.2ZM54.4 32h-3.2v3.2h3.2V32ZM54.4 38.4h-3.2v3.2h3.2v-3.2ZM54.4 48h-3.2v3.2h3.2V48Z" fill="#171717" />
                <path d="M54.4 51.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M54.4 54.4h-3.2v3.2h3.2v-3.2ZM54.4 57.6h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M54.4 60.8h-3.2V64h3.2v-3.2ZM54.4 64h-3.2v3.2h3.2V64ZM54.4 67.2h-3.2v3.2h3.2v-3.2ZM54.4 70.4h-3.2v3.2h3.2v-3.2ZM54.4 76.8h-3.2V80h3.2v-3.2ZM57.6 32h-3.2v3.2h3.2V32ZM57.6 41.6h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M57.6 44.8h-3.2V48h3.2v-3.2ZM57.6 51.2h-3.2v3.2h3.2v-3.2ZM57.6 64h-3.2v3.2h3.2V64ZM57.6 70.4h-3.2v3.2h3.2v-3.2ZM57.6 76.8h-3.2V80h3.2v-3.2ZM60.8 0h-3.2v3.2h3.2V0ZM60.8 3.2h-3.2v3.2h3.2V3.2ZM60.8 6.4h-3.2v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M60.8 9.6h-3.2v3.2h3.2V9.6ZM60.8 12.8h-3.2V16h3.2v-3.2ZM60.8 16h-3.2v3.2h3.2V16ZM60.8 19.2h-3.2v3.2h3.2v-3.2ZM60.8 25.6h-3.2v3.2h3.2v-3.2ZM60.8 35.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M60.8 38.4h-3.2v3.2h3.2v-3.2ZM60.8 44.8h-3.2V48h3.2v-3.2ZM60.8 48h-3.2v3.2h3.2V48ZM60.8 51.2h-3.2v3.2h3.2v-3.2ZM60.8 57.6h-3.2v3.2h3.2v-3.2ZM60.8 64h-3.2v3.2h3.2V64ZM60.8 67.2h-3.2v3.2h3.2v-3.2ZM64 0h-3.2v3.2H64V0ZM64 19.2h-3.2v3.2H64v-3.2ZM64 28.8h-3.2V32H64v-3.2ZM64 38.4h-3.2v3.2H64v-3.2ZM64 48h-3.2v3.2H64V48ZM64 51.2h-3.2v3.2H64v-3.2ZM64 64h-3.2v3.2H64V64ZM64 73.6h-3.2v3.2H64v-3.2ZM67.2 0H64v3.2h3.2V0ZM67.2 6.4H64v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M67.2 9.6H64v3.2h3.2V9.6ZM67.2 12.8H64V16h3.2v-3.2ZM67.2 19.2H64v3.2h3.2v-3.2ZM67.2 28.8H64V32h3.2v-3.2ZM67.2 41.6H64v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M67.2 44.8H64V48h3.2v-3.2ZM67.2 51.2H64v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M67.2 54.4H64v3.2h3.2v-3.2ZM67.2 57.6H64v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M67.2 60.8H64V64h3.2v-3.2ZM67.2 64H64v3.2h3.2V64ZM67.2 70.4H64v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M67.2 73.6H64v3.2h3.2v-3.2ZM70.4 0h-3.2v3.2h3.2V0ZM70.4 6.4h-3.2v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M70.4 9.6h-3.2v3.2h3.2V9.6ZM70.4 12.8h-3.2V16h3.2v-3.2ZM70.4 19.2h-3.2v3.2h3.2v-3.2ZM70.4 28.8h-3.2V32h3.2v-3.2ZM70.4 32h-3.2v3.2h3.2V32ZM70.4 35.2h-3.2v3.2h3.2v-3.2ZM70.4 44.8h-3.2V48h3.2v-3.2ZM70.4 48h-3.2v3.2h3.2V48ZM70.4 70.4h-3.2v3.2h3.2v-3.2ZM70.4 76.8h-3.2V80h3.2v-3.2ZM73.6 0h-3.2v3.2h3.2V0Z" fill="#171717" />
                <path d="M73.6 6.4h-3.2v3.2h3.2V6.4Z" fill="#171717" />
                <path d="M73.6 9.6h-3.2v3.2h3.2V9.6ZM73.6 12.8h-3.2V16h3.2v-3.2ZM73.6 19.2h-3.2v3.2h3.2v-3.2ZM73.6 28.8h-3.2V32h3.2v-3.2ZM73.6 35.2h-3.2v3.2h3.2v-3.2ZM73.6 44.8h-3.2V48h3.2v-3.2ZM73.6 48h-3.2v3.2h3.2V48ZM73.6 51.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M73.6 54.4h-3.2v3.2h3.2v-3.2ZM73.6 70.4h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M73.6 73.6h-3.2v3.2h3.2v-3.2ZM76.8 0h-3.2v3.2h3.2V0ZM76.8 19.2h-3.2v3.2h3.2v-3.2ZM76.8 28.8h-3.2V32h3.2v-3.2ZM76.8 35.2h-3.2v3.2h3.2v-3.2ZM76.8 41.6h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M76.8 44.8h-3.2V48h3.2v-3.2ZM76.8 51.2h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M76.8 54.4h-3.2v3.2h3.2v-3.2ZM76.8 64h-3.2v3.2h3.2V64ZM76.8 67.2h-3.2v3.2h3.2v-3.2ZM76.8 70.4h-3.2v3.2h3.2v-3.2Z" fill="#171717" />
                <path d="M76.8 73.6h-3.2v3.2h3.2v-3.2ZM80 0h-3.2v3.2H80V0ZM80 3.2h-3.2v3.2H80V3.2ZM80 6.4h-3.2v3.2H80V6.4Z" fill="#171717" />
                <path d="M80 9.6h-3.2v3.2H80V9.6ZM80 12.8h-3.2V16H80v-3.2ZM80 16h-3.2v3.2H80V16ZM80 19.2h-3.2v3.2H80v-3.2ZM80 25.6h-3.2v3.2H80v-3.2ZM80 32h-3.2v3.2H80V32ZM80 35.2h-3.2v3.2H80v-3.2Z" fill="#171717" />
                <path d="M80 38.4h-3.2v3.2H80v-3.2ZM80 44.8h-3.2V48H80v-3.2ZM80 48h-3.2v3.2H80V48ZM80 57.6h-3.2v3.2H80v-3.2ZM80 64h-3.2v3.2H80V64ZM80 67.2h-3.2v3.2H80v-3.2ZM80 70.4h-3.2v3.2H80v-3.2Z" fill="#171717" />
                <path d="M80 73.6h-3.2v3.2H80v-3.2ZM80 76.8h-3.2V80H80v-3.2Z" fill="#171717" />
              </svg>
            </div>
          </div>

          <div className='flex-wrap'>
            <div className='font-semibold'>
              Download the app
            </div>
            <div>
              Scan the QR code to download the app from the App Store.
            </div>
          </div>
        </div>

      </div>

      <div className='flex justify-between items-center pt-8 pb-11'>
        <div>&copy; Copyright 2024. All rights reserved.</div>
        <div className='flex gap-4'>
          <div>
            <input placeholder='Email address' autoComplete='email' className='border p-2' />
          </div>
          <Button className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 border border-blue-[#06B6D4] bg-[#06B6D4] text-white data-[hover]:border-[#06B6D4]">
            Join our newsletter
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Footer