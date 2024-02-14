import React from 'react'
import Cards from './Cards'

function Career() {

    const dashboardData = [
        {
          title:"Top Full Stack Development Trends for 2024: What to Expect",
          image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
          desc:'In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full stack development, which involves creating software systems or web applications that encompass both front-end and back-end components, is no exception.',
          footer:"9 February 2024"
        },
        {
          title:"Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
          image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide-300x188.webp",
          desc:'In the world of web development, Cascading Style Sheets (CSS) play a crucial role in controlling the appearance and layout of web pages. With CSS, developers can specify a wide range of visual styles, including fonts, colors, margins, borders, and more.',
          footer:"8 February 2024"
        },
        {          
          title:"A Complete Guide on Backend Development: Roles, Responsibilities, Skills, and Salary [2024]",
          image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary-300x188.webp",
          desc:'Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the things that come under the frontend but the real work happens in the backend development.',
          footer:"9 February 2024"
        },
        {
          title:"A Comprehensive Guide to HTML and CSS Roadmap [2024]",
          image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Comprehensive-Guide-to-HTML-and-CSS-Roadmap-768x480.webp",
          desc:'A Front end developer is someone who makes websites look great and work well for us when we use them. They take care of everything we can see and click on on a website, like buttons, texts, and images.',
          footer:"8 February 2024"
        },
        {
          title:"How to Create a Simple “Hello World” Page Using HTML",
          image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Steps-to-Create-a-Simple-Hello-World-Page-Using-HTML.webp",
          desc:'Creating your first web page is an important step in learning web development. In coding, the phrase “Hello World!” holds a special place, symbolizing the initial success of a new programmer. This blog post is dedicated to those taking their first steps in web development, aiming to guide you through creating a simple “Hello World!” page using HTML.',
          footer:"9 February 2024" 
        },
        {
          title:"What does a Front End Developer do? A Complete Guide",
          image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-does-a-Front-End-Developer-do-A-Complete-Guide.webp",
          desc:'A Front end developer is someone who makes websites look great and work well for us when we use them. They take care of everything we can see and click on on a website, like buttons, texts, and images. They use tools and computer languages like HTML for the basic structure of the website, CSS to make it look nice with colors and layouts, and JavaScript to add amazing features like dropdown menus or pop-up messages. ',
          footer:"9 February 2024" 
        }
      ]
  return (
    <div className="Elements">
    {
       dashboardData.map((e,i)=>{
         return <Cards data={e} key={i}/>
       })
    }
    </div>
  )
}

export default Career