Feature: Clearing the MultiSelect

    Scenario: The user clicks the clear button to clear the MultiSelect
        Given a clearable MultiSelect with a selection is rendered
        And an onChange handler is attached
        When the clear button is clicked
        Then the MultiSelect is cleared
