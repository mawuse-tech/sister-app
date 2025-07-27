import React, { useState } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'

import teacher from "../../assets/images/teacher.jpg"
import indicator from 'daisyui/components/indicator'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const sisterData = [
  {
    id: 1,
    image: teacher,
    name: "Perfect Patience Dah",
    proffession: "Teacher",
    available: "availabe",


  },
  {
    id: 2,
    image: teacher,
    name: "Efuwa Mensah York",
    proffession: "Doctor",
    available: "not Available"

  },
  {
    id: 3,
    image: teacher,
    name: "Nkunim Asaah Osei",
    proffession: "Counsellor",
    available: "available",

  },
  {
    id: 4,
    image: teacher,
    name: "Eunice Asamoah",
    proffession: "Lawyer",
    available: "not available",

  },
  {
    id: 5,
    image: teacher,
    name: "Eunice Asamoah",
    proffession: "Lawyer",
    available: "not available",

  },
  {
    id: 6,
    image: teacher,
    name: "Eunice Asamoah",
    proffession: "Lawyer",
    available: "not available",

  },
  {
    id: 7,
    image: teacher,
    name: "Eunice Asamoah",
    proffession: "Lawyer",
    available: "not available",

  },
  {
    id: 8,
    image: teacher,
    name: "Eunice Asamoah",
    proffession: "Lawyer",
    available: "not available",

  }
]

const ViewAllSisters = () => {
  const sistersPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastSister = sistersPerPage * currentPage;
  const indexOfFirstSister = indexOfLastSister - sistersPerPage;

  const currentSisters = sisterData.slice(indexOfFirstSister, indexOfLastSister);



  return (
    <>
      {/* Blue Header Background */}
      <div className="bg-[#f7f0f8] h-[16rem] text-gray-700 lg:h-52 relative flex flex-col items-center justify-center px-4">

        {/* Input Boxes Container */}
        <div className="flex flex-col lg:flex-row justify-center lg:gap-28 gap-5 px-4 w-full  absolute top-10 lg:top-12 z-10">

          <div className="relative w-full lg:w-[30rem]">
            {/* Search Icon inside the input */}
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />

            {/* Search Input with left padding for icon */}
            <input
              type="text"
              placeholder="Search by proffession"
              className="p-3 pl-10 rounded bg-white  shadow-md outline-none w-full"
            />
          </div>


          {/* Dropdowns Container — stacked below input only on small screens */}
          <div className="flex justify-between gap-4 w-full lg:w-auto">

            {/* Dropdown 1 */}
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 w-full lg:w-40 bg-white border-none text-gray-700 flex justify-between">
                Field <FiChevronDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
              >
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>

            {/* Dropdown 2 */}
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 w-full lg:w-40 bg-white border-none text-gray-700 flex justify-between">
                Availability <FiChevronDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
              >
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
        </div>


        {/* Section Title */}
        <div className="absolute top-44 lg:top-32 text-center text-gray-700 px-4">
          <h3 className="text-2xl md:text-3xl font-semibold">Meet All Sisters</h3>
          <p className="mt-2 pb-4 text-sm md:text-base">Browse through available sisters and start a chat</p>
        </div>
      </div>


      {/* Body Section */}
      <div className="bg-[#f7f0f8]  h-full pt-6 px-4 text-gray-700">
        <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentSisters.map((sister) => (
            <div
              key={sister.id}
              className="bg-[#BA68C8] rounded shadow-md flex flex-col gap-1 items-center justify-center"
            >
              <img
                src={sister.image}
                alt={sister.name}
                className="w-full h-60 object-cover rounded-t"
              />
              <p className="text-center font-semibold text-lg text-white">{sister.name}</p>
              <p className="text-center font-medium text-sm text-white mb-2">{sister.proffession}</p>

              <div className="flex justify-center gap-4 mb-3">
                <span className="text-white border hover:text-white transition-all duration-200 rounded px-3 py-1 text-sm font-semibold cursor-pointer">
                  Chat
                </span>
                <span className="text-white border shadow-2xl hover:text-white transitio rounded px-3 py-1 text-sm font-semibold cursor-pointer">
                  View Profile
                </span>
              </div>

              <span className="block text-center mt-2 font-semibold text-sm bg-[#F3F3FC] text-gray-700 px-4 py-1 rounded shadow-sm w-fit mx-auto mb-2">
                {sister.available}
              </span>

            </div>
          ))}
        </div>

        <div className="flex justify-around mt-3">

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`join-item btn btn-outline text-[white] !bg-[#BA68C8] px-6 border-none ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
            Previous page
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                indexOfLastSister < sisterData.length ? prev + 1 : prev
              )
            }
            className={`join-item btn btn-outline text-white !bg-[#BA68C8] px-6 mb-6 border-none ${indexOfLastSister >= sisterData.length ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            disabled={indexOfLastSister >= sisterData.length}
          >
            Next
            <FaArrowRight />
          </button>

        </div>
      </div>
    </>
  )
}

export default ViewAllSisters