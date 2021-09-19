export const printPlanets = (planetsArray) => {
    planetsArray.forEach((planet) => {
        for (let key in planet) {
            console.log(key, ':', planet[key])
        }
        console.log('\r')
    })
}

export const addSystem = (planetsArray) => {
    planetsArray.forEach((planet) => {
        Object.assign(planet, {system: "solarSystem"})
        console.log('Solar system added', planet);
    })

}