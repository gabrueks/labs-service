import adminCreate from '~/DTO/admin/adminCreate'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'
import mongoErrors from '~/assets/mongoErrors'

export default async (consumerPayload) => {
    try {
        return await adminCreate(consumerPayload)
    } catch (err) {
        logger.error(`Failed create consumer ${err.message || err}`)
        if (err.code === mongoErrors.DUPLICATED || err.message === 'TEST_DUPLICATED') {
            throw new Error('DUPLICATED')
        }

        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
