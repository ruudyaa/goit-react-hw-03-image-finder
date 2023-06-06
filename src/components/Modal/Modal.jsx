import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  ModalBackdrop,
  ModalContent,
  ModalDescr,
  ModalPicture,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <ModalPicture src={largeImageURL} alt={tags} />
          <ModalDescr>{tags}</ModalDescr>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
