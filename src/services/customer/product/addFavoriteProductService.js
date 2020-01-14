import { customerAddFavorite } from '~/DTO/customer'
import retrieveProductInfoRequest from '~/requests/retrieveProductInfoRequest'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'
import httpCodes from '~/assets/httpCodes'

export default async ({ customerPublicID, productID }) => {
    try {
        const { data: product } = await retrieveProductInfoRequest(productID)
        return await customerAddFavorite({ customerPublicID, product })
    } catch (err) {
        logger.error(
            `Failed to add favorite to user ${customerPublicID} error: ${err.message || err}`,
        )
        if (((err.response && err.response.status)
            ? err.response.status
            : httpCodes.NOT_FOUND) === null || err.message === 'NOT_FOUND_TEST') {
            throw new Error('NOT_FOUND_PRODUCT')
        }
        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
