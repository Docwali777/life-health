import React, { Component } from 'react'

import contactPic from '../../../images/contactPic.jpg'

class Contact extends Component{
constructor(props){
  super(props)
  this.state = {
    name: '',
    telephoneNumber: '',
    email: ''
  }
}

onChange = (e) =>{
  this.setState({[e.target.name]: e.target.value})
  console.log(this.state.name);
}

submitForm = () =>{
  console.log(this.state);
}

    render(){
      return(
        <div className='container'>
          <h1 className='text-center'>Contact</h1>
          <hr />

          <div className='container' >
          <img src={contactPic} style={{opacity: 0.7, maxWidth: '100%', height: 'auto', position: 'absolute', zIndex: 99}}  />

            <form onSubmit={this.submitForm} style={{width: 400, height: 'auto', position: 'absolute', zIndex: 100}}>
              <h1 >Hello </h1>
              <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label>Telephone Number</label>
                <input
                    className='form-control'
                    type='tel'
                    name='telephoneNumber'
                    placeholder='Telephone Number'
                    onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label>Email</label>
                <input
                    className='form-control'
                    type='email'
                    name='email'
                    placeholder='Email@www.com'
                    onChange={this.onChange}
                />
              </div>

              <button className='btn btn-success'>Submit</button>
            </form>
          </div>
        </div>
      )
    }
}

export default Contact
