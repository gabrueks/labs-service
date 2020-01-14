/* istanbul ignore file */
import labsApi from '~/api/labsApi'

export default (productID) => labsApi.get(`api/product/${productID}`)
