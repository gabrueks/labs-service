import adminLoginService from '~/services/admin/adminLoginService'

import logger from '~/logger'

import httpCodes from '~/assets/httpCodes'
import { errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        const { username: consumerUsername, password: consumerPassword } = req.body
        const token = await adminLoginService({ consumerPassword, consumerUsername })
        logger.info(`User ${consumerUsername} logged.`)

        return res
            .status(token ? httpCodes.OK : httpCodes.NOT_AUTHORIZED)
            .json(token ? { token } : errorResponse({ messageCode: 'NOT_AUTHORIZED' }))
            .end()
    } catch (err) {
        return res
            .status(httpCodes.NOT_AUTHORIZED)
            .json(errorResponse({ messageCode: 'NOT_AUTHORIZED' }))
            .end()
    }
}
