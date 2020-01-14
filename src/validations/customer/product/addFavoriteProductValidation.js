/* istanbul ignore file */
import Joi from '@hapi/joi'

export default Joi.object({
    productID: Joi.string().required(),
})
