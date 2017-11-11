import React, { Component } from 'react';

/*
const Metric = ({image, name, cardClass, handler}) => (
    <div className={cardClass}>
        <img src={image} />
        <p>{name}</p>
    </div>
)

export {Metric};
*/

export default class Metric extends Component {
    constructor(props) {
        super(props);
        //this.metricName = this.props.id
    }

    render() {
        return (
            <div className={this.props.cardClass}
                 onClick={
                     () => this.props.handler(this.props.id)
                 }>
                <img src={this.props.image} />
                <p>{this.props.name}</p>
            </div>
        );
    }
}
