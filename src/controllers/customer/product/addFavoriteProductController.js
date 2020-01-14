import addFavoriteProductService from '~/services/customer/product/addFavoriteProductService'

import logger from '~/logger'

import httpCodes from '~/assets/httpCodes'
import { errorCodeResponse, errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        const { productID } = req.body
        const { customerID: customerPublicID } = req.params

        const isInserted = await addFavoriteProductService({ productID, customerPublicID })
        if (!isInserted) {
            return res
                .status(httpCodes.DUPLICATED)
                .json(errorResponse({ messageCode: 'DUPLICATED' }))
                .end()
        }
        logger.info(`User ${customerPublicID} added ${productID} to his favorite products.`)
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
