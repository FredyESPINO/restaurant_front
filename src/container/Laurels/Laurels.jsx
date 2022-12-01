import React from 'react'
import "./Laurels.css"
import {SubHeading} from "../../components"
import {images,data} from "../../constants"

const AwardCard=({award:{imgUrl, title, subtitle}})=>{
  return(
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>
          {title}
        </p>
        <p className="p__cormorant">
          {subtitle}
        </p>
      </div>
    </div>
  )
}


const Laurels = () => {
  return (
    <div id='awards' className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">
          Our Laurels
        </h1>

        <div className="app__laurels_awards">
          {
            data.awards.map((award,index)=>{
             console.log(award)
              return(
             
            <AwardCard award={award} key={index} />
          )})}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  )
}

export default Laurels