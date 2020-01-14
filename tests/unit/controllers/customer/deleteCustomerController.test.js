import deleteCustomerController from '~/controllers/customer/deleteCustomerController'

import deleteCustomerService from '~/services/customer/deleteCustomerService'

import { resExpress } from '../../helpers'

jest.mock('~/services/customer/deleteCustomerService')

describe('Testing delete customer from customer controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = deleteCustomerService.mockImplementation(() => Promise.resolve())

        const controllerResponse = await deleteCustomerController(
            { body: {}, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({})

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = deleteCustomerService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await deleteCustomerController(
            { body: {}, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'UNEXPECTED_ERROR',
            message: 'Unexpected internal error.',
        })

        serviceMock.mockRestore()
    })
})
