/* istanbul ignore file */
import Mongoose from 'mongoose'

import logger from './logger'

const getDbURL = () => {
    if (process.env.ENV === 'localContainer') return 'mongodb://labs-mongodb:27018/lab-database'
    return (process.env.DATABASE_HOST
        && process.env.DATABASE_NAME
        && process.env.DB_MONGODB_USER
        && process.env.DB_MONGODB_PASS
    )
        ? `mongodb://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASS}@${process.env.DATABASE_HOST}`
            + `:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
        : 'mongodb://localhost:27017/lab-database'
}

export default async () => {
    try {
        await Mongoose.connect(getDbURL(), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            reconnectTries: 3,
            autoReconnect: true,
        })
    } catch (err) {
        if (err.mesage) {
            logger.error(`error on connecting to DB: ${err.message}`)
            return
        }
        logger.error(`error on connecting to DB: ${err.message}`)
    }
}
