/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import Link from 'next/link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, HomeIcon, OfficeBuildingIcon, LocationMarkerIcon, MailIcon, DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline'

const solutions = [
  {
    name: 'Top',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'About us',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/about',
    icon: OfficeBuildingIcon,
  },
  { name: 'Projects', description: "Your customers' data will be safe and secure.", href: '/projects', icon: DesktopComputerIcon },
  {
    name: 'Member',
    description: "Connect with third-party tools that you're already using.",
    href: '/members',
    icon: UserGroupIcon,
  },
  {
    name: 'Contact',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '/contact',
    icon: MailIcon,
  },
]




// function classNames(...classes) {
// return classes.filter(Boolean).join(' ')
// }





const Header: React.FC = () => {
  return (
    <Popover className="relative bg-black text-white hover:text-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"}><a className="text-base font-medium text-white hover:text-gray-500"><h1 className='text-white font-bold text-xl'>Si-cle inc.</h1></a></Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <Link href={"/"}><a className="text-base font-medium text-white hover:text-gray-500">
              Top
            </a></Link>
            <Link href={"/about"}><a className="text-base font-medium text-white hover:text-gray-500">
              About
            </a></Link>
            <Link href={"/projects"}><a className="text-base font-medium text-white hover:text-gray-500">
              Project
            </a></Link>
            <Link href={"/members"}><a className="text-base font-medium text-white hover:text-gray-500">
              Member
            </a></Link>
            <Link href={"/contact"}><a className="text-base font-medium text-white hover:text-gray-500">
              Contact
            </a></Link>

          </Popover.Group>



          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">


          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-500">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

          </div>


        </Popover.Panel>
      </Transition>

    </Popover>




  )
}

export default Header;