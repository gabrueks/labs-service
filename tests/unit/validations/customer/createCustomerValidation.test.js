import createCustomerValidation from '../../../../src/validations/customer/createCustomerValidation'

describe('Testing createCustomerValidaton function', () => {
    it('Should return joi object', () => {
        expect(createCustomerValidation.isJoi).toBeTruthy()
    })

    it('Should return null on error', () => {
        const { error } = createCustomerValidation.validate({
            customerName: 'Gabriel Souza',
            customerEmail: 'example@test.com',
        })
        expect(error).toBeNull()
    })

    it('Should return an error', () => {
        const { error } = createCustomerValidation.validate({})

        expect(error).toBeDefined()
    })
})
