Feature: Search for products in the Mercado Libre website

    Scenario: Advanced search by brand
        Given user who browses the Google search engine 
        And searches for "creatina mercado libre"
        When enters the option of the Mercado Libre website
        And filters the products by the brand "MuscleTech"
        Then validates the information of the first product