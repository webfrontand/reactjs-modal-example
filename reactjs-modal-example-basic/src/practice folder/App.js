import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false
    }
  }

  openModal(){
    this.setState({
      isModalOpen: true
    });
    console.log(this.state.isModalOpen);
  }

  closeModal(){
    this.setState({
      isModalOpen: false
    });
    console.log(this.state.isModalOpen);
  }

  render(){
    return (
      <div>
        <button onClick={() => this.openModal()}>Open Modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Title</h1>
          <p>hello world</p>
          <p>
            <button onClick={() => this.closeModal()}>Close</button>
          </p>
        </Modal>
      </div>
    )
  }
}

export default App;
