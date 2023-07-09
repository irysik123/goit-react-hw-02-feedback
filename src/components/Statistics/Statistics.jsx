import React from 'react';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        {!!positivePercentage?
        <List>
            <ListItem>
                Good: {good}
            </ListItem>
            <ListItem>
                Neutral: {neutral}
            </ListItem>
            <ListItem>
                Bad: {bad}
            </ListItem>
            <ListItem>
                Total: {total}
            </ListItem>
            <ListItem>
                Positive percentage: {positivePercentage}%
            </ListItem>
        </List> : <Notification message="There is no feedback"/>}
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