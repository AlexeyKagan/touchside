import React from 'react';
import PropTypes from 'prop-types';

import StateProvider from '../state-provider/StateProvider';


const ImageWithLoading = ({ className, whileLoadingClass, ...restProps }) => (
  <StateProvider>
    {
      ({ state, setState }) => (
        <div className={state.isLoading ? whileLoadingClass : ''}>
          <img
            alt=""
            {...restProps}
            className={`${className}`}
            onLoad={() => setState({ isLoading: true })}
          />
        </div>
      )
    }
  </StateProvider>
);

ImageWithLoading.propTypes = {
  className: PropTypes.string,
  whileLoadingClass: PropTypes.string,
};

ImageWithLoading.defaultProps = {
  className: '',
  whileLoadingClass: '',
};

export default ImageWithLoading;
