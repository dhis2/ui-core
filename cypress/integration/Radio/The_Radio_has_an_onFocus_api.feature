Feature: The Radio has an onFocus api

    Scenario: The user focuses the Radio
        Given an unfocused Radio is rendered
        And the Radio is provided with an onFocus handler
        When the Radio is focused
        Then the onFocus handler is called
