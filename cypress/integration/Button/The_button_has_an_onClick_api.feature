Feature: The button has an onClick api

    Scenario: The user clicks on the Button
        Given a Button is rendered
        And the Button is provided with an onClick handler
        When the Button is clicked
        Then the onClick handler is called
