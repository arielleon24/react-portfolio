import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed'

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
         <LightSpeed top><h1><span>Education</span></h1></LightSpeed>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
            <Fade bottom>
               <div className="twelve columns">
                 {education}
               </div>
            </Fade>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
         <LightSpeed top><h1><span>Experiences</span></h1></LightSpeed>
         </div>
         <Fade bottom>
         <div className="nine columns main-col">
         {work}
          {/* As an apprentice mentor, I assist and guide students of Lighthouse Labs Web Development Bootcamp with their code and help in increasing understanding of concepts taught during the day's lecture.
          <br />
          <br />
          My tasks consist in helping the students understand how to think like developers, how to debug their own code and how to properly divide tasks in small concise steps to write readable, modular code. 
          <br />
          <br />
          This role allows me to reinforce the many skills I learned during bootcamp while reviewing and refactoring previous tasks and further developing my soft skills. */}
        </div>
        </Fade>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
         <LightSpeed top><h1><span>Skills</span></h1></LightSpeed>
         </div>

         <div className="nine columns main-col">
         
            <p>
              {skillmessage}
            </p>
          
				<div className="bars">
        <Fade bottom>
				   <ul className="skills">
					  {skills}
					</ul>
        </Fade>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
