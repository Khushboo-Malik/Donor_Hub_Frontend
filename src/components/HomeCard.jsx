import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const HomeCard = () => {
  return (
    <>
    {/*<!-- Donors and Organizers -->*/}
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
          <h2 className="text-2xl font-bold">For Donors</h2>
            <p className="mt-2 mb-4">
            Your generosity can transform lives and bring hope to those in need.
            </p>
            <Link
              to="/donate"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Donate Now
            </Link>
          </Card>
          <Card 
  style={{ backgroundColor: '#f39da2', padding: '1rem', borderRadius: '0.5rem' }}
>
  <h2 className="text-2xl font-bold">For Organizers</h2>
  <p className="mt-2 mb-4">
    Take charge, inspire others, and unite communities for meaningful change.
  </p>
  <Link
    to="/organize"
    style={{
      backgroundColor: '#e7424b',
      color: 'white',
      borderRadius: '0.5rem',
      padding: '0.5rem 1rem',
      display: 'inline-block',
      textAlign: 'center',
    }}
    className="hover:opacity-90"
  >
    Start a Campaign
  </Link>
</Card>

        </div>
      </div>
    </section>
    </>
  )
}

export default HomeCard