import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Developing WebApps</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Build the frontend of an app using React / TypeScript</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Connect the app to a backend using Node.js / Django</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Merge the app with a database like MySQL .</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Deploy the app on the AWS or GCP Cloud using nginx or Docker / Kubernetes.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Cloud Engineering</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Set up instances on the AWS / GCP Cloud</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Write scripts for lambda functions on AWS for better functionality of the application. </p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Deploy and maintain the software using Docker and Kubernetes</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Connect / merge a database to the cloud</p>
            </li>
          </ul>
        </article>
        {/* END OF CLOUD */}
        <article className="service">
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Mine and Clean data.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Create a visualization of the data for better analysis.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Write SQL queries to solve data related problems.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Implement data analysis models to make valuable predictions.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
      </div>
    </section>
  )
}

export default services