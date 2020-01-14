/* istanbul ignore file */
import apiConsumerModel from '~/models/apiConsumerModel'

export default ({ sessionToken }) => apiConsumerModel.findOne({ sessionToken }).exec()
