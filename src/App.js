import React, { Component } from 'react';
import './App.css';
import Search from './Components/SearchUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user1:'',
      user2:'',
    }
    this.getuser = this.getuser.bind(this);
    this.handlereset = this.handlereset.bind(this);
  }
  getuser (ev) {
    let uri='';
    if(ev[0].className.includes('one')){
      uri =`https://api.github.com/users/${ev[0].value}`;
      fetch(uri)
      .then((res)=>{ return res.json()})
      .then((data)=>{this.setState({user1:data},callback)})
      .catch((er)=>{console.log(er.message)})
      function callback() {
        document.getElementsByClassName('userone')[0].style.display = 'none';
        document.getElementsByClassName('use_one')[0].style.display ='block'

      }
    }
    if(ev[0].className.includes('two')){
      uri =`https://api.github.com/users/${ev[0].value}`;
      fetch(uri)
      .then((res)=>{ return res.json()})
      .then((data)=>{this.setState({user2:data},callback)})
      .catch((er)=>{console.log(er.message)})
      function callback() {
        document.getElementsByClassName('usertwo')[0].style.display = 'none'
        document.getElementsByClassName('use_two')[0].style.display ='block'

      }
    }
  }
  handlereset(ev){
    if(ev.target.className.includes('one')){
      this.setState({user1:''},callback);
      function callback(){
        document.getElementsByClassName('userone')[0].style.display = 'block';
      } 
    }
    if(ev.target.className.includes('two')) {
      this.setState({user2:''},callback);
      function callback() {
        document.getElementsByClassName('usertwo')[0].style.display = 'block';

      }
    }
  }
  render() {
    return (
      <div className="App">
        <Search subm={this.getuser }
        user1={this.state.user1} 
        user2={this.state.user2 }
        reset={this.handlereset }
        />
       
      </div>
    );
  }
}

export default App;
