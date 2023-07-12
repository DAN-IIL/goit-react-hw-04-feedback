import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import { ButtonFeedbackOptions, DivFeedbackOptions } from './FeedbackOptions.styled'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <DivFeedbackOptions >
        {options.map(option => {
            return <ButtonFeedbackOptions
                    key={nanoid()}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>
                    {option}
                    </ButtonFeedbackOptions>
        })}
        </DivFeedbackOptions>
    )
}

FeedbackOptions.protoTypes = {
    key: PropTypes.string.isRequired,
    options: PropTypes.arrayOf({
        option: PropTypes.string.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}