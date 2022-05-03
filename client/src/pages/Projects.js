import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Projects = () => {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <section className={darkMode ? `projects bg-dark` : `projects bg-light`} id ='projects'>
      <h1 className='mt-5 mb-5'>Projects</h1>

      <div className="card">
        <div className="details">
          <h2>Coffee Shop | Change and Tip Calculator</h2>
          <div className="technologies">
            <div className="technologie-wrapper me-3">
              HTML
            </div>
            <div className="technologie-wrapper me-3">
              CSS
            </div>
            <div className="technologie-wrapper me-3">
              Javascript
            </div>
            <div className="technologie-wrapper me-3">
              Bootstrap
            </div>
            <div className="technologie-wrapper me-3">
              Netlify
            </div>
          </div>
          <div className="project-description pt-3 pe-3">
            A responsive web application for employees to use it as a bill calculator.
            The cashier can view all items of the menu (image, category, name and price), add items to cart, increase, decrease or remove units of each item added. The app will show the total items in the cart, the subtotal price, the value of a 10% tip, the total price, and corresponding change if necessary. After registering the purchase, we can move on to the next customer.

            For this project, the following concepts were applied:
            <ul className='mt-2'>
              <li>Classes Constructors</li>
              <li>DOM Manipulation</li>
              <li>Array.forEach()</li>
              <li>onClick Event</li>
            </ul>
          </div>
          <div className="project-buttons mt-2">
          <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://change-tip-calculator.netlify.app/'>
              <div className="btn fill">
               demo
              </div>
            </a>
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://github.com/midoritiba/CoffeShop-Cash-register-Project'>
            <div className="btn fill ms-3">
              code
            </div>
            </a>
          </div>
        </div>

        <div className="project-mockup">
        <img src={process.env.PUBLIC_URL + '/images/project1.svg'} style={{width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '20px'}} alt="" />
        </div>
      </div>

      {/* second card */}
      <div className="card mt-5">
        <div className="details">
          <h2>Recipe Blog</h2>
          <div className="technologies">
            <div className="technologie-wrapper me-3">
              EJS
            </div>
            <div className="technologie-wrapper me-3">
              Javascript
            </div>
            <div className="technologie-wrapper me-3">
              Bootstrap
            </div>
            <div className="technologie-wrapper me-3">
              Express.js
            </div>
            <div className="technologie-wrapper me-3">
              MongoDB
            </div>
            <div className="technologie-wrapper me-3">
              Heroku
            </div>
          </div>
          <div className="project-description pt-3 pe-3">
            This Full Stack blog was developed by a team of 3 people. We created a responsive App that include some of the following features:
            <ul className='mt-2'>
              <li>Recipe Categories</li>
              <li>Recipe Detailed View</li>
              <li>Submit Recipe</li>
              <li>Show Latest Recipes</li>
            </ul>
          </div>
          <div className="project-buttons mt-2">
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://food-recipes-blog.herokuapp.com/'>
              <div className="btn fill">
               demo
              </div>
            </a>
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://github.com/naomininnig/cooking-blog'>
            <div className="btn fill ms-3">
              code
            </div>
            </a>
          </div>
        </div>

        <div className="project-mockup">
        <img src={process.env.PUBLIC_URL + '/images/project2.svg'} style={{width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '20px'}} alt="" />
        </div>
      </div>

      {/* third card */}
      <div className="card mt-5">
        <div className="details">
          <h2>E-Commerce App</h2>
          <div className="technologies">
            <div className="technologie-wrapper me-3">
              React.js
            </div>
            <div className="technologie-wrapper me-3">
              React-Bootstrap
            </div>
            <div className="technologie-wrapper me-3">
              Redux
            </div>
            <div className="technologie-wrapper me-3">
              Express.js
            </div>
            <div className="technologie-wrapper me-3">
              MongoDB
            </div>
            <div className="technologie-wrapper me-3">
              JWT Authentication
            </div>
            <div className="technologie-wrapper mt-3 me-3">
              Heroku
            </div>
          </div>
          <div className="project-description pt-3 pe-3">
          eCommerce built with MERN Stack & Redux. This project is part of a 15 hours Course in which I added new components and changed the layout. Some of the functionalities of this application are:
            <ul className='mt-2'>
              <li>Shopping cart</li>
              <li>User profile with orders</li>
              <li>Admin product management</li>
              <li>Admin user management</li>
              <li>Admin Order details page</li>
              <li>Mark orders as delivered option</li>
              <li>Checkout process (shipping, payment method, etc)</li>
              <li>PayPal / credit card integration</li>
            </ul>
          </div>
          <div className="project-buttons mt-2">
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://organic-care-app.herokuapp.com/'>
              <div className="btn fill">
               demo
              </div>
            </a>
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://github.com/midoritiba/ecommerce_mern'>
            <div className="btn fill ms-3">
              code
            </div>
            </a>
          </div>
        </div>

        <div className="project-mockup">
        <img src={process.env.PUBLIC_URL + '/images/project3.svg'} style={{width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '20px'}} alt="" />
        </div>
      </div>

      {/* fourth card */}
      <div className="card mt-5">
        <div className="details">
          <h2>Movie Search App </h2>
          <div className="technologies">
            <div className="technologie-wrapper me-3">
              Javascript
            </div>
            <div className="technologie-wrapper me-3">
              Bootstrap
            </div>
            <div className="technologie-wrapper me-3">
              Netlify
            </div>
          </div>
          <div className="project-description pt-3 pe-3">
          Movie Search App using Fetch with OMDb API, a RESTful web service to obtain movie information and images.
            <ul className='mt-2'>
              <li>API using fetch</li>
              <li>Asynchronous functions</li>
            </ul>
          </div>
          <div className="project-buttons mt-2">
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://omdb-search-movies.netlify.app/'>
              <div className="btn fill">
               demo
              </div>
            </a>
            <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://github.com/midoritiba/API_MovieLibrary'>
            <div className="btn fill ms-3">
              code
            </div>
            </a>
          </div>
        </div>

        <div className="project-mockup">
        <img src={process.env.PUBLIC_URL + '/images/project4.svg'} style={{width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '20px'}} alt="" />
        </div>
      </div>

    </section>
  )
}

export default Projects