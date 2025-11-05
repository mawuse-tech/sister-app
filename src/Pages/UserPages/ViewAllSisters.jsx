import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'

import teacher from "../../assets/images/teacher.jpg"
import testi from "../../assets/images/testi.png"
import onek from "../../assets/images/onek.png"
import wo from "../../assets/images/1wo.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllVolunteers, fourPerPage, isUserLoggedIn } from '../../redux-store/features/users/userThunks'

const ViewAllSisters = () => {
  // const sistersPerPage = 4;
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastSister = sistersPerPage * currentPage;
  // const indexOfFirstSister = indexOfLastSister - sistersPerPage;

  // const currentSisters = sisterData.slice(indexOfFirstSister, indexOfLastSister);

  const dispatch = useDispatch()
  const { error, loading, volunteers, pages, } = useSelector((store) => store.volunteerPerPage)
  const { volunteers: allVolunteers } = useSelector((store) => store.volunteers)
  // console.log('all', allVolunteers)

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [proffession, setProffession] = useState("")
  const [available, setAvailable] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const all = await dispatch(fetchAllVolunteers()).unwrap();
        // console.log('Fetched all volunteers:', all);

        await dispatch(fourPerPage({ page, search, proffession, available })).unwrap();
        console.log('--------', available)
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchData();
  }, [dispatch, page, search, proffession, available]);

  // if (loading) return <p>Loading volunteers...</p>;
  // if (error) return <p className="text-red-500">{error}</p>;

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";


  return (
    <>
      <div className="bg-[#f7f0f8] h-[16rem] text-gray-700 relative flex flex-col items-center justify-center px-4">

        <div className="flex flex-col lg:flex-row justify-center lg:gap-28 gap-5 px-4 w-full  absolute top-10 lg:top-12 z-10">

          <div className="relative w-full lg:w-[30rem]">

            {/* Search Icon inside the input */}
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />

            <input
              type="text"
              placeholder="Search by profession"
              className="p-3 pl-10 rounded bg-white  shadow-md outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Dropdowns Container is below input only on small screens */}
          <div className="flex justify-between gap-4 w-full lg:w-auto">

            {/* Dropdown 1 */}
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 w-full lg:w-40 bg-white border-none text-gray-700 flex justify-between">
                Field <FiChevronDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-[#BA68C8] rounded-box z-10 w-52 p-2 shadow-sm text-white"
              >
                {allVolunteers.map((volunteer, index) => (
                  <li key={index}>
                    <button onClick={() => setProffession(volunteer.proffession)}>
                      {volunteer.proffession}
                    </button>
                  </li>
                ))}

              </ul>
            </div>

            {/* Dropdown 2 */}
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 w-full lg:w-40 bg-white border-none text-gray-700 flex justify-between">
                Availability <FiChevronDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-[#BA68C8] rounded-box z-10 w-52 p-2 shadow-sm text-white"
              >
                <li><button onClick={() => setAvailable("true")}>
                  Sisters Online
                </button></li>
                <li><button onClick={() => setAvailable("")}>
                  All sisters
                </button></li>

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
      <div className="bg-[#f7f0f8]  h-full pt-6 px-2 lg:px-4 md:px-4 text-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 md:gap-4 gap-2">

          {loading ? (
            // 🔹 Show loading state first
            <div className="col-span-full flex justify-center items-center h-72">
              <p className="text-[#BA68C8] text-lg font-semibold animate-pulse">
                Loading volunteers...
              </p>
            </div>
          ) : error ? (
            // 🔹 Show error state
            <div className="col-span-full flex justify-center items-center h-72">
              <p className="text-red-500 font-semibold">Error: {error}</p>
            </div>
          ) : volunteers.length === 0 ? (
            // 🔹 Only show "No results" if not loading or error
            <div className="col-span-full flex justify-center items-center h-72">
              <p className="text-red-600 font-semibold">No volunteer found for this search.</p>
            </div>
          ) : (
            // 🔹 Show the list of volunteers
            volunteers.map((volunteer) => (
              <div
                key={volunteer?._id}
                className="bg-[#BA68C8] rounded shadow-md flex flex-col gap-1 items-center justify-center"
              >
                <img
                  src={`http://localhost:8000/${volunteer?.profilePic}`}
                  alt={volunteer?.name}
                  className="w-full lg:h-60 md:h-60 h-36 object-cover rounded-t"
                />
                <p className="text-center font-semibold text-lg text-white">
                  {`${capitalize(volunteer?.firstName)} ${capitalize(volunteer?.lastName)}`}
                </p>
                <p className="text-center font-medium text-sm text-white mb-2">
                  {capitalize(volunteer?.proffession)}
                </p>
                <div className="flex justify-center gap-4 mb-3">
                  <NavLink to={`/chatBox/${volunteer._id}`}>
                    <span className="text-white border hover:text-white transition-all duration-200 rounded px-3 py-1 text-sm font-semibold cursor-pointer">
                      Chat
                    </span>
                  </NavLink>
                  <NavLink to={`/allsisters/${volunteer._id}`}>
                    <span className="text-white border shadow-2xl hover:text-white rounded px-3 py-1 text-sm font-semibold cursor-pointer">
                      View Profile
                    </span>
                  </NavLink>
                </div>
                <span
                  className={`block text-center mt-2 font-semibold text-sm px-4 py-1 rounded shadow-sm w-fit mx-auto mb-2 ${volunteer.isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                >
                  {volunteer.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            ))
          )}

        </div>

        <div className="flex justify-around mt-3">

          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}

            className={`join-item btn btn-outline text-white px-6 border-none 
    ${page === 1 ? "cursor-not-allowed bg-[#cfbcd3] text-black" : "bg-[#BA68C8]"}`}
          >
            <FaArrowLeft />
            Previous page
          </button>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, pages))}
            className={`join-item btn btn-outline text-white px-6 border-none mb-6
    ${page === pages ? "cursor-not-allowed bg-[#cfbcd3]" : "bg-[#BA68C8]"}`}
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