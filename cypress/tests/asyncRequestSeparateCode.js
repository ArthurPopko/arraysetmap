import {printItemInfo} from "../utils/asyncDisplayMethod";

describe('async request. code and request in "it" ', () => {
    beforeEach(() => {
    })

    it('async request products list length. not optimised', () => {
        cy.log('Get product list length from fixture')
        cy.request('GET', '/').then((response) => {
            cy.log('Put json response in: ')
            cy.writeFile('cypress/fixtures/productList.json', response.body)
        })

        cy.fixture('productList').then((productList) => {
            cy.log('The products amount is: ' + productList['products'].length);

            cy.log('The 1st product info is displayed in console')
            printItemInfo(productList['products'][0])
        })
    })
})
/*
* Задание - справиться с асинхронностью в Cypress
Вы уже успели поработать с запросами. Однако сейчас перед вами стоит задача сделать это самостоятельно.
Во-первых, вам нужно найти понять, какой запрос возвращает данные о продуктах на странице
https://store.google.com/collection/accessories_wall
Для этого проанализируйте трафик, который вы видите при загрузке страницы. Это можно сделать на Network tab в
Dev Tools браузера Chrome.

Для упрощения задания - вот он этот URL:
https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916

Запрос найден? Тогда следующий шаг - реализуем этот запрос через cy.request() и ,
получив список продуктов путем выполнения GET запроса, выводим их общее количество и данные по первому продукту из списка
вернувшихся.

Я попрошу написать две реализации.
Первая - cy.request и код по выводу находятся в блоке it
Вторая - cy.request и код по выводу находятся в разных блоках:
Before и it соответственно.
Третий способ - promisify
* */