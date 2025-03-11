import { validateCoords } from "../posts/validateCoords"

describe('Test validate coordinates', () => {

    test('Coordinates with [] is valid', () => {
        const testCoords = '[51.50851, -0.12572]'
        const validCoords = {latitude: '51.50851', longitude: '-0.12572'}

        expect(validateCoords(testCoords)).toEqual(validCoords)
    })

    test('Coordinates without whitespace is valid', () => {
        const testCoords = '[51.50851,-0.12572]'
        const validCoords = {latitude: '51.50851', longitude: '-0.12572'}

        expect(validateCoords(testCoords)).toEqual(validCoords)
    })

    test('Coordinates with minus is valid', () => {
        const testCoords = '-51.50851, -0.12572'
        const validCoords = {latitude: '-51.50851', longitude: '-0.12572'}

        expect(validateCoords(testCoords)).toEqual(validCoords)
    })
    
    test('Coordinates is invalid', () => {
        const testCoords = '[dasd, -0.12572]'

        expect(validateCoords(testCoords)).toBe(false)
    })

    test('Coordinates is invalid', () => {
        const testCoords = '12516'

        expect(validateCoords(testCoords)).toBe(false)
    })
})