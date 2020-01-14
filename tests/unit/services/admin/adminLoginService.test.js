import adminLoginService from '~/services/admin/adminLoginService'

import adminGetUser from '~/DTO/admin/adminGetUser'
import adminCreateToken from '~/DTO/admin/adminCreateToken'
import { validatePasswordJWT } from '~/helpers'

jest.mock('~/DTO/admin/adminGetUser')
jest.mock('~/DTO/admin/adminCreateToken')
jest.mock('~/helpers/validatePasswordJWT')

describe('Testing login admin service', () => {
    it('Should login admin correctly', async () => {
        const mockGetUser = adminGetUser
            .mockImplementation(() => Promise.resolve({ consumerPassword: 1 }))
        const mockCreateToken = adminCreateToken
            .mockImplementation(() => Promise.resolve({ test: true }))
        const mockValidatePasswordJWT = validatePasswordJWT
            .mockImplementation(() => Promise.resolve(true))

        expect(await adminLoginService('test')).toMatchObject({ test: true })

        mockGetUser.mockRestore()
        mockCreateToken.mockRestore()
        mockValidatePasswordJWT.mockRestore()
    })

    it('Should not login and return false', async () => {
        const mockGetUser = adminGetUser
            .mockImplementation(() => Promise.resolve(false))
        const mockCreateToken = adminCreateToken
            .mockImplementation(() => Promise.resolve({ test: true }))
        const mockValidatePasswordJWT = validatePasswordJWT
            .mockImplementation(() => Promise.resolve(true))

        expect(await adminLoginService('test')).toBeFalsy()

        mockGetUser.mockRestore()
        mockCreateToken.mockRestore()
        mockValidatePasswordJWT.mockRestore()
    })

    it('Should not login and return false', async () => {
        const mockGetUser = adminGetUser
            .mockImplementation(() => Promise.resolve({ consumerPassword: 1 }))
        const mockCreateToken = adminCreateToken
            .mockImplementation(() => Promise.resolve({ test: true }))
        const mockValidatePasswordJWT = validatePasswordJWT
            .mockImplementation(() => Promise.resolve(false))

        expect(await adminLoginService('test')).toBeFalsy()

        mockGetUser.mockRestore()
        mockCreateToken.mockRestore()
        mockValidatePasswordJWT.mockRestore()
    })

    it('Should not login and throw error', async () => {
        const mockGetUser = adminGetUser
            .mockImplementation(() => Promise.reject(new Error()))
        const mockCreateToken = adminCreateToken
            .mockImplementation(() => Promise.resolve({ test: true }))
        const mockValidatePasswordJWT = validatePasswordJWT
            .mockImplementation(() => Promise.resolve(false))

        try {
            await adminLoginService('test')
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockGetUser.mockRestore()
        mockCreateToken.mockRestore()
        mockValidatePasswordJWT.mockRestore()
    })
})
