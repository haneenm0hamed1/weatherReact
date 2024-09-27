
import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';


//https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
const apiKey ='83c3282c794b4d9820ff8d7bdadb2a96'

export default class App extends Component {
state={
  tempreature:'',
  city:'',
  country:'',
  humidity:'',
  description:'',
  error:''
}

  //props
getWeather=async(e)=>{
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;

 //prevent refrech
  e.preventDefault();
//api

 const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
const data = await api.json() 
console.log(data)
//after state
if(city && country){
  this.setState({
    tempreature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
  })
}else{
 this.setState({ tempreature:'',
  city:'',
  country:'',
  humidity:'',
  description:'',
  error:'Please Enter Data'})
}

}

  render() {
    return (
      <div className='wrapper'>
    <div className='form-container'>
    <Form getWeather={this.getWeather}/>
      <Weather   
      tempreature={this.state.tempreature}
  city={this.state.city}
  country={this.state.country}
  humidity={this.state.humidity}
  description={this.state.description}
  error={this.state.error}/>
    </div>
      </div>
    )
  }
}
