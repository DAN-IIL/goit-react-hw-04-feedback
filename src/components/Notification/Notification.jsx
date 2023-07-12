import PropTypes from 'prop-types'
import { NotificationP } from './Notification.styled'

export const Notification = ({message}) => {
    return <NotificationP>🤷‍♀️{message}🤷‍♂️</NotificationP>
}

Notification.protoTypes = {
    message: PropTypes.string.isRequired,
}