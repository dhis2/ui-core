Feature: The Checkbox has an onBlur api

    Scenario: The user blurs the Checkbox
        Given a focused Checkbox is rendered
        And the Checkbox is provided with an onBlur handler
        When the Checkbox is blurred
        Then the onBlur handler is called
