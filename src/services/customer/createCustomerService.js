import { customerSave } from '~/DTO/customer'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'
import mongoErrors from '~/assets/mongoErrors'

export default async (customerPayload) => {
    try {
        return await customerSave(customerPayload)
    } catch (err) {
        logger.error(`Failed to save customer on database ${err.message || err}`)
        if (err.code === mongoErrors.DUPLICATED || err.message === 'TEST_DUPLICATED') {
            throw new Error('DUPLICATED')
        }
        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
