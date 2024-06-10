import './style/global.css'

function App() {
  if (typeof window !== 'undefined') {
    const btn = document.querySelector('.btn') as HTMLButtonElement | null

    if (btn) {
      btn.onmousemove = function(e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
        console.log('x', x)
        console.log('y', y)
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
      }
    }

  }
  
  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="max-w-[500px] py-10 flex flex-col justify-center items-center gap-6">
        <h1 className="text-[#FFFF] text-lg">Button Animations</h1>
        {/* button 1  */}
        <button className="border border-white px-8 py-3 text-white cursor-pointer duration-300 hover:opacity-30 hover:scale-95">Click me!</button>
        {/* button 2  */}
        <button className="text-white cursor-pointer px-8 py-3 duration-300 overflow-hidden relative after:h-[1px]
          after:w-full after:bottom-0 after:right-full after:bg-white after:absolute hover:after:translate-x-full after:duration-300">Click me!</button>
          {/* button 3  */}
        <button className="px-8 py-3 text-white relative before:absolute before:w-2/3 before:h-2/3 before:top-0
          before:left-0 before:border-t before:border-l before:border-white before:border-solid
          after:absolute after:w-2/3 after:h-2/3 after:bottom-0
          after:right-0 after:border-b after:border-r after:border-white after:border-solid
          hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full after:duration-300 before:duration-300
          ">Click me!</button>
        {/* button 4  */}
        <button className="btn relative border border-white text-white overflow-hidden inline-flex px-8 py-3 
          before:absolute before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0
          before:rounded-full before:bg-sky-600 before:translate-x-[-50%] before:translate-y-[-50%]
          hover:before:w-[400px] hover:before:h-[400px]
          ">
            <span className='z-30'>Click me!</span>
          </button>
      </div>

    </div>
  )
}

export default App
