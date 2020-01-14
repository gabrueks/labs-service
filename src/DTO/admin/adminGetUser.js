/* istanbul ignore file */
import apiConsumerModel from '~/models/apiConsumerModel'

export default ({ consumerUsername, consumerPassword }) => (!consumerPassword
    ? apiConsumerModel.findOne({ consumerUsername }).exec()
    : apiConsumerModel.findOne({ consumerUsername, consumerPassword }))
