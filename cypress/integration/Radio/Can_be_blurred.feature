Feature: The Radio has an onBlur api

    Scenario: The user focuses the next the Radio
        Given an focused Radio is rendered
        And the Radio is provided with an onBlur handler
        When the next Radio is focused
        Then the onBlur handler is called
