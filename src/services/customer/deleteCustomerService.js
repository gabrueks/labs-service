import { customerDelete } from '~/DTO/customer'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'

export default async (customerPublicID) => {
    try {
        return await customerDelete(customerPublicID)
    } catch (err) {
        logger.error(
            `Failed to delete customer on database ${err.message || err}`,
        )
        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
