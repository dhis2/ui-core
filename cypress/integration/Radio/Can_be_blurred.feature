Feature: The Radio has an onBlur api

    Scenario: The user blurs the Radio
        Given an focused Radio is rendered
        And the Radio is provided with an onBlur handler
        When the Radio is blurred
        Then the onBlur handler is called
