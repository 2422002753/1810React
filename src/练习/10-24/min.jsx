import React from 'react';

const nav = props => {
  return (
    <div className="boby" style={{ background: props.teme.background }}>
      <h1 style={{ color: props.teme.color }}>This is main title</h1>
    </div>
  );
};

export default nav;
