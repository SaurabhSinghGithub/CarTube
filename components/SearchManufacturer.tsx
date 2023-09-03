"use client"

import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { manufacturers } from '@/constants';
import { FaAlgolia, FaAmilia } from "react-icons/fa";

const SearchManufacturer = ({ manufacturer, setManuFacturer }: SearchManufacturerProps) => {

  const [query, setQuery] = useState('')

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className='search-manufacturer'>

      <Combobox value={manufacturer} onChange={setManuFacturer}>

        <div className='relative w-full'>

          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              // src='/car-logo.svg'
              src='/model-icon.png'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Audi...'
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >

            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufacturers.length === 0 && query !== '' ? (
                // <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                //   Nothing found.
                // </div>
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {item}
                        </span>
                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          >
                            {/* <FaAlgolia className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>


          </Transition>


        </div>

      </Combobox>
    </div>
  )
}

export default SearchManufacturer;











// "use client"
// import { Fragment, useState } from 'react'
// import { Combobox, Transition } from '@headlessui/react'
// import { FaAlgolia, FaAmilia } from "react-icons/fa";

// const people = [
//   { id: 1, name: 'Wade Cooper' },
//   { id: 2, name: 'Arlene Mccoy' },
//   { id: 3, name: 'Devon Webb' },
//   { id: 4, name: 'Tom Cook' },
//   { id: 5, name: 'Tanya Fox' },
//   { id: 6, name: 'Hellen Schmidt' },
// ]

// export default function Example() {
//   const [selected, setSelected] = useState(people[0])
//   const [query, setQuery] = useState('')

//   const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) =>
//         person.name
//           .toLowerCase()
//           .replace(/\s+/g, '')
//           .includes(query.toLowerCase().replace(/\s+/g, ''))
//       )

//   return (
//     <div className="fixed top-16 w-72">
//       <Combobox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//           <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//             <Combobox.Input
//               className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
//               displayValue={(person) => person.name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <FaAlgolia
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery('')}
//           >
//             <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {filteredPeople.length === 0 && query !== '' ? (
//                 <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                   Nothing found.
//                 </div>
//               ) : (
//                 filteredPeople.map((person) => (
//                   <Combobox.Option
//                     key={person.id}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
//                       }`
//                     }
//                     value={person}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <span
//                           className={`block truncate ${selected ? 'font-medium' : 'font-normal'
//                             }`}
//                         >
//                           {person.name}
//                         </span>
//                         {selected ? (
//                           <span
//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
//                               }`}
//                           >
//                             <FaAmilia className="h-5 w-5" aria-hidden="true" />

//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   )
// }
