import React from 'react';
import './index.css'; 


function Step(){ ({ active }) => {
    return (
      <div className={`step ${active ? 'active' : ''}`}></div>
    );
  };
}

export default Step