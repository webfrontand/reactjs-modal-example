import React, { Component } from 'react';

class Modal extends Component {
  render(){

    if(this.props.isOpen === false) return null;

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div>
          <div style={modalStyle}>
            {this.props.children}
          </div>
          <div style={backdropStyle} onClick={() => this.props.onClose()}></div> 
        </div>
    )
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool,
  onClose: React.PropTypes.func
}

export default Modal;
