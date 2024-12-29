import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'


import React from 'react'


//Enclose all JS Code in curly braces
//Use curly braces for inline CSS
const App = () => {
    return (
    <>
    <NavBar/>
    {/*Passing actual props to a component*/}
    <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs'/>
    <HomeCard/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default App