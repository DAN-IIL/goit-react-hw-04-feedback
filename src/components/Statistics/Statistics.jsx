import PropTypes from "prop-types"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return  <div>
                    <p>🤩 {good}</p>
                    <p>😐 {neutral}</p>
                    <p>🤬 {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage}%😉</p>
                </div>
}


    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }