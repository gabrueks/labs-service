import { decode } from 'jsonwebtoken'
import adminGetUserByToken from '~/DTO/admin/adminGetUserByToken'
import adminGetUser from '~/DTO/admin/adminGetUser'

import httpCodes from '~/assets/httpCodes'

const notAuthorized = (res) => res
    .status(httpCodes.NOT_AUTHORIZED)
    .json({})
    .end()

export default async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return notAuthorized(res)

    const consumer = await adminGetUserByToken({ sessionToken: authorization.split(' ')[1] })
    if (!consumer) {
        return notAuthorized(res)
    }

    const decodedSessionToken = decode(consumer.sessionToken)
    const [consumerUsername, consumerPassword] = decodedSessionToken.split(':')

    const isValidUser = await adminGetUser({ consumerPassword, consumerUsername })

    if (!isValidUser) {
        return notAuthorized(res)
    }

    return next()
}
