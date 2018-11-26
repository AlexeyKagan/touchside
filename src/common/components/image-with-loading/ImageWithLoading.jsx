import React from 'react';
import PropTypes from 'prop-types';

import StateProvider from '../state-provider/StateProvider';


const ImageWithLoading = ({ className, whileLoadingClass, ...restProps }) => (
  <StateProvider>
    {
      ({ state, setState }) => (
        <div className={whileLoadingClass}>
          <img
            alt=""
            {...restProps}
            className={`${className} ${''}`}
            onLoad={() => setState({ isLoaded: true })}
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

export default ImageWithLoading;
