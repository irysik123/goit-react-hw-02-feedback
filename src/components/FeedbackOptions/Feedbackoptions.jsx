import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <List className="optionsList">
        {options.map((option) => (
            <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
        ))}
    </List>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ),
      onLeaveFeedback: PropTypes.func.isRequired,
}