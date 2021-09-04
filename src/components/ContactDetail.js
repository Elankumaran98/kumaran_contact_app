import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import theme from '../images/theme.jpg';

const ContactDetails=(props)=>{
    const { FirstName, LastName, Email, Phone}=props.location.state.contact;
    return(
      <div className="container bg-info ">
          <div className="card centered">
              <div className="image">
                  <img src={theme} alt="theme"/>
              </div>
              <div className="content">
                  <div className="header ">{FirstName}</div>
                  <div className="header ">{LastName}</div>
                  <div className="header ">{Email}</div>
                  <div className="header">{Phone}</div>
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