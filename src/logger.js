/* istanbul ignore file */
import { createLogger, format, transports } from 'winston'

export default createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console()],
})
