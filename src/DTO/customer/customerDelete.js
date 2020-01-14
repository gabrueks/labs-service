/* istanbul ignore file */
import { customerModel } from '~/models'

export default async (customerPublicID) => customerModel.findOneAndDelete({ customerPublicID })
