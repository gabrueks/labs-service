/* istanbul ignore file */
import http from './server'
import databaseBootstrap from './databaseBootstrap'

import logger from './logger'

export default (async function startServer() {
    try {
        http.listen(parseInt(process.env.PORT, 10) || 8080, () => {
            logger.info(`Server started on port: ${process.env.PORT || 8080}`)
        })
        await databaseBootstrap()
        process.on('unhandledRejection', (reason, promise) => {
            logger.error(
                `Unhandled rejection (reason=${reason}, promise=${promise}`,
            )
        })
    } catch (err) {
        logger.error(err)
        logger.info('The server did not start.')
    }
}())
