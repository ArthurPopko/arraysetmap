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
        Object.assign(planet, {solarSystem: true})
        console.log('Solar system added', planet);
    })

}

export const radiusSum = (planetsArray) => {
    const initialValue = 0;
    let sum = planetsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.radius,
        initialValue
    );
    console.log('Radius sum: ', sum)
    console.log('\r')
}

export const filterDistance = (planetsArray) => {
    let result = planetsArray.filter(planet => planet.distance > 20)
    console.log('Filtered print by distance: ')
    printPlanets(result)
}