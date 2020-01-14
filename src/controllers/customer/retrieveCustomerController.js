import retrieveCustomerService from '~/services/customer/retrieveCustomerService'

import logger from '~/logger'
import httpCodes from '~/assets/httpCodes'
import { errorCodeResponse, errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        const dbCostumer = await retrieveCustomerService(req.params.customerID)
        logger.info(`User ${req.params.customerID} retrieved.`)
        return res
            .status(dbCostumer ? httpCodes.OK : httpCodes.NOT_FOUND)
            .json(dbCostumer || {})
            .end()
    } catch (err) {
        return res
            .status(errorCodeResponse(err.message))
            .json(errorResponse({ messageCode: err.message }))
            .end()
    }
}
