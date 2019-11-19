Feature: The Chip has an onRemove api

    Scenario: The user removes the Chip
        Given a removable Chip is rendered
        And the Chip is provided with an onRemove handler
        When the remove icon is clicked
        Then the onRemove handler is called
