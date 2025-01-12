import {useState,useEffect} from 'react' 
import React from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({isHome=true}) => {
  const [donations,setJobs]=useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    
    const fetchJobs= async()=>{
  try{
    const res=await fetch('https://donor-hub-frontend.vercel.app/api');
    const data=await res.json();  
    setJobs(data);
  
  }catch(error){
    console.log("Error fetching data:",error);
  }finally{
    setLoading(false);
  }
}
    fetchJobs();
  },[]);
  return (
    <>
    {/*To select only first 3 jobs */}
    {/*<!-- Browse Campaigns -->*/}
    <section className="px-4 py-10" style={{ backgroundColor: '#fbe1e2' }}>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#ea5961' }}>
          {isHome?'Recent Campaigns':'Browse Campaigns'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading?<Spinner loading={loading}/>:(<>{donations.map((donation)=>(
          //Set key to uniquely identify each job 
          <JobListing key={donation.id} donation={donation}/>
            ))}</>)}
          </div>
          </div>
    </section>

    </>
  )
}

export default JobListings