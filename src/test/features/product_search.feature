Feature: Search for products in the Mercado Libre website

    Scenario: Advanced search by brand
        Given that the user is on the Google search engine
        And searches for "creatina mercado libre"
        When the user clicks on the link "Creatina | MercadoLibre - Categorías"
        And applies the filter for the brand "MuscleTech"
        Then the user should see the "1" product of that brand
        And validate the price of the first product