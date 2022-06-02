import React from 'react'
import './Styles/PicturesDetails.css'
import calendar from  '../../others/images/calendar.jpg'
import profile from  '../../others/images/profile.png'
import information from  '../../others/images/information.jpg'

function PicturesDetails() {
  return (
    <div className="pictures-details">
    <div className="flex"> <img className='picture' src={calendar} alt="calendar"/>  <div> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>  </div>
    <div className="flex"> <img className='picture' src={profile} alt="profile"/> <div> he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </div></div>
    <div className="flex"> <img className='picture' src={information} alt="information"/> <div> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </div>
   </div>
  </div>
  )
}

export default PicturesDetails

