import React from 'react';
import github from '../graphics/github.svg';

export default class Info extends React.Component {
    render () {
        return (
            <div id='info-container'>
                <a href='https://github.com/codebymatt/newton'><img src={github} /></a>
                <div id='text' >
                    Created lovingly by <a href='http://mattcraig.me' target='blank' >Matt Craig</a>
                </div>
            </div>
        );
    }
}
