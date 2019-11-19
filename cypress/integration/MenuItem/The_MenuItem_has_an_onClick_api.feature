Feature: The MenuItem has an onClick api

    Scenario: The user clicks on the MenuItem
        Given a MenuItem is rendered
        And the MenuItem is provided with an onClick handler
        When the MenuItem is clicked
        Then the onClick handler is called
