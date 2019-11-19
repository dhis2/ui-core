Feature: The Tab has an onClick api

    Scenario: The user clicks on the Tab
        Given a Tab is rendered
        And the Tab is provided with an onClick handler
        When the Tab is clicked
        Then the onClick handler is called
