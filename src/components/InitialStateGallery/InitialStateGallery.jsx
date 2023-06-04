import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './InitialStateGallery.styled';

export const InitialStateGallery = ({ text }) => {
  return <Wrapper></Wrapper>;
};

InitialStateGallery.propTypes = {
  text: PropTypes.string.isRequired,
};
