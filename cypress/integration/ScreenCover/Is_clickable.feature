Feature: The ScreenCover provides an onClick api

    Scenario: The user clicks on the ScreenCover
        Given a ScreenCover is rendered
        And a custom onClick handler is provided
        When the user clicks on the Screencover
        Then the onClick handler will be called
