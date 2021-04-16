import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Portfolio from './Components/Portfolio';

// const GlobalStyle = createGlobalStyle`
// body {
//   background-color: ${props.theme.mode === 'dark' ? '#111' : '#EEE'};
//   color: ${props.theme.mode === 'dark' ? '#111' : '#EEE'}
// }
// `

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <ThemeProvider theme={{ mode: 'dark' }}>
      <div className="App">
        <Header data={this.state?.resumeData?.main}/>
        <About data={this.state?.resumeData?.main}/>
        <Portfolio data={this.state?.resumeData?.portfolio}/>
        <Resume data={this.state?.resumeData?.resume}/>
        <Contact data={this.state?.resumeData?.main}/>
        <Footer data={this.state?.resumeData?.main}/>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
