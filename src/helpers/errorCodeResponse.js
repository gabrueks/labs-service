import httpResponse from '../assets/httpCodes'

export default (messageCode) => httpResponse[messageCode] || 500
