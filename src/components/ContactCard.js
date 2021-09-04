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
          <div className="h1 pb-4 pt-4">First Name :{FirstName}</div>
          <div className="h1 pb-4">Last Name :{LastName}</div>
          <div className="h1 pb-4">Email :{Email}</div>
          <div className="h1 pb-4">Phone :{Phone}</div>
        </Link>
        <i
          className="trash icon py-3"
          onClick={() => props.clickHandler(id)}
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
  );
};
export default ContactCard;
