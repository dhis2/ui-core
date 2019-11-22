Feature: The Chip has an onClick api

    Scenario: The user clicks on the Chip
        Given a Chip is rendered
        And the Chip is provided with an onClick handler
        When the Chip is clicked
        Then the onClick handler is called
