export const whoAreYou = (age) => {
    return age < 12 ? cy.log('Call your mom kid!')
        : age < 20 ? cy.log('Do you really want to be here, teen?')
            : age < 60 ? cy.log('You are adult! It\'s up to you were to be.')
                : age < 90 ? cy.log('Senior! Aren\'t you too old to be here?')
                    : cy.log('There is nothing in the life to surprise you!');
}
