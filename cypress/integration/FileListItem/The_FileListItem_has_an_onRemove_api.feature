Feature: The FileListItem has an onRemove api

    Scenario: The user removes a file
        Given a removable FileListItem is rendered
        And an onRemove handler is provided
        When the user clicks on the remove text
        Then the onRemove handler is called
