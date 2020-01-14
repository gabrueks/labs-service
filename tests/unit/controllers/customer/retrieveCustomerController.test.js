import retrieveCustomerController from '~/controllers/customer/retrieveCustomerController'

import retrieveCustomerService from '~/services/customer/retrieveCustomerService'

import { resExpress } from '../../helpers'

jest.mock('~/services/customer/retrieveCustomerService')

const customerMock = {
    customerPublicID: '608fdefa-8176-4315-9d8e-4b6a0bf0d059',
    customerName: 'gabriel bolzi',
    customerEmail: 'gabriel03@hotmail.com',
    favoriteProducts: [],
}

describe('Testing retrieve customer from customer controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = retrieveCustomerService
            .mockImplementation(() => Promise.resolve(customerMock))

        const controllerResponse = await retrieveCustomerController(
            { body: {}, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject(customerMock)

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = retrieveCustomerService.mockImplementation(() => Promise.resolve(null))

        const controllerResponse = await retrieveCustomerController(
            { body: {}, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({})

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = retrieveCustomerService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await retrieveCustomerController(
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
