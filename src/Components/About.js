import React, { Component } from 'react';
import LightSpeed from 'react-reveal/LightSpeed'

class About extends Component {
  render() {


    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "./../images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }
    console.log(profilepic)

    return (
       <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Ariel Profile Pic" />
         </div>
         <div className="nine columns main-col">
         <LightSpeed top>
            <h2>About Me</h2>
         </LightSpeed>
            <p>
               I'm Ariel, a Lighthouse Labs graduate currently working part-time as a mentor apprentice for Lighthouse Labs Web Development Bootcamp. 
               <br />
               During my bootcamp I gained the skills and training needed to help develop and maintain software apps, Websites and enhance their functionality. 
               <br />  
               I love problem solving and am highly motivated to increase my technical expertise in the many languages and frameworks I learned during bootcamp.
               <br />
               I have years of Experience in Sales, Hospitality, Customer service and as an Afro-Latino, I have taken part in multiple events to discuss intersectionality and belonging within the work place as well as help coordinate networking opportunities for my communities.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
            <LightSpeed top>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
						         {city}, {state}
                   </span><br />
                     <span><a href = "mailto:arielleon24@gmail.com">{email}</a></span>
					   </p>
            </LightSpeed>   
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
