import { customerRetrieve } from '~/DTO/customer'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'

export default async (customerPublicID) => {
    try {
        return await customerRetrieve(customerPublicID)
    } catch (err) {
        logger.error(
            `Failed to retrieve customer on database ${err.message || err}`,
        )
        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
