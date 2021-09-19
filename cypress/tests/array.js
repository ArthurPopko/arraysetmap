/// <reference types="cypress" />
import {addSystem, printPlanets, radiusSum} from "../utils/arrayMethods";


describe('planetsArray', () => {

    it('planetsArray', () => {

        /*Задание 1
        Реализуйте метод printPlanets для вывода данных по объекту из массива. Используйте его для вывода данных
        по массиву, чтобы убедиться, что преобразования массива были произведены верно. В идеале имплементация данного
        метода должна быть гибкой. Поскольку значений у нас немного, то можно выводить из так:
        cy.log(`planet: ${planet.name}, radius: ${planet.radius}, density: ${planet.density}, distance:  ${planet.distance}`)
        Но дальше нужно этот способ вывод усовершенствовать. Этот способ не будет в полной мере работать,
        когда количество полей для planet увеличится.
        */
        cy.log('printPlanets')
        let planetsArray = [
            {name: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {name: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {name: "Earth", radius: 6378, density: 5.52, distance: 1},
            {name: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {name: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {name: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {name: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {name: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ]

        printPlanets(planetsArray)

        /*Задание 2
        Добавьте свойство solarSystem для всех объектов в массива. Используйте метод map().
        Итак, стандартная имплементация по выводу значений из массива теперь должна включать вывод еще одного свойства.*/
        cy.log('solar system added')
        addSystem(planetsArray)
        // printPlanets(planetsArray)

        /*Задание 3
        Добавьте в массив новый объект:
        {planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false}*/
        // cy.log('new object')
        planetsArray.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})
        printPlanets(planetsArray);

        /*Задание 4
        Просуммируйте радиус всех планет, используя метод reduce.*/
        cy.log('sum radius of the planets')
        radiusSum(planetsArray)

    })
})