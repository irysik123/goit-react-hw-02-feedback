import React, { Component } from 'react';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        {!!positivePercentage?
        <ul>
            <li>
                Good: {good}
            </li>
            <li>
                Neutral: {neutral}
            </li>
            <li>
                Bad: {bad}
            </li>
            <li>
                Total: {total}
            </li>
            <li>
                Positive percentage: {positivePercentage}%
            </li>
        </ul> : <Notification message="There is no feedback"/>}
    </div>
)

export default Statistics;

/* !! - переведення до примітиву */

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}