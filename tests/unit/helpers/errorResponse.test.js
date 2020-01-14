import { errorResponse } from '../../../src/helpers'

describe('Testing errorResponse helper', () => {
    it('Should use default error', () => {
        expect(errorResponse({ messageCode: 'FALSE' })).toEqual({
            message: 'Unexpected internal error.',
            code: 'FALSE',
        })
    })
})
