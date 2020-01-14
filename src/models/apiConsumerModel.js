import { Schema, model } from 'mongoose'

const apiConsumerSchema = new Schema({
    consumerName: { type: String, required: true },
    consumerUsername: { type: String, required: true, unique: true },
    consumerPassword: { type: String, required: true },
    sessionToken: {
        type: String, required: false, expires: 7200,
    },
},
{ timestamps: true })

const ApiConsumerModel = model('api_consumer', apiConsumerSchema, 'api_consumer')

if (process.env.ENV !== 'TEST') {
    ApiConsumerModel.findById({
        consumerUsername: process.env.ADMIN_CONSUMER_USERNAME,
    }, (_err, doc) => {
        if (!doc) {
            new ApiConsumerModel({
                consumerName: process.env.ADMIN_CONSUMER_NAME,
                consumerUsername: process.env.ADMIN_CONSUMER_USERNAME,
                consumerPassword: process.env.ADMIN_CONSUMER_PASSWORD,
            }).save()
        }
    })
}

export default ApiConsumerModel
