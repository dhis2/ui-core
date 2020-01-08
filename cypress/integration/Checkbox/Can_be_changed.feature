Feature: The Checkbox has an onChange api

    Scenario: The user clicks the Checkbox
        Given an unchecked Checkbox is rendered
        And the Checkbox is provided with an onChange handler
        When the Checkbox is clicked
        Then the onChange handler is called
