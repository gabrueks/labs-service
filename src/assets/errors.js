export default {
    MISSING_PAYLOAD: (missingParams) => `The parameters ${missingParams.join(', ')} ${
        missingParams.length === 1 ? 'is' : 'are'
    } missing.`,
    REQUEST_TOO_LARGE: () => 'Request too large.',
    UNEXPECTED_ERROR: () => 'Unexpected internal error.',
    UNPROCESSABLE_ENTITY: () => 'Unprocessable entity',
    DUPLICATED: () => 'Duplicated on database',
    NOT_FOUND: () => 'Not found.',
    NOT_FOUND_PRODUCT: () => 'Product does not exist.',
    NOT_AUTHORIZED: () => 'Not authorized.',
}
