/* istanbul ignore file */
import { sign } from 'jsonwebtoken'

import apiConsumerModel from '~/models/apiConsumerModel'

export default async (consumerUsername) => {
    try {
        const consumer = await apiConsumerModel.findOne({ consumerUsername })
        consumer.sessionToken = sign(
            `${consumer.consumerUsername}:${consumer.consumerPassword}:${new Date().getTime()}`,
            process.env.JWT_SECRET,
        )
        await consumer.save()
        return consumer.sessionToken
    } catch (err) {
        throw new Error()
    }
}
