Feature: The Radio has an onChange api

    Scenario: The user checks the Radio
        Given an unchecked Radio is rendered
        And the Radio is provided with an onChange handler
        When the Radio is checked
        Then the onChange handler is called
