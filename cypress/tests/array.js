/// <reference types="cypress" />
// import Chance from 'chance'

describe('planetsArray', () => {

    it('planetsArray', () => {
        // ARRAY
        let planets = [
            {name: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {name: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {name: "Earth", radius: 6378, density: 5.52, distance: 1},
            {name: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {name: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {name: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {name: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {name: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ]
        let planetsCopy = []
        // FOR
        for (let i = 0; i < planets.length; i++) {
            planetsCopy.push(planets[i])
        }
        console.log(planetsCopy)

        // for (let planet of planets) {
        //     console.log(planet)}
        // FOR EACH
        // let solarSys = planets.push()
        // console.log(solarSys)
        // solarSys.forEach(i => console.log(i))

        // MAP
    })
})