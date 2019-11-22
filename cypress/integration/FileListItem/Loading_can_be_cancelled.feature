Feature: The FileListItem has an onCancel api

    Scenario: The user cancels a file
        Given a loading FileListItem is rendered
        And an onCancel handler is provided
        When the user clicks on the cancel text
        Then the onCancel handler is called
