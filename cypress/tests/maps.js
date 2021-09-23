/// <reference types="cypress" />
import {
    addSystem,
    printPlanets,
    radiusSum,
    filterDistance,
    deletePlanetByIndex,
    sortByRadius,
    sortByName
} from "../utils/arrayMethods";

describe('planetsArray', () => {
    before(() => {
        cy.fixture('planets').then(planets => {
            cy.wrap(planets).as('planetsList')
        })
    })

    it('planetsArray', () => {

        /*Задание 1
        Определим Map.
        Давайте вспомним, как мы хранили данные о планетах, когда работали с массивом (array).
        Давайте преобразуем этот массив данных в Map.
        В качестве ключа будем использовать имя планеты (key = "Mercury"), качестве значения - объект с характеристиками
        планеты (value = {radius: 2440, density: 5.43, distance: 0.395})
        Итого, объекта на добавление в Map должен быть сформирован в виде
          ["Mercury", {radius: 2440, density: 5.43, distance: 0.395}]
        Его будет добавлять в изначально пустой Map() посредством метода set().*/
        cy.get('@planetsList').then((planetsList) => {
            cy.log('PrintPlanets')
            let planetsArray = []
            planetsArray.push(...planetsList['newPlanet'])
            // let planetsArray = [
            //     {name: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            //     {name: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            //     {name: "Earth", radius: 6378, density: 5.52, distance: 1},
            //     {name: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            //     {name: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            //     {name: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            //     {name: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            //     {name: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
            // ]
            printPlanets(planetsArray)
        })
    })
});