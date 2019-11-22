Feature: The Switch has an onBlur api

    Scenario: The user focuses the next the Switch
        Given an focused Switch is rendered
        And the Switch is provided with an onBlur handler
        When the next Switch is focused
        Then the onBlur handler is called
