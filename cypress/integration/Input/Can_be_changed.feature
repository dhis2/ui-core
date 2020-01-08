Feature: The Input has an onChange api

    Scenario: The user types a character into the Input
        Given an Input is rendered
        And the Input is provided with an onChange handler
        When the Input is filled with a character
        Then the onChange handler is called
