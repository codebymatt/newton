import React from 'react';

const Metric = ({image, name, cardClass}) => (
    <div className={cardClass}>
        <img src={image} />
        <p>{name}</p>
    </div>
)

export {Metric};
