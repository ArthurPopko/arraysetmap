export const printMapPlanets = (mapPlanet) => {
    mapPlanet.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    })
}