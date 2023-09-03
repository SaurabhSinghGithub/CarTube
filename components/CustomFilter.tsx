"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { CustomFilterProps } from '@/types';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsFillCaretDownFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { updateSearchParams } from '@/utils';

// const people = [
//   { name: 'Wade Cooper' },
//   { name: 'Arlene Mccoy' },
//   { name: 'Devon Webb' },
//   { name: 'Tom Cook' },
//   { name: 'Tanya Fox' },
//   { name: 'Hellen Schmidt' },
// ]


const CustomFilter = ({ title, options }: CustomFilterProps) => {

  const [selected, setSelected] = useState(options[0])

  const router = useRouter()

  const handleUpdateParams = (e: { title: string; value: string }) => {

    console.log(e)

    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  }

  return (
    <div className="top-16 w-44 z-10">
      <Listbox value={selected} onChange={(e) => {
        setSelected(e);
        handleUpdateParams(e);
      }}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsFillCaretDownFill
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BsFillBookmarkCheckFill className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>

  )
}

export default CustomFilter;