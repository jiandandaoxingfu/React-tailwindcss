import './App.css';


function App() {
  const colors = ["purple", "red", "white", "upscayl", "green", "blue"];
  
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
              new Array(24).join(',').split(',').map((i, j) =>
                <>
                  <button className={`rounded-lg bg-gradient-${colors[j % 6]} h-10 w-3/4`}>Hellow World!</button>
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
                new Array(24).join(',').split(',').map((i, j) =>
                  <div className="mx-auto w-48 h-32 rounded-xl bg-white hover:scale-105 animate"></div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
