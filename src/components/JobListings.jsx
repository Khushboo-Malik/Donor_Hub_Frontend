import Jobs from '../jobs.json'
import React from 'react'
import JobListing from './JobListing'


const JobListings = () => {
  const recentJobs=Jobs.slice(0,3);
  return (
    <>
    {/*To select only first 3 jobs */}
    {/*<!-- Browse Jobs -->*/}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentJobs.map((job)=>(
          //Set key to uniquely identify each job 
          <JobListing key={job.id} job={job}/>
            ))}
          </div>
          </div>
    </section>

    </>
  )
}

export default JobListings