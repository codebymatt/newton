import React from 'react';

/*export default class Metric extends React.Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.image} />
                <p>{this.props.metric}</p>
            </div>
        );
    }
}*/

const Metric = ({image, metric}) => (
    <div className='card'>
        <img src={image} />
        <p>{metric}</p>
    </div>
)

export {Metric};
