import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form'>
                    <div className='field'>
                        <labal>Name</labal>
                        <input type='text' name='Name' placeholder='Name' /> 
                    </div>
                    <div className='field'>
                        <labal>Name</labal>
                        <input type='text' name='Email' placeholder='Email' /> 
                    </div>
                    <button className='ui button'>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;