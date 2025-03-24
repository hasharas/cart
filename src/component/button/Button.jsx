import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, value, type, disable, buttonName }) => {
      return (
            <div>
                  <button
                        onClick={onClick}
                        className='p-2 bg-green-600 hover:bg-green-950 text-white rounded-md'
                        value={value}
                        type={type}
                        disabled={disable}
                  >
                        {buttonName}
                  </button>
            </div>
      );
}

Button.propTypes = {
      onClick: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      disable: PropTypes.bool.isRequired,
      buttonName: PropTypes.string.isRequired,
}

export default Button;
