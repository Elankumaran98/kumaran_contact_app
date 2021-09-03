import React from "react";
import { Link } from "react-router-dom";
import theme from "../images/theme.jpg";

const ContactCard = (props) => {
  const { id, FirstName, LastName, Email, Phone } = props.contact;
  return (
    <div className="item text-center bg-info">
      <img className="ui avatar image w-25 h-25" src={theme} alt="theme" />
      <div className="content">
        <Link
          to={{
            pathname: "/contact/${id}",
            state: {
              contact: props.contact,
            },
          }}
        >
          <div className="header">First Name :{FirstName}</div>
          <div className="header">Last Name :{LastName}</div>
          <div className="header">Email :{Email}</div>
          <div className="header">Phone :{Phone}</div>
        </Link>
        <i
          className="trash icon"
          onClick={() => props.clickHandler(id)}
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
  );
};
export default ContactCard;
