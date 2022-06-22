import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// const data = [
//   {
//     id:1,
//     image:IMG1,
//     title:'Crypto Currency Dashboard & Financial Visualizaion',
//     github:'https://github.com',
//     demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id:2,
//     image:IMG2,
//     title:'Charts templates & infographics in Figma',
//     github:'https://github.com',
//     demo:'https://dribbble.com/shots/16580766-Orion-UI-kit-charts-templates-infographics-in-Figma'
//   },
//   {
//     id:3,
//     image:IMG3,
//     title:'Figma dashboard UI kit for data design web apps',
//     github:'https://github.com',
//     demo:'https://dribbble.com/shots/17290917-'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'Crypto Currency Dashboard & Financial Visualizaion',
//     github:'https://github.com',
//     demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'Crypto Currency Dashboard & Financial Visualizaion',
//     github:'https://github.com',
//     demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id:1,
//     image:IMG1,
//     title:'Crypto Currency Dashboard & Financial Visualizaion',
//     github:'https://github.com',
//     demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   }
// ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2> 

      <div className='container portfolio_container'>
      <article className='portfolio_item'>
      <div className='"portfolio_item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
      <div className='"portfolio_item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
      <div className='"portfolio_item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
      <div className='"portfolio_item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
      <div className='"portfolio_item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
      <div className='"portfolio_item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
      </article>
      
      </div>      
      </section>
  )
}

export default Portfolio