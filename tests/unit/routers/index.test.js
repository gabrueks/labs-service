import customerRouter from '~/routers/customer/index'

describe('Testing the express router instance', () => {
    it('Should be a instance of express router', () => {
        expect(typeof customerRouter).toMatch('function')
    })
})
