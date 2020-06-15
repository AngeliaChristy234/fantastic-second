import React from 'react';

const TestimonyCard = ({productName, testimony, personName, image}) => (
  <div>
    <img
      src={image}
      alt="" />
    <span className="text--small">{productName}</span>
    <h4 className="text--medium-bold">"{testimony}"</h4>
    <span className="text--medium">~ {personName}</span>
  </div>
)

export default TestimonyCard;