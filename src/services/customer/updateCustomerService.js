import { customerUpdate } from '~/DTO/customer'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'

export default async (customerPublicID, customerPayload) => {
    try {
        return await customerUpdate({ customerPayload, customerPublicID })
    } catch (err) {
        logger.error(
            `Failed to update customer on database ${err.message || err}`,
        )
        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
