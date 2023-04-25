import React from 'react';
import Module from '../components/Module';

const HomePage = () => {
  const genData = () => {
    let acc = [];
    for (let i = 0; i < 20; i++) {
      acc.push(<Module number={i} id={i} />);
    }
    return acc;
  };

  return (
    <div>
      {genData().map((item) => (
        <>{item}</>
      ))}
    </div>
  );
};

export default HomePage;
