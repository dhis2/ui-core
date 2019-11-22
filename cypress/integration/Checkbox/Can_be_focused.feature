Feature: The Checkbox has an onFocus api

    Scenario: The user focuses the Checkbox
        Given an unfocused Checkbox is rendered
        And the Checkbox is provided with an onFocus handler
        When the Checkbox is focused
        Then the onFocus handler is called
