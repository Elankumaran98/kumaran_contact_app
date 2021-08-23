import React from "react";

const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    return(
      <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div className="header">{email}</div>
      </div>
      <i className='trash icon'></i>
    </div>
    );
}
export default ContactCard;