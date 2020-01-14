const resExpress = { status: () => ({ json: (obj) => ({ end: () => obj }) }) }
const nextExpress = jest.fn()

export { resExpress, nextExpress }
