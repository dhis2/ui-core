Feature: The FIleInput has an onChange api

    Scenario: The user selects a file
        Given a FileInput with no files is rendered
        And the FIleInput is provided with an onChange handler
        When a file is selected
        Then the onChange handler is called
