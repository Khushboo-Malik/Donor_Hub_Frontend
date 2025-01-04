import React from 'react'

import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (<>
    <Hero title='Connect. Contribute. Create Change.' subtitle='Empowering Generosity, One Cause at a Time'/>
    <HomeCard/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
};

export default HomePage;