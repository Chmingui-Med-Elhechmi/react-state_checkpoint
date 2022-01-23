import React, { Component } from 'react';
import profileImg from './profilePhoto.jpg'
import imgReact from './imgReact.jpg'
export default class App extends Component {

  constructor(props){
    super(props)

    this.state ={
          shows : false
    }
    this.Person = {
      fullName: 'Mohamed Elhechmi Chmingui',
      bio : 'Beginner Developer',
      imgSrc : <img className='image' src={profileImg} alt='profileImg' />,
      profession : 'Student'
    }
  }

  shows = () =>{
    this.setState({shows:!this.state.shows})
  }
  
  componentDidMount() {
    setInterval(()=> this.setState({shows:!this.state.shows}, 1000))
  }
  

  render() {
    return <div>
      {this.state.shows ? <div className='person'> {this.Person.imgSrc}
                                                   <h4>Full Name : {this.Person.fullName}</h4>  
                                                   <h4>Profession : {this.Person.profession}</h4>
                                                   <h4>Bio : {this.Person.bio}</h4>
                            </div> : <img className='images' src={imgReact} alt='react'/>}<br/>
      <button className='btn' onClick={this.shows}>show</button>
    </div>;
  }
}
