import React from 'react';

export class Message extends React.Component{
// export const Message = (props, header, text) => {
    
    constructor(props){
        super(props)
    }

    render(){

        let data = this.props.data;
        let header = this.props.header;
        let text = this.props.text || "We will reply to your message in next 24h. Have a nice day!";

        return(
            <div className="text-center">
                {header && <h3 className="message-header">Thank You</h3>}
                <div className="message-body"> 
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Membership option: {data.option}</p>
                    <p>What can we help you with: {data.select}</p>
                    <p>Message: {data.message}</p>
                    <p>Agree Term: {data.terms?"True":"False"}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
