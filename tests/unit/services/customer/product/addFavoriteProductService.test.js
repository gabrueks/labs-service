import addFavoriteProductService from '~/services/customer/product/addFavoriteProductService'

import customerAddFavorite from '~/DTO/customer/customerAddFavorite'
import retrieveProductInfoRequest from '~/requests/retrieveProductInfoRequest'

jest.mock('~/DTO/customer/customerAddFavorite')
jest.mock('~/requests/retrieveProductInfoRequest')

describe('Testing add favorite customer service', () => {
    it('Should add favorite to list customer correctly', async () => {
        const mockAddFavorite = customerAddFavorite
            .mockImplementation(() => Promise.resolve({ customer: true }))
        const productMock = retrieveProductInfoRequest
            .mockImplementation(() => Promise.resolve({ data: {} }))

        expect(await addFavoriteProductService({
            customerPublicID: '123',
            productID: '123',
        })).toMatchObject({
            customer: true,
        })

        productMock.mockRestore()
        mockAddFavorite.mockRestore()
    })

    it('Should not add favorite and throw unexpected error', async () => {
        const mockAddFavorite = customerAddFavorite
            .mockImplementation(() => Promise.reject(new Error()))

        try {
            await addFavoriteProductService({
                customerPublicID: '123',
                productID: '123',
            })
        } catch (error) {
            expect(error.message).toMatch('UNEXPECTED_ERROR')
            expect(error instanceof Error).toBeTruthy()
        }

        mockAddFavorite.mockRestore()
    })

    it('Should not add favorite and throw unexpected error', async () => {
        const mockAddFavorite = customerAddFavorite
            .mockImplementation(() => Promise.reject(new Error('NOT_FOUND_TEST')))
        const productMock = retrieveProductInfoRequest
            .mockImplementation(() => Promise.resolve({ data: {} }))

        try {
            await addFavoriteProductService({
                customerPublicID: '123',
                productID: '123',
            })
        } catch (error) {
            expect(error.message).toMatch('NOT_FOUND_PRODUCT')
            expect(error instanceof Error).toBeTruthy()
        }

        productMock.mockRestore()
        mockAddFavorite.mockRestore()
    })
})
