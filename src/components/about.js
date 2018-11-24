import React from 'react'
const About =()=>{
  return(
    <React.Fragment>
      <h4>Hello there!</h4>
      <p>
        "The purpose of this application is to increase productivity for myself while I'm on the hunt for a new job. I wanted to build something that would keep a visual schedule and send notifications when a new event was taking place within the schedule itself through Chrome notifications."
      </p>
      <p>
        I was especially concerned with a cleaner code base that was  segmented by functionality, faster read times and practicing more with HTML and CSS, as there is so much to know and nicer looking websites are just more fun to use.
        The project was built using React, Redux and Ruby on Rails.
      </p>
      <p>
        I am hoping that over time I do not get completely ambushed by Chrome notifications. If you have any questions, email me  <span><a href="mailto:joshua.ross.miller@gmail.com">here</a></span>. The code base for this project is contained <span>here</span> and <span>here</span>.
      </p>
    </React.Fragment>
  )
}
export default About
