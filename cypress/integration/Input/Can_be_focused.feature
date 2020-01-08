Feature: The Input has an onFocus api

    Scenario: The user focuses the Input
        Given an Input is rendered
        And the Input is provided with an onFocus handler
        When the Input is focused
        Then the onFocus handler is called
