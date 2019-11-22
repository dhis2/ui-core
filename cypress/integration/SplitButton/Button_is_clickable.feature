Feature: The SplitButton has an onClick api

    Scenario: The user clicks on the SplitButton
        Given a SplitButton with closed DropMenu is rendered
        And the SplitButton is provided with an onClick handler
        When the SplitButton is clicked
        Then the onClick handler is called
