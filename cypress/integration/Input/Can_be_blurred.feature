Feature: The Input has an onBlur api

    Scenario: The user focuses the next the Input
        Given a focused Input is rendered
        And the Input is provided with an onBlur handler
        When the next Input is focused
        Then the onBlur handler is called
