Feature: The TextArea has an onBlur api

    Scenario: The user blurs the TextArea
        Given a focused TextArea is rendered
        And the TextArea is provided with an onBlur handler
        When the TextArea is blurred
        Then the onBlur handler is called
