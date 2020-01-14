import adminCreateToken from '~/DTO/admin/adminCreateToken'
import adminGetUser from '~/DTO/admin/adminGetUser'

import logger from '~/logger'
import { ERROR } from '~/helpers/constants'
import { validatePasswordJWT } from '~/helpers'

export default async ({ consumerUsername, consumerPassword }) => {
    try {
        const consumer = await adminGetUser({ consumerUsername })

        if (!consumer) return false

        const isValidPassword = await validatePasswordJWT({
            dbPassword: consumer.consumerPassword,
            consumerPassword,
        })

        if (isValidPassword) {
            return await adminCreateToken(consumerUsername)
        }

        return false
    } catch (err) {
        logger.error(
            `Failed login consumer ${err.message || err}`,
        )
        throw new Error(ERROR.UNEXPECTED_ERROR)
    }
}
