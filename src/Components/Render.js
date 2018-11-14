import React, { Component } from 'react'

export default class Render extends Component {
  render() {
    let userdetail1 =
    <div className="userdetail">
            <p>  UserLogin:{this.props.user1.login}</p>
            <p>  User Name:{this.props.user1.name}</p>
            <p>  Company:{this.props.user1.company }</p>
            <p>  Location:{this.props.user1.location}</p>
            <p>  Public Gist:{this.props.user1.public_gists}</p>
            <p>  Public Repo:{this.props.user1.public_repos}</p>
          </div> ;
    let userdetail2 =
    <div>
        <p>  UserLogin:{this.props.user2.login}</p>
        <p>  User Name:{this.props.user2.name}</p>
        <p>  Company:{this.props.user2.company }</p>
        <p>  Location:{this.props.user2.location}</p>
        <p>  Public Gist:{this.props.user2.public_gists}</p>
        <p>  Public Repo:{this.props.user2.public_repos}</p>
    </div>       
    if(this.props.user1 === ''){
      userdetail1 = ''
    }
    if(this.props.user2 ===''){
      userdetail2 = ''
    }
    return (
      <div className="container detail">
        <div className="left-div left-text"> 
          {userdetail1}
        </div>
        <div className="right-div right-text">
          {userdetail2}
        </div>
      </div>
    )
  }
}
