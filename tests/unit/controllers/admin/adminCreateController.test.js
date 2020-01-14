import adminCreateController from '~/controllers/admin/adminCreateController'

import adminCreateService from '~/services/admin/adminCreateService'

import { resExpress } from '../../helpers'

jest.mock('~/services/admin/adminCreateService')

describe('Testing create admin from admin controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = adminCreateService
            .mockImplementation(() => Promise.resolve({ token: '123' }))

        const controllerResponse = await adminCreateController(
            { body: {} },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({})

        serviceMock.mockRestore()
    })

    it('Should respond error on controller.', async () => {
        const serviceMock = adminCreateService
            .mockImplementation(() => Promise.resolve(null))

        const controllerResponse = await adminCreateController(
            { body: {} },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'UNEXPECTED_ERROR',
            message: 'Unexpected internal error.',
        })

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = adminCreateService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await adminCreateController(
            { body: {} },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'UNEXPECTED_ERROR',
            message: 'Unexpected internal error.',
        })

        serviceMock.mockRestore()
    })
})
