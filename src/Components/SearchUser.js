import React, { Component } from 'react'
import '../Search.css';
import PropTypes from 'prop-types';
import Render from './Render';

export default  class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick  = this.handleClick.bind(this); 
        this.handlefight  = this.handlefight.bind(this);
    }
    handleSubmit (ev) {
        this.props.subm(ev.target);
    }
    handleClick(eve) {
        this.props.reset(eve);
    }
    handlefight() {
        document.getElementsByClassName('detail')[0].style.display= 'block';
    }
    render() {
        let userdata  = '';
        let userdata2 = '';
        let fit       = ''; 
        let us1=
        <div className="userone">
            <span>First User:</span>
            <form action="#" onSubmit={this.handleSubmit}>
                <input type="text" className="w3-input w3-border w3-round-large one" />
                <span><button type="submit"  className="button button1">Submit</button></span>
            </form>
        </div>;
        let us2 = 
        <div className="usertwo"> 
            <span>Second User:</span>
            <form action="#" onSubmit={this.handleSubmit}>
                <input className="w3-input w3-border w3-round-large two" type="text" />
                <span><button type="submit" className="button button1">Submit</button></span>
            </form>
        </div>;
        if(this.props.user1 !== '') {
            userdata =
                <div className="use_one">
                    <img src={this.props.user1.avatar_url} alt="" height="250" width="250"/>
                    <h2>@{this.props.user1.login} </h2>
                    <button onClick={this.handleClick } className="red one">Reset </button>
                </div>
        }
        if(this.props.user2 !== '') {
            userdata2 =
                <div className="use_two">
                    <img src={this.props.user2.avatar_url} alt="" height="250" width="250"/>
                    <h2>@{this.props.user2.login} </h2>
                    <button onClick={this.handleClick } className="red two">Reset </button>
                </div>
        }
        if(this.props.user1 !=='' && this.props.user2!==''){
            
            fit = <button className = "button fit" onClick={this.handlefight}>Let's Fight</button>    
        }
    return (
      <div>
        <div className="container">
            <div className="left-div left-text">
                {us1}
                {userdata}
            </div>
            <div className="right-div right-text">
                {us2}   
                {userdata2}
            </div>
            <div>
                {fit}
            </div>
            <Render 
            user1 = { this.props.user1 }
            user2 = { this.props.user2 }
            />
        </div>
       
      </div>
    )
  }
}
SearchUser.propTypes = {
    subm: PropTypes.func,
}