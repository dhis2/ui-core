Feature: The DropdownButton has an onClick api

    Scenario: The user clicks on the DropdownButton
        Given a DropdownButton is rendered
        And the DropdownButton is provided with an onClick handler
        When the DropdownButton is clicked
        Then the onClick handler is called
