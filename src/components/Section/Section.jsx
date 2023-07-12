import PropTypes from "prop-types"
import { SectionsTitle, SectionsStatistic } from "./Section.styled"

export const Section = ({title, children}) => {
    return (
        <SectionsStatistic>
            {title && <SectionsTitle>{title}</SectionsTitle>}
            {children}
        </SectionsStatistic>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
