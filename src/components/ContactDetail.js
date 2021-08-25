import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import theme from '../images/theme.jpg';

const ContactDetails=(props)=>{
    const {name,email}=props.location.state.contact;
    return(
      <div className="main">
          <div className="ui card centered">
              <div className="image">
                  <img src={theme} alt="theme"/>
              </div>
              <div className="content">
                  <div className="header">{name}</div>
                  <div className="descroption">{email}</div>
              </div>
          </div>
          <div className="center-div">
              <Link to="/">
              <Button className="ui button blue center">
                  Back To ContactList
              </Button>
              </Link>
          </div>
      </div>
    );
}
export default ContactDetails;