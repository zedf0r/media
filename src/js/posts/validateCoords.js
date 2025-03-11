export function validateCoords(coords) {
    const regex = /^\[?-?\d{1,3}.\d+,\s?-?\d{1,3}.\d+\]?/;
    const regexCoords = /[\[\],\s]+/

    let status = true;

    if (regex.test(coords)) {
        const resultRegex = coords.split(regexCoords).filter(Boolean);
        
        const coordsObject = {latitude: resultRegex[0], longitude: resultRegex[1]}

        return coordsObject
    } else {
        status = false;
        return false
    }
}