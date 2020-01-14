import { Schema, model } from 'mongoose'
import { uuidv4 } from '@bundled-es-modules/uuid/index'

const productSchema = new Schema({
    price: { type: Number, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
})

const customerSchema = new Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true, unique: true },
    customerPublicID: { type: String, required: true, default: uuidv4() },
    favoriteProducts: {
        type: [productSchema],
    },
}, { timestamps: true })

export default model('customer', customerSchema, 'customer')
