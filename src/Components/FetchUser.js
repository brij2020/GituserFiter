import React, { Component } from 'react'

export default class FetchUser extends Component {
  render() {
      let userdata = '';
      if(this.props.user1 !== undefined) {

         userdata =
        <div>
            <img src={this.props.user1.avatar_url} alt=""/>
            <h2>{this.props.user1.login} </h2>
        </div>
        console.log(userdata)
    }
    return (
      <div className="er">
          ------------------------
          <div><h2>@{userdata}</h2></div>
        { console.log(this.props.user1,this.props.user2) }
        
      </div>
    )
  }
}
