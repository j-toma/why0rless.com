import React from 'react';

function Text(props) {

  return (
    <p>{props.text}</p>
  );

}

Text.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Text;
