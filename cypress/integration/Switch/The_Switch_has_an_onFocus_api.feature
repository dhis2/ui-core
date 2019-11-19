Feature: The Switch has an onFocus api

    Scenario: The user focuses the Switch
        Given an unfocused Switch is rendered
        And the Switch is provided with an onFocus handler
        When the Switch is focused
        Then the onFocus handler is called
