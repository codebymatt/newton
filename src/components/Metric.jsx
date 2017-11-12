import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeClass } from '../actions/Metrics.js';

/*
const Metric = ({image, name, cardClass, handler}) => (
    <div className={cardClass}>
        <img src={image} />
        <p>{name}</p>
    </div>
)

export {Metric};
*/

class Metric extends Component {
    constructor(props) {
        super(props);
        //this.metricName = this.props.id
    }

    render() {
        return (
            <div className={this.props.cardClass}
                 id={this.props.id}
                 onClick={
                     () => {this.props.handler(this.props.id);
                     this.props.changeClass(this.props.appSelected, this.props.id);
                     this.props.changeX(0);
                     this.props.changeY(0);
                     }
                 }>
                <img src={this.props.image} />
                <p>{this.props.name}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        metrics: state.metrics,
        //selected: state.selected
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeClass: (older, newer) => dispatch(changeClass(older, newer))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Metric);
