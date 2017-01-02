import React from 'react';


function Wrong(props) {
  return <li>{props.value}</li>
}

Wrong.propTypes = {
  value: React.PropTypes.number.isRequired
};

export default Wrong;
