Feature: Clearing the SingleSelect

    Scenario: The user clicks the clear button to clear the SingleSelect
        Given a clearable SingleSelect with a selection is rendered
        And an onChange handler is attached
        When the clear button is clicked
        Then the SingleSelect is cleared
