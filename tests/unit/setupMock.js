jest.mock('@bundled-es-modules/uuid/index', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    namedExport: jest.fn(),
    uuidv4: jest.fn(),
}))
