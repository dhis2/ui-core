Feature: The Checkbox has an onChange api

    Scenario: The user ticks the Checkbox
        Given an unchecked Checkbox is rendered
        And the Checkbox is provided with an onChange handler
        When the Checkbox is ticked
        Then the onChange handler is called
