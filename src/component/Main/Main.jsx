import React,{useEffect} from 'react'
import Card from '../Card/Card'
import './Main.scss'
import { Data } from '../../helper/Data'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Main() {
  useEffect(()=>{
    Aos.init({duration:2000})
    },[])
  return (
    
    <section className="mainSection container ">

      <div className="sectionTitle">
        <h1 className='mainTitle' data-aos='fade-up' >Most visited destinations</h1>
      </div>
      <div className="sectionContent">
        {
          Data.map((dataItem, key) => {
            return (
              <Card 
              imgSrc={dataItem.imgSrc}
                destTitle={dataItem.destTitle}
                location={dataItem.location}
                fees={dataItem.fees}
                discription={dataItem.discription}


              />

            );
          })}

      </div>
    </section>
  )
}

export default Main
