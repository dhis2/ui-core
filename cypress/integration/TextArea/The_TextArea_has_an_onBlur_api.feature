Feature: The TextArea has an onBlur api

    Scenario: The user focuses the next the TextArea
        Given a focused TextArea is rendered
        And the TextArea is provided with an onBlur handler
        When the next TextArea is focused
        Then the onBlur handler is called
