import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'visible', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;