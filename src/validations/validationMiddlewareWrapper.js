import httpCodes from '~/assets/httpCodes'

import { ERROR } from '~/helpers/constants'
import { errorResponse } from '~/helpers'

export default (validation) => (req, res, next) => {
    const { error } = validation.validate(req.body, { abortEarly: false })
    if (error) {
        return res
            .status(httpCodes.MISSING_PAYLOAD)
            .json(
                errorResponse({
                    messageCode: ERROR.MISSING_PAYLOAD,
                    params: error.details.map(
                        (missingPayload) => missingPayload.path[0],
                    ),
                }),
            )
            .end()
    }
    return next()
}
