import updateCustomerController from '~/controllers/customer/updateCustomerController'

import updateCustomerService from '~/services/customer/updateCustomerService'

import { resExpress } from '../../helpers'

jest.mock('~/services/customer/updateCustomerService')

describe('Testing update customer from customer controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = updateCustomerService.mockImplementation(() => Promise.resolve())

        const controllerResponse = await updateCustomerController(
            { body: {}, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({})

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = updateCustomerService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await updateCustomerController(
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
