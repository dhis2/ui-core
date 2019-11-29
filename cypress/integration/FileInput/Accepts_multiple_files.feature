Feature: The FileInput can handle multiple files

    Scenario: The user selects multiple files
        Given a FileInput that accepts multiple files is rendered
        And the FileInput does not have any files
        And the FileInput is provided with an onChange handler
        When the user selected multiple files
        Then the onChange handler is called
        Then the onChange handler's payload contains multiple files

    Scenario: The user adds multiple files to existing files
        Given a FileInput that accepts multiple files is rendered
        And the FileInput is provided with an onChange handler
        And the FileInput has some files attached
        When the user selected multiple files
        Then the onChange handler is called
        Then the onChange handler's payload contains all files
