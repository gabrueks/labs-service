import updateCustomerService from '~/services/customer/updateCustomerService'

import logger from '~/logger'
import httpCodes from '~/assets/httpCodes'
import { errorCodeResponse, errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        await updateCustomerService(req.params.customerID, req.body)
        logger.info(`User ${req.params.customerID} updated.`)
        return res.status(httpCodes.NO_CONTENT).json({}).end()
    } catch (err) {
        return res
            .status(errorCodeResponse(err.message))
            .json(errorResponse({ messageCode: err.message }))
            .end()
    }
}
