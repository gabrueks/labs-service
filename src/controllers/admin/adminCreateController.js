import adminCreateService from '~/services/admin/adminCreateService'

import logger from '~/logger'

import httpCodes from '~/assets/httpCodes'
import { errorResponse } from '~/helpers'

export default async (req, res) => {
    try {
        const token = await adminCreateService(req.body)

        logger.info(`User ${req.body.consumerUsername} created.`)

        return res
            .status(token ? httpCodes.CREATED : httpCodes.UNEXPECTED_ERROR)
            .json(
                token
                    ? {}
                    : errorResponse({ messageCode: 'UNEXPECTED_ERROR' }),
            )
            .end()
    } catch (err) {
        return res
            .status(httpCodes.UNEXPECTED_ERROR)
            .json(errorResponse({ messageCode: 'UNEXPECTED_ERROR' }))
            .end()
    }
}
