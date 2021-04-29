import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = './../images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div class="titleDiv"><h6>{projects.title}</h6></div>
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
            </a>
          </div>
          <div className="github-link">  
            <a href={projects.github}><h5 className="github-link">Github repo</h5></a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects:</h1>
            <Slide right>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
            </Slide>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
