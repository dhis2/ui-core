Feature: The Tab has an onClick api

    Scenario: The user clicks on the Tab
        Given a Tab with onClick handler is rendered
        When the Tab is clicked
        Then the onClick handler is called
