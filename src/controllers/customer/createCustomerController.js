import createCustomerService from '~/services/customer/createCustomerService'

import logger from '~/logger'

import httpCodes from '~/assets/httpCodes'
import { errorCodeResponse, errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        const { customerPublicID } = await createCustomerService(req.body)
        logger.info(`User ${customerPublicID} created.`)
        return res.status(httpCodes.CREATED).json({ customerPublicID }).end()
    } catch (err) {
        return res
            .status(errorCodeResponse(err.message))
            .json(errorResponse({ messageCode: err.message }))
            .end()
    }
}
