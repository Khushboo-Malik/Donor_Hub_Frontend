import {useState} from 'react'
import {FaMapMarker} from 'react-icons/fa'
import React from 'react'
import {Link} from 'react-router-dom'

const JobListing = ({donation}) => {
    //Setting state by using useState hook
  const [showFullDescription,setShowFullDescription]=useState(false);  

  let description=donation.description;
  if(!showFullDescription){
    description=description.substr(0,90)+'...';
  }
  return (
    <>
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{donation.type}</div>
                <h3 className="text-xl font-bold">{donation.title}</h3>
              </div>

              <div className="mb-5">
               {description}
               <button onClick={()=>setShowFullDescription((prevState)=>!prevState)} className='text-indigo-500 mb-5  hover:text-indigo-60'>
                    {showFullDescription?'Less':'More'}
              </button>
              
              </div>
              <h3 className="text-indigo-500 mb-2">{donation.goalAmount}</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                  {donation.location}
                </div>
                <Link
                  to={`donate.html/${donation.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default JobListing