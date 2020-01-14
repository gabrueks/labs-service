/* istanbul ignore file */
import apiConsumerModel from '~/models/apiConsumerModel'

export default (consumerModel) => apiConsumerModel(consumerModel).save()
