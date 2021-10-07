import Chance from 'chance'
import {whoAreYou} from "../utils/ifMethod";

describe('Age by chance', () => {
    beforeEach(() => {
    })

    const AGE_ARRAY = [0, 1, 5, 11, 12, 13, 16, 19, 20, 21, 40, 59, 60, 61, 75, 89, 90, 91]

    AGE_ARRAY.forEach(age => {

        it(`ifElseSwitch? ${age}`, () => {

            /*Используя метод age() библиотеки Chance сгенерируйте случайный возраст.
            https://chancejs.com/person/age.html
            Выведите в консоль, кем является человек с полученным возрастом (возможные варианты child, teen, adult, senior).*/

            // let age = []
            // age.push(chance.age())

            cy.log('if block:')

            cy.log('Your age is: ' + age)
            if (age <= 12) {
                cy.log('You are a child.')
            } else if (age < 20) {
                cy.log('You are a teenager.')
            } else if (age < 60) {
                cy.log('You\'re an adult.')
            } else if (age < 90) {
                cy.log('You\'re a senior')
            } else
                cy.log('Congratulation! You\'re a longliver!')

            cy.log('')

            cy.log('switch block:')

                switch (true) {
                    case (age < 13):
                        cy.log('You are a child.');
                        break;
                    case (age < 20):
                        cy.log('You are a teen.');
                        break;
                    case (age < 60):
                        cy.log('You are an adult.');
                        break;
                    case (age < 90):
                        cy.log('You\'re a senior.');
                        break;
                    default:
                        cy.log('Congratulation! You\'re a longliver!')
                        break
                }
            cy.log('')

            cy.log('Conditional (ternary) operator:')

                cy.log('Your age is: ' + age)
                whoAreYou(age)
        })
    })
})