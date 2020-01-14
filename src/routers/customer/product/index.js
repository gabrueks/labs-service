import {
    addFavoriteProductController,
} from '~/controllers/customer/product/index'

import { addFavoriteProductValidationMiddleware } from '~/validations/customer/product'
import validateUUIDMiddleware from '~/validations/validateUUIDMiddleware'

export default (customerRouter) => {
    customerRouter.put(
        '/:customerID/product',
        validateUUIDMiddleware(),
        addFavoriteProductValidationMiddleware,
        addFavoriteProductController,
    )
}
