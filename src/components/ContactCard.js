import React from "react";
import theme from '../images/theme.jpg';

const ContactCard=(props)=>{
    // eslint-disable-next-line no-unused-vars
    const {id,name,email}=props.contact;
    return(
      <div className="item">
        <img className='ui avatar image' src={theme} alt='theme'/>
      <div className="content">
        <div className="header">{name}</div>
        <div className="header">{email}</div>
        <i className='trash icon'
        onClick={()=>props.clickHandler(id)}
         style={{color:'red',marginTop:'7px'}}></i>
      </div>
    </div>
    );
}
export default ContactCard;