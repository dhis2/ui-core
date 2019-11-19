Feature: The TextArea has an onChange api

    Scenario: The user types a character into the TextArea
        Given an empty TextArea is rendered
        And the TextArea is provided with an onChange handler
        When the TextArea is filled with a character
        Then the onChange handler is called
