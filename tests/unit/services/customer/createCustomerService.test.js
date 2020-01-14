import createCustomerService from '~/services/customer/createCustomerService'

import customerSave from '~/DTO/customer/customerSave'

jest.mock('~/DTO/customer/customerSave')

describe('Testing create customer service', () => {
    it('Should save customer correctly', async () => {
        const mockSave = customerSave
            .mockImplementation(() => Promise.resolve({ test: true }))

        expect(await createCustomerService('test')).toMatchObject({ test: true })

        mockSave.mockRestore()
    })

    it('Should not save and throw unexpected error', async () => {
        const mockSave = customerSave.mockImplementation(() => Promise.reject(new Error()))

        try {
            await createCustomerService('test')
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockSave.mockRestore()
    })

    it('Should not save and throw duplicated error', async () => {
        const mockSave = customerSave
            .mockImplementation(() => Promise.reject(new Error('TEST_DUPLICATED')))

        try {
            await createCustomerService('test')
        } catch (error) {
            expect(error.message).toMatch('DUPLICATED')
            expect(error instanceof Error).toBeTruthy()
        }

        mockSave.mockRestore()
    })
})
