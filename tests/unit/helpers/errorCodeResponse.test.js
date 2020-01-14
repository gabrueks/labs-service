import { errorCodeResponse } from '~/helpers/index'

describe('Testing errorResponse helper', () => {
    it('Should use default error', () => {
        expect(errorCodeResponse('NOT_VALID_ERROR')).toEqual(500)
    })
})
