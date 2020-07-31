import React from 'react';
import { object,func } from 'prop-types';

export class ContactForm extends React.Component{

    static defaultProps = {
        data:{
            name:'',
            email:'',
            option:'',
            select: '',
            message:'',
            terms:false
        }
    }

    static propTypes = {
        onChange: func.isRequired,
        onSubmit: func.isRequired,
        data: object.isRequired
    }

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fieldChange = this.fieldChange.bind(this);
    }

    /**
     * When form is submitted forward contact data to parent
     * @param {event} DOMEvent
     */
    handleSubmit(event){
        event.preventDefault();
        console.log(this.props.data)
        this.props.onSubmit(this.props.data)
    }

    fieldChange(event){
        let target = event.target;
        let name = event.target.name;
        let value = target.type ==='checkbox' ? target.checked : target.value;
        this.props.onChange(name,value)
    }

    options = [
        {id:1, label:'I have question about my membership'},
        {id:2, label:'I have technical question'},
        {id:3, label:'I would like to change membership'},
        {id:4, label:'Other question'},
    ]

    render(){
        let data = this.props.data;

        const optionComponent = this.options.map(option => <option key={option.id} value={option.id}>{option.label}</option>)

        return (
            <form onSubmit={this.handleSubmit}>

            <h3>Contact Form</h3>

            <div class="form-group">
                <label className="form-label" >Your Name:</label>
                <input name="name" className="form-control" onChange={this.fieldChange} value={data.name} />
            </div>

            <div class="form-group">
                <label className="form-label" >Your Best Email:</label>
                <input name="email" className="form-control" onChange={this.fieldChange} value={data.email} />
            </div>

            <label className="form-label">Select your membership option:</label>
            <div class="form-group row">
                <label className="form-label col-xs-4">
                <input type="radio" name="option" value="A" checked={data.option === 'A'} onChange={this.fieldChange}/> Option A</label>
                <label className="form-label col-xs-4">
                <input type="radio" name="option" value="B" checked={data.option === 'B'} onChange={this.fieldChange}/> Option B</label>
                <label className="form-label col-xs-4">
                <input type="radio" name="option" value="C" checked={data.option === 'C'} onChange={this.fieldChange}/> Option C</label>
            </div>

            <hr/>

            <div class="form-group">
                <label className="form-label">What can we help you with:</label>
                <select className="form-control" name="select" value={data.select} onChange={this.fieldChange}>
                    {/* <option value="1">I have question about my membership</option> */}
                    {optionComponent}
                </select>
            </div>

            <div class="form-group">
                <label className="form-label">Message:</label>
                <textarea name="message" rows="10" placeholder="Please type your question here" value={data.message} className="form-control" onChange={this.fieldChange}/>
            </div>

            <div class="form-group">
                <label className="form-label"> 
                <input type="checkbox" name="terms" checked={data.terms} onChange={this.fieldChange} /> &nbsp;
                I agree to terms and conditions </label>
            </div>

                <input type="submit" value="Send" className="contactform-submit" />
            </form>
        )
    }
}
