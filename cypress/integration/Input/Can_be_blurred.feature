Feature: The Input has an onBlur api

    Scenario: The user blurs the Input
        Given a focused Input is rendered
        And the Input is provided with an onBlur handler
        When the Input is blurred
        Then the onBlur handler is called
