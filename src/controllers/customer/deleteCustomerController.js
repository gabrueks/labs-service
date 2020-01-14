import deleteCustomerService from '~/services/customer/deleteCustomerService'

import logger from '~/logger'

import httpCodes from '~/assets/httpCodes'
import { errorCodeResponse, errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        await deleteCustomerService(req.params.customerID)
        logger.info(`User ${req.params.customerID} deleted.`)
        return res
            .status(httpCodes.NO_CONTENT)
            .json({})
            .end()
    } catch (err) {
        return res
            .status(errorCodeResponse(err.message))
            .json(errorResponse({ messageCode: err.message }))
            .end()
    }
}
