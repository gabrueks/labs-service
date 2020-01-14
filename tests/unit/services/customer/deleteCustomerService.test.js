import deleteCustomerService from '~/services/customer/deleteCustomerService'

import customerDelete from '~/DTO/customer/customerDelete'

jest.mock('~/DTO/customer/customerDelete')

describe('Testing delete customer service', () => {
    it('Should save customer correctly', async () => {
        const mockDelete = customerDelete.mockImplementation(() => Promise.resolve(true))

        expect(await deleteCustomerService('test')).toBeTruthy()

        mockDelete.mockRestore()
    })

    it('Should not delete and throw unexpected error', async () => {
        const mockDelete = customerDelete.mockImplementation(() => Promise.reject(new Error()))

        try {
            await deleteCustomerService('test')
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockDelete.mockRestore()
    })
})
