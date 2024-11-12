const posts = [
  {
    name: 'SarahLubzCash',
    post: 'For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.',
    title: 'It really works'
  },
  {
    name: 'Notifications',
    post: 'Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.',
    title: 'Quit my job'
  },
  {
    name: 'SarahLubzCash',
    post: 'We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.',
    title: 'Whish i could hive 6 stars'
  },
  {
    name: 'Jisoo1234',
    post: 'Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.',
    title: 'Quit my job'
  },
]

function Card() {
  const star = <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-cyan-500"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

  return (
    <div className="flex flex-col gap-5 p-5 overflow-hidden">
      <div className="relative animate-move-top">
        <div className="absolute ">
          {posts.map(({ name, post, title }, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-3xl p-8 shadow-lg bg-white opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="flex">{star}{star}{star}{star}{star}</div>
              <div className="font-bold">{title}</div>
              <div className="mt-2 text-gray-700">{post}</div>
              <div className="mt-2 text-sm text-gray-500">- {name}</div>
            </div>
          ))}
        </div>

      </div>


    </div>
  )
}

export default Card;