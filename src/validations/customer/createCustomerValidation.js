/* istanbul ignore file */
import Joi from '@hapi/joi'

export default Joi.object({
    customerName: Joi.string().required(),
    customerEmail: Joi.string().email().required(),
})
