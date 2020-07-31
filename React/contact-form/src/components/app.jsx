import React from 'react'
import { ContactForm } from './contact-form'
import { Message } from './message'
import { UserPanel } from './user-panel'


export class App extends React.Component{

    CONTACT_FORM_DEFAULTS = {
        name: '',
        email: '',
        option:'A',
        select: 1,
        message:'',
        terms: false
    }
    constructor(props){
        super(props)
        this.state = {
            contact: {...this.CONTACT_FORM_DEFAULTS},
            sent: false,
            currentUser: null,
            header: false,
            messageText: ''
        }
    }

    contactChanged = (name,value) => {
        console.log("value pass back:",name,value)
        console.log("before:",this.state.contact)
        this.setState(prevState=>({
            contact: {
                ...prevState.contact,
                [name]: value
            }
        }),()=>{
            console.log("after:",this.state.contact)
        })
    }

    sendContact = (contact) =>{
        console.log(contact)
        // For now just mark it as `sent`
        this.setState({
            sent:true,
            contact: contact,
            header: true,
            messageText: "We will reply to your message in next 24h. Have a nice day! ;-)"
        })
        console.log(this.state.sent)
    }

    logIn = () => {
        this.setState({
            currentUser:{
                name:'Test User',
                email:'user@example.com'
            },
        },()=>{
            this.setState(prevState=>({
                contact: {
                    ...prevState.contact,
                    name: this.state.currentUser.name,
                    email: this.state.currentUser.email,
                }
            }),()=>{
                console.log("after:",this.state.contact)
            })
        })
    }


    render(){
        const currentUser = this.state.currentUser
        const formSent = this.state.sent
        console.log(formSent)
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pull-right">
                        {currentUser?<UserPanel user={currentUser} />:
                        <button class="btn btn-default" onClick={this.logIn}>
                            <i className="glyphicon glyphicon-user"></i> Log In
                        </button>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Contact us</h2>
                    <p>Please fill in form on the right to get fast reply</p>
                    <img style={{width:'100%'}} src="http://via.placeholder.com/300x200"/>
                </div>
                <div className="col-md-8">
                    {
                        formSent ?
                        <Message header={this.state.header} text={this.state.messageText} data={this.state.contact} /> :
                        <ContactForm data={this.state.contact} onChange={this.contactChanged} onSubmit={this.sendContact}/> 
                    }
                </div>
            </div>
        </div>
    }
}
