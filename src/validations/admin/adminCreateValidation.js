/* istanbul ignore file */
import Joi from '@hapi/joi'

export default Joi.object({
    consumerName: Joi.string().required(),
    consumerUsername: Joi.string().required(),
    consumerPassword: Joi.string(),
})
