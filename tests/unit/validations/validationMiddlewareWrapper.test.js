import Joi from '@hapi/joi'

import validationMiddlewareWapper from '~/validations/validationMiddlewareWrapper'

import { nextExpress, resExpress } from '../helpers'

describe('Testing validationMiddlewareWapper from validations', () => {
    it('Should return an function', () => {
        const isValidFunction = validationMiddlewareWapper(Joi.object({}))
        expect(typeof isValidFunction).toStrictEqual('function')
    })

    it('Should return next function', () => {
        const isValidFunction = validationMiddlewareWapper(
            Joi.object({
                name: Joi.string().required(),
            }),
        )
        isValidFunction({ body: { name: 'Testing' } }, resExpress, nextExpress)

        expect(typeof isValidFunction).toStrictEqual('function')
        expect(nextExpress).toBeCalled()
    })

    it('Should return response function', () => {
        const isValidFunction = validationMiddlewareWapper(
            Joi.object({
                name: Joi.string().required(),
            }),
        )

        const validation = isValidFunction(
            { body: {} },
            resExpress,
            nextExpress,
        )

        expect(typeof isValidFunction).toStrictEqual('function')
        expect(validation).toMatchObject({
            code: 'MISSING_PAYLOAD',
            message: 'The parameters name is missing.',
        })
    })
})
