Feature: Selecting options

    Scenario: The user clicks an option to select it
        Given a SingleSelect with options is rendered
        And an onChange handler is attached
        And the SingleSelect is open
        When an option is clicked
        Then the clicked option is selected
        And the options are not displayed

    Scenario: The user clicks a disabled option
        Given a SingleSelect with a disabled option is rendered
        And an onChange handler is attached
        And the SingleSelect is open
        When the disabled option is clicked
        Then the onchange handler is not called
