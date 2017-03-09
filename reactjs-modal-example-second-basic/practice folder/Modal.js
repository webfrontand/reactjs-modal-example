import React, { Component } from 'react';

class Modal extends Component {

  constructor(props){
    super(props);

    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){

    const display = {
      display: 'block'
    };

    const none = {
      display: 'none'
    };

    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : none}>
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>Hello world</p>
        </div>
        <div className="modal-footer">
          <a className="btn" onClick={this.toggle}>Agree</a>
        </div>
      </div>
    )
    return (
      <div className="container">
        <a className="btn" onClick={this.toggle}>Open Modal!</a>
        {modal}
      </div>
    )
  }
}

export default Modal;
