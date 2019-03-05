import React, { Component } from 'react'
import '../animate.css';
import '../form.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Header extends Component {

  render() {
    
    return (
      <ScrollableAnchor id={'home-section'} scrollDuration={2} keepLastAnchorHash={false}>
        <div className="header">
          <nav className="header__navbar">
              <a href="#home-section" ><p>Home</p></a>
              <a href="#about-section" ><p>About</p></a>
              <a href="#form-section" ><p>Form</p></a>
              <a href="#tag-section" ><p>Tags</p></a>
              <a href="#comments-section" ><p>Comments</p></a>
          </nav>
         
            <div className="header__img-wrapper os-animation animated slideInUp" data-os-animation="slideInUp" data-os-animation-delay=".5s" >
                <img src="/images/people.png" alt="people with thoughts"/>
            </div>
          <div className="header__img-wrapper2 os-animation animated slideInUp" data-os-animation="slideInUp" data-os-animation-delay=".8s">
              <img  src="/images/comment.png" alt="comment"  />
          </div>
          <div className="header__img-wrapper3 os-animation animated slideInUp" data-os-animation="slideInUp" data-os-animation-delay="1s">
              <img  src="/images/cloud.png"  alt="cloud"/>
          </div>
          <ScrollAnimation className="header__box " animateIn="fadeInUp" duration={1} animateOnce= {true}> 
                <h1>YOU CAN TELL ME</h1>
                <h3>
                  A supportive, yet anonymous community to share your thoughts and feelings. You aren't alone.
                </h3>
              <a href="#form-section">Share Your Thoughts</a>        
          </ScrollAnimation>
        </div>
      </ScrollableAnchor>  
    )
  }
}
