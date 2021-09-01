import React from "react";
import { Link } from "react-router-dom";
import theme from "../images/theme.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item text-center">
      <img className="ui avatar image" src={theme} alt="theme" />
      <div className="content">
        <Link
          to={{
            pathname: "/contact/${id}",
            state: {
              contact: props.contact,
            },
          }}
        >
          <div className="header"> {name}</div>
          <div className="header">{email}</div>
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
