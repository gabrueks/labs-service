import adminLoginController from '~/controllers/admin/adminLoginController'

import adminLoginService from '~/services/admin/adminLoginService'

import { resExpress } from '../../helpers'

jest.mock('~/services/admin/adminLoginService')

describe('Testing login admin from admin controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = adminLoginService
            .mockImplementation(() => Promise.resolve('123'))

        const controllerResponse = await adminLoginController(
            { body: { username: 1, password: 1 } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({ token: '123' })

        serviceMock.mockRestore()
    })

    it('Should respond error on controller.', async () => {
        const serviceMock = adminLoginService.mockImplementation(() => Promise.resolve(false))

        const controllerResponse = await adminLoginController(
            { body: { username: 1, password: 1 } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'NOT_AUTHORIZED',
            message: 'Not authorized.',
        })

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = adminLoginService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await adminLoginController(
            { body: {} },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'NOT_AUTHORIZED',
            message: 'Not authorized.',
        })

        serviceMock.mockRestore()
    })
})
