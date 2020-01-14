import validateUUIDMiddleware from '../../../src/validations/validateUUIDMiddleware'

import { resExpress, nextExpress } from '../helpers'

describe('Testing validateUUIDMiddleware', () => {
    it('Should validate correctly on body', () => {
        const bodyPayloadUUID = { body: { customerID: '1bf0f365-fbdd-4e21-9786-da459d78dd1f' } }
        validateUUIDMiddleware({
            paramBody: true,
        })(bodyPayloadUUID, resExpress, nextExpress)
        expect(nextExpress).toBeCalled()
    })

    it('Should validate incorrectly on body', () => {
        const bodyPayloadUUID = { body: { customerID: 'invalid' } }
        const validationFunction = validateUUIDMiddleware({
            paramBody: true,
        })(bodyPayloadUUID, resExpress, nextExpress)
        expect(validationFunction).toMatchObject({
            code: 'UNPROCESSABLE_ENTITY',
            message: 'Unprocessable entity',
        })
    })

    it('Should validate correctly on params', () => {
        const paramsPayloadUUID = { params: { customerID: '1bf0f365-fbdd-4e21-9786-da459d78dd1f' } }
        validateUUIDMiddleware()(paramsPayloadUUID, resExpress, nextExpress)
        expect(nextExpress).toBeCalled()
    })

    it('Should validate incorrectly on params', () => {
        const paramsPayloadUUID = { params: { customerID: 'invalid' } }
        const validationFunction = validateUUIDMiddleware()(
            paramsPayloadUUID, resExpress, nextExpress,
        )
        expect(validationFunction).toMatchObject({
            code: 'UNPROCESSABLE_ENTITY',
            message: 'Unprocessable entity',
        })
    })
})
