import retrieveCustomerService from '~/services/customer/retrieveCustomerService'

import retrieveCustomer from '~/DTO/customer/customerRetrieve'

jest.mock('~/DTO/customer/customerRetrieve')

describe('Testing retrieve customer service', () => {
    it('Should retrieve customer correctly', async () => {
        const mockDelete = retrieveCustomer
            .mockImplementation(() => Promise.resolve({ customer: true }))

        expect(await retrieveCustomerService('test')).toMatchObject({
            customer: true,
        })

        mockDelete.mockRestore()
    })

    it('Should not retrieve and throw unexpected error', async () => {
        const mockDelete = retrieveCustomer.mockImplementation(() => Promise.reject(new Error()))

        try {
            await retrieveCustomerService('test')
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockDelete.mockRestore()
    })
})
