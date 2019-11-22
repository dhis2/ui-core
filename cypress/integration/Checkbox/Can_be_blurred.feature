Feature: The Checkbox has an onBlur api

    Scenario: The user focuses the next the Checkbox
        Given an focused Checkbox is rendered
        And the Checkbox is provided with an onBlur handler
        When the next Checkbox is focused
        Then the onBlur handler is called
