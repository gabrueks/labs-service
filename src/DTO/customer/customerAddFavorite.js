/* istanbul ignore file */
import { customerModel } from '~/models'

export default ({ customerPublicID, product }) => (
    customerModel.findOneAndUpdate(
        { customerPublicID, 'favoriteProducts.id': { $ne: product.id } },
        { $push: { favoriteProducts: product } },
    )
)
