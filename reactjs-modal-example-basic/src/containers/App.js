import React, { Component } from 'react';
import { Modal } from '../components';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false // modal open or close state
    }
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open Modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Modal title</h1>
          <p>hello</p>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    );
  }
}

export default App;
