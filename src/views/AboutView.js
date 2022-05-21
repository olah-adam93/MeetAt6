import React from 'react';
import './Style/AboutView.css';

const AboutView = () => {
  return <div className='about-container'>
    <div className="about-image-left">
       <img className="image-left" src="https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?fit=400%2C267&ssl=1"></img>
    </div>
      
    
    <div className="about-text-container">
    <h3 className='about-title'>Who are we?</h3>
    <div className='about-body'>Once upon a time, there were six young people on the planet earth. One day, these six, different person decided to sign up 
    to the course of the Progmatic School. After a long period, they learnt the basics of frontend programming, or something more. At the and of the course, they had to
    create their frist project, as some kind of final exam. Their goal was to create an online page, were people could browse between events, in various theme. The time
    was shot, they worked a lot, but in the end, the project coming alive. Or at least they hoped, becouse when I wrote this we were only in the middle of the progress.
    But be positive, we will prevail. </div>
    </div>;

    <div className="about-image-right">
        <img className="image-right" src="https://cdn.mos.cms.futurecdn.net/sdSHp2akMYc4EoZAoRE77k-1200-80.jpg"></img>
    </div>
    </div>


      


};
export default AboutView;
