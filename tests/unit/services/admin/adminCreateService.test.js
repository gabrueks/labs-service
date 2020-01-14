import adminCreateService from '~/services/admin/adminCreateService'

import adminCreate from '~/DTO/admin/adminCreate'

jest.mock('~/DTO/admin/adminCreate')

describe('Testing create admin service', () => {
    it('Should create customer correctly', async () => {
        const mockSave = adminCreate.mockImplementation(() => Promise.resolve({ test: true }))

        expect(await adminCreateService('test')).toMatchObject({
            test: true,
        })

        mockSave.mockRestore()
    })

    it('Should not create and throw unexpected error', async () => {
        const mockSave = adminCreate.mockImplementation(() => Promise.reject(new Error()))

        try {
            await adminCreateService('test')
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockSave.mockRestore()
    })

    it('Should not create and throw duplicated error', async () => {
        const mockSave = adminCreate
            .mockImplementation(() => Promise.reject(new Error('TEST_DUPLICATED')))

        try {
            await adminCreateService('test')
        } catch (error) {
            expect(error.message).toMatch('DUPLICATED')
            expect(error instanceof Error).toBeTruthy()
        }

        mockSave.mockRestore()
    })
})
