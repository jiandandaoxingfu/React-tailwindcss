import './App.css'

function App() {
  const colors = ["bg-gradient-purple", "bg-gradient-red", "bg-gradient-white", "bg-gradient-upscayl", "bg-gradient-green", "bg-gradient-blue"]

  return (
    <div>
      <div className="container flex flex-row h-screen w-screen mx-auto border-2 rounded-xl overflow-hidden">
        <div className="flex flex-col h-screen w-1/5 min-w-max bg-gray-600">
          {/* Header */}
          <a href="https://github.com/upscayl">
            <div className="container mx-auto flex items-center space-x-4 p-3 mb-4">
              <img alt="" className="h-12 w-12 shrink-0 rounded-3xl" src="https://avatars.githubusercontent.com/u/112148288?s=200&v=4" />
              <div className="">
                <span className="font-black text-3xl text-white">Upscayl</span><br />
                <span className="text-gray-400 font-medium">Technical advisor</span>
              </div>
            </div>
          </a>

          {/* Menu */}
          <div className="ml-3 overflow-y-auto space-y-6">
            {
              new Array(12).join(',').split(',').map((i, j) =>
                <>
                  <button className={`rounded-lg h-10 w-3/4 ${colors[j%6]}`}>Hellow World!</button>
                  <br />
                </>
              )
            }
          </div>


          {/* Footer */}
          <div className="text-center text-sm text-neutral-500 p-4">
            <p>
              Copyright © 2022 -{" "}
              <a className="font-bold" href="https://github.com/upscayl/upscayl"
              >
                Upscayl
              </a>
            </p>
            <p>By{" "}
              <a href="https://github.com/upscayl" className="font-bold">
                ***
              </a>{" "}
              and{" "}
              <a href="https://github.com/NayamAmarshe" className="font-bold">
                ***
              </a>
            </p>
          </div>
        </div>

        {/* WeChat */}
        <div className="h-screen w-screen bg-gray-900 overflow-y-auto">
          <div className="w-full flex flex-col items-center bg-green-500 overflow-hidden">
            <p className="text-white font-medium text-3xl text-center mt-6">WeChat</p>

            {/* 版本信息 */}
            <div className="container mx-auto w-96 my-12">
              <hr className="border-1 mb-4" />
              <ul className="space-y-2 text-white">
                <li>
                  <a href="https://weixin.com">微信 8.0.30 for iOS 正式版发布</a>
                  <span className="float-right">11-14</span>
                </li>
                <li>
                  <a href="https://weixin.com">微信 8.0.30 for iOS 正式版发布</a>
                  <span className="float-right">11-14</span>
                </li>
                <li>
                  <a href="https://weixin.com">微信 8.0.30 for iOS 正式版发布</a>
                  <span className="float-right">11-14</span>
                </li>
                <li>
                  <a href="https://weixin.com">微信 8.0.30 for iOS 正式版发布</a>
                  <span className="float-right">11-14</span>
                </li>
                <li className="py-2">
                  <a href="https://weixin.com">更多 > </a>
                </li>
              </ul>
            </div>

            {/* 设备 */}
            <div className="flex flex-wrap text-center gap-4 mx-10">
              <div className="pt-10 mx-auto rounded-full h-28 w-28 bg-blue-500/10 hover:bg-blue-500/30 animate">
                <span className="">Android</span>
              </div>
              <div className="pt-10 mx-auto rounded-full h-28 w-28 bg-blue-500/10 hover:bg-blue-500/30 animate">
                <span className="">iOS</span>
              </div>
              <div className="pt-10 mx-auto rounded-full h-28 w-28 bg-blue-500/10 hover:bg-blue-500/30 animate">
                <span className="">Windows</span>
              </div>
              <div className="pt-10 mx-auto rounded-full h-28 w-28 bg-blue-500/10 hover:bg-blue-500/30 animate">
                <span className="">macOS</span>
              </div>
              <div className="pt-10 mx-auto rounded-full h-28 w-28 bg-blue-500/10 hover:bg-blue-500/30 animate">
                <span className="">文件传输助手网页版</span>
              </div>
            </div>

            {/* 功能 */}
            <div className="my-20 flex flex-wrap text-center gap-4 mx-10">
              {
                new Array(8).join(',').split(',').map((i, j) =>
                  <div className="mx-auto w-48 h-32 rounded-xl bg-white hover:scale-105 animate"></div>
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center gap-4 w-screen mx-auto border-2 rounded-xl">
        <div className="grid grid-cols-3 gap-8 mt-4">
          <button className="btn">Button</button>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-secondary">Button</button>
          <button className="btn btn-accent">Button</button>
          <button className="btn btn-ghost">Button</button>
          <button className="btn btn-link">Button</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
          <button class="btn btn-outline">Button</button>
          <button class="btn btn-lg">Large</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
          <button className="btn btn-wide col-span-2">Wide</button>
          <button className="btn btn-block col-span-3">block</button>
          <input type="reset" value="Reset" className="btn" />
          <button className="btn gap-2">
            Button
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
          <button className="btn loading">loading</button>
        </div>

        {/* The button to open modal */}
        <label htmlFor="my-modal-6" className="btn">open modal</label>
        
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Yay!</label>
            </div>
          </div>
        </div>

        <label className="swap swap-rotate">
          <input type="checkbox" />
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>    
        </label>

        <div className="alert alert-success shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>

        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>

        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        <div className="w-64 carousel rounded-box">
          {
            new Array(6).join(',').split(',').map(() => 
              <div className="carousel-item w-full">
                <img src="https://placeimg.com/256/400/arch" alt="" className="w-full" alt="Tailwind CSS Carousel component" />
              </div> 
            )
          }
        </div>

        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":15}}></span>
            </span>
            days
          </div> 
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":10}}></span>
            </span>
            hours
          </div> 
          <div className="divider divider-horizontal">AND</div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":24}}></span>
            </span>
            min
          </div> 
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":48}}></span>
            </span>
            sec
          </div>
        </div>

        <div className="form-control gap-4 mb-10">
          <label className="cursor-pointer label">
            <span className="label-text mr-6">Remember me</span>
            <input type="checkbox" checked className="checkbox checkbox-accent checkbox-md" />
          </label>
          <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
          <div className="columns-2">
            <label className="label cursor-pointer">
              <span className="label-text">Red pill</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Blue pill</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
            </label>
          </div>
          <input type="range" min="0" max="100" value="40" className="range range-success" />
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <label className="cursor-pointer label">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-primary" checked />
          </label>
        </div>
        <div className="divider">OR</div>
        <div className="btn-group">
          <button className="btn btn-active">Button</button>
          <button className="btn">Button</button>
          <button className="btn">Button</button>
        </div>
        
        <div className="drawer w-2/3 h-32">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
              <div className="flex-1 px-2 mx-2">Navbar Title</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  <li><a>Navbar Item 1</a></li>
                  <li><a>Navbar Item 2</a></li>
                </ul>
              </div>
            </div>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <span>Price</span>
            <input type="text" placeholder="10" className="input input-bordered" />
            <span>USD</span>
          </label>
        </div>

        <img className="mask mask-hexagon" src="https://placeimg.com/160/160/arch" />

        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>

        <div className="tabs">
          <a className="tab tab-lifted">Tab 1</a> 
          <a className="tab tab-lifted tab-active">Tab 2</a> 
          <a className="tab tab-lifted">Tab 3</a>
        </div>

        <div className="mockup-code">
          <pre data-prefix="$"><code>npm i daisyui</code></pre> 
          <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
          <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>

        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
          </div> 
          <div>
            <div className="grid grid-flow-col gap-4">
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </div> 
          <div>
            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>



      </div>

    </div>
  );
}

export default App;
