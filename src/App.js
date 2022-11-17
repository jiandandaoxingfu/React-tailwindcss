import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <div className="container flex flex-row h-screen w-screen mx-auto border-2 rounded-xl overflow-hidden">
      <div className="flex flex-col h-screen w-1/5 min-w-max bg-gray-600">
        <a href="https://github.com/upscayl" target="_blank">
          <div class="container mx-auto flex items-center space-x-4 p-3 mb-4">
            <img class="h-12 w-12 shrink-0 rounded-3xl" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
            <div className="">
              <span className="font-black text-3xl text-white">Upscayl</span><br/>
              <span className="text-gray-400 font-medium">Technical advisor</span>
            </div>
          </div>
        </a>

        <div className="ml-3 overflow-y-auto space-y-6">
          <button className="rounded-lg bg-gradient-purple h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-red h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-white h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-upscayl h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-green h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-blue h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-purple h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-red h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-white h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-upscayl h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-green h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-blue h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-purple h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-red h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-white h-10 w-3/4">Hellow World!</button>
          <br/>
          <button className="rounded-lg bg-gradient-upscayl h-10 w-3/4">Hellow World!</button>
          <br/>
        </div>

        <div className="text-center text-sm text-neutral-500 p-4">
          <p>
            Copyright © 2022 -{" "}
            <a className="font-bold" href="https://github.com/upscayl/upscayl" target="_blank"
            >
              Upscayl
            </a>
          </p>
          <p>By{" "}
            <a href="https://github.com/upscayl" className="font-bold" target="_blank">
              ***
            </a>{" "}
            and{" "}
            <a href="https://github.com/NayamAmarshe" className="font-bold" target="_blank">
              ***
            </a>
          </p>
        </div>

      </div>

      <div className="h-screen w-screen bg-gray-900">
      </div>
    </div>

    

  </div>
  );
}

export default App;
