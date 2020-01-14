import createCustomerController from '~/controllers/customer/createCustomerController'

import createCustomerService from '~/services/customer/createCustomerService'

import { resExpress } from '../../helpers'

jest.mock('~/services/customer/createCustomerService')

describe('Testing create customer from customer controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = createCustomerService.mockImplementation(
            () => Promise.resolve({ customerPublicID: '123' }),
        )

        const controllerResponse = await createCustomerController({ body: {} }, resExpress)

        expect(controllerResponse).toMatchObject({ customerPublicID: '123' })

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = createCustomerService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await createCustomerController(
            { body: {} },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'UNEXPECTED_ERROR',
            message: 'Unexpected internal error.',
        })

        serviceMock.mockRestore()
    })

    it('Should throw duplicated error on controller.', async () => {
        const serviceMock = createCustomerService
            .mockImplementation(() => Promise.reject(new Error('DUPLICATED')))

        const controllerResponse = await createCustomerController(
            { body: {} },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({
            code: 'DUPLICATED',
            message: 'Duplicated on database',
        })

        serviceMock.mockRestore()
    })
})
