Feature: The Switch has an onBlur api

    Scenario: The user blurs the Switch
        Given an focused Switch is rendered
        And the Switch is provided with an onBlur handler
        When the Switch is blurred
        Then the onBlur handler is called
