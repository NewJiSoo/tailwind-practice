import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'



const categories = [
  {
    name: 'Invite friends for better returns',
    svg: <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8"><circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z" fill="#737373"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z" fill="#A3A3A3"></path></svg>,
    post: 'For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.',
  },
  {
    name: 'Notifications on stock dips',
    svg: <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8"><circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z" fill="#737373"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z" fill="#A3A3A3"></path></svg>,
    post: 'Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.',
  },
  {
    name: 'Invest what you want',
    svg: <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8"><circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z" fill="#737373"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z" fill="#A3A3A3"></path></svg>,
    post: 'We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.',
  },
]

function Feature() {
  return (
    <div className='bg-title_gray'>
      <div className='max-w-[80rem] m-auto py-[8rem]'>
        <div className='max-w-4xl'>
          <div className='font-bold text-3xl text-white'>Every feature you need to win. Try it for yourself.</div>
          <div className='mt-2 text-lg text-[#A3A3A3] '>Pocket was built for investors like you who play by their own rules and aren’t going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, Pocket has it.</div>
        </div>
        <div className='flex mt-[5rem] p-8 gap-8'>
          <div className='flex justify-center min-w-[50%] px-8 '>
            <Image src="/phone_black.PNG" width={366} height={730} alt='phone image' className='object-contain' />
          </div>
          <div>
            <TabGroup>
              <TabList className="flex flex-col gap-4">
                {categories.map(({ name, svg, post }) => (
                  <Tab
                    key={name}
                    className="flex flex-col justify-start gap-6 rounded-xl p-8  text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                  >
                    <span>
                      {svg}
                    </span>
                    <span className='text-lg font-semibold'>
                      {name}
                    </span>
                    <span className='text-sm text-left text-gray-400'>
                      {post}
                    </span>
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;