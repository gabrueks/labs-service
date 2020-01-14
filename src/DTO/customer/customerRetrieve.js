/* istanbul ignore file */
import { customerModel } from '~/models'

export default async (customerPublicID) => customerModel
    .findOne(
        { customerPublicID },
        '-__v -favoriteProducts._id -favoriteProducts.brand -_id -createdAt -updatedAt',
    )
    .lean()
