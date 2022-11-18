import './App.css'
import { useState } from 'react'
import { Switch, Tab, Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const colors = ["bg-gradient-purple", "bg-gradient-red", "bg-gradient-white", "bg-gradient-upscayl", "bg-gradient-green", "bg-gradient-blue"]
  const [enabled, setEnabled] = useState(false)
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

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
                new Array(24).join(',').split(',').map((i, j) =>
                  <div className="mx-auto w-48 h-32 rounded-xl bg-white hover:scale-105 animate"></div>
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center gap-4 h-screen w-screen mx-auto border-2 rounded-xl overflow-hidden">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>

        <div className="container w-full max-w-md mx-auto px-2 py-16 bg-blue-500">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
    
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
    
                        <a href="/#" // eslint-disable-line
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="w-full px-4 pt-2">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is your refund policy?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>


        <div className="w-2/3 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="/#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="/#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="/#"
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                <a
                  href="/#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                >
                  1
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  2
                </a>
                <a
                  href="/#"
                  className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="/#"
                  className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  9
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  10
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
