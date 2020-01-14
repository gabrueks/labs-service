import updateCustomerValidation from '../../../../src/validations/customer/updateCustomerValidation'

describe('Testing createCustomerValidaton function', () => {
    it('Should return joi object', () => {
        expect(updateCustomerValidation.isJoi).toBeTruthy()
    })

    it('Should return null on error', () => {
        const { error } = updateCustomerValidation.validate({
            customerName: 'Gabriel Souza',
            customerEmail: 'example@test.com',
        })
        expect(error).toBeNull()
    })

    it('Should return an error', () => {
        const { error } = updateCustomerValidation.validate({})

        expect(error).toBeDefined()
    })
})
