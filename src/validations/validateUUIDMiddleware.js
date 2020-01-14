import { validateUUID, errorResponse } from '~/helpers'
import httpCodes from '~/assets/httpCodes'


export default ({ paramBody = false, paramName = 'customerID' } = {}) => ((req, res, next) => {
    const isValidUUID = paramBody
        ? validateUUID(req.body[paramName])
        : validateUUID(req.params[paramName])

    if (isValidUUID) return next()

    return res
        .status(httpCodes.UNPROCESSABLE_ENTITY)
        .json(errorResponse({ messageCode: 'UNPROCESSABLE_ENTITY' }))
        .end()
})
