/* istanbul ignore file */
import { customerModel } from '~/models'

export default ({ customerPayload = {}, customerPublicID }) => (
    customerModel.findOneAndUpdate({ customerPublicID }, { $set: customerPayload })
)
