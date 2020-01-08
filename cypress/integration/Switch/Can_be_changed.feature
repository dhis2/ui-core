Feature: The Switch has an onChange api

    Scenario: The user clicks the Switch
        Given an unchecked Switch is rendered
        And the Switch is provided with an onChange handler
        When the Switch is clicked
        Then the onChange handler is called
