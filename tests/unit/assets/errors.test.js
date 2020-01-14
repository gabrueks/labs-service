import errors from '~/assets/errors'

describe('Testing assets errors file', () => {
    it('Should return missing payload (one only)', () => {
        const payloadMissing = ['payloadTest']

        expect(errors.MISSING_PAYLOAD(payloadMissing)).toMatch(
            `The parameters ${payloadMissing[0]} is missing.`,
        )
    })

    it('Should return missing payload (one only)', () => {
        const payloadMissing = ['payloadTest', 'payloadTest']

        expect(errors.MISSING_PAYLOAD(payloadMissing)).toMatch(
            `The parameters ${payloadMissing[0]}, ${payloadMissing[1]} are missing.`,
        )
    })

    it('Should return request too large', () => {
        expect(errors.REQUEST_TOO_LARGE()).toMatch('Request too large.')
    })

    it('Should return unexpected error', () => {
        expect(errors.UNEXPECTED_ERROR()).toMatch('Unexpected internal error.')
    })

    it('should return unprocessable entity', () => {
        expect(errors.UNPROCESSABLE_ENTITY()).toMatch('Unprocessable entity')
    })

    it('Should return duplicated error', () => {
        expect(errors.DUPLICATED()).toMatch('Duplicated on database')
    })

    it('Should return not found', () => {
        expect(errors.NOT_FOUND()).toMatch('Not found.')
    })

    it('Should return not found product', () => {
        expect(errors.NOT_FOUND_PRODUCT()).toMatch('Product does not exist.')
    })
})
