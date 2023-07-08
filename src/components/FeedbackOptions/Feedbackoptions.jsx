import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ul className="optionsList">
        {options.map((option) => (
            <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
    </ul>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ),
      onLeaveFeedback: PropTypes.func.isRequired,
}