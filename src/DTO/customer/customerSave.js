/* istanbul ignore file */
import { customerModel } from '~/models'

export default async (customer) => customerModel(customer).save()
