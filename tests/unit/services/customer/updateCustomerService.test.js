import updateCustomerService from '~/services/customer/updateCustomerService'

import customerUpdate from '~/DTO/customer/customerUpdate'

jest.mock('~/DTO/customer/customerUpdate')

describe('Testing update customer service', () => {
    it('Should update customer correctly', async () => {
        const mockUpdate = customerUpdate
            .mockImplementation(() => Promise.resolve({ customer: true }))

        expect(await updateCustomerService('123', {})).toMatchObject({
            customer: true,
        })

        mockUpdate.mockRestore()
    })

    it('Should not retrieve and throw unexpected error', async () => {
        const mockUpdate = customerUpdate
            .mockImplementation(() => Promise.reject(new Error()))

        try {
            await updateCustomerService('test')
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockUpdate.mockRestore()
    })
})
