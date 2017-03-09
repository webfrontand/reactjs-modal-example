import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this);
  }


  toggle(event){
    this.setState({
      toggle: !this.state.toggle
    });
  }
  render() {
    const display = {
      display: 'block'
    };

    const hide = {
      display: 'none'
    };
    
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a className="btn" onClick={this.toggle}>Agree</a>
        </div>
      </div>
    )

    return (
      <div className="container">
        <a className="btn" onClick={this.toggle}>Modal</a>
        {modal}
      </div>
    );
  }
}

export default App;
