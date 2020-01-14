import addFavoriteProductController
    from '~/controllers/customer/product/addFavoriteProductController'

import addFavoriteProductService from '~/services/customer/product/addFavoriteProductService'

import { resExpress } from '../../../helpers'

jest.mock('~/services/customer/product/addFavoriteProductService')

describe('Testing add favorite product from product controller', () => {
    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = addFavoriteProductService
            .mockImplementation(() => Promise.resolve(true))

        const controllerResponse = await addFavoriteProductController(
            { body: { productID: '1' }, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({})

        serviceMock.mockRestore()
    })

    it('Should return the expected data and http code correctly.', async () => {
        const serviceMock = addFavoriteProductService.mockImplementation(
            () => Promise.resolve(false),
        )

        const controllerResponse = await addFavoriteProductController(
            { body: { productID: '1' }, params: { customerID: '123' } },
            resExpress,
        )

        expect(controllerResponse).toMatchObject({})

        serviceMock.mockRestore()
    })

    it('Should throw error on controller.', async () => {
        const serviceMock = addFavoriteProductService
            .mockImplementation(() => Promise.reject(new Error('UNEXPECTED_ERROR')))

        const controllerResponse = await addFavoriteProductController(
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
