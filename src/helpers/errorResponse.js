import errors from '../assets/errors'

export default ({ messageCode, params = {} }) => ({
    code: messageCode,
    message: errors[messageCode]
        ? errors[messageCode](params)
        : 'Unexpected internal error.',
})
