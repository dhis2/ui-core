Feature: The TextArea has an onFocus api

    Scenario: The user focuses the TextArea
        Given an empty TextArea is rendered
        And the TextArea is provided with an onFocus handler
        When the TextArea is focused
        Then the onFocus handler is called
