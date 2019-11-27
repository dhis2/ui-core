Feature: Selecting options

    Scenario: The user clicks an option to select it
        Given a MultiSelect with options is rendered
        And an onChange handler is attached
        And the MultiSelect is open
        When an option is clicked
        Then the clicked option is selected

    Scenario: The user clicks another option to select it
        Given a MultiSelect with options and a selection is rendered
        And an onChange handler is attached
        And the MultiSelect is open
        When another option is clicked
        Then the clicked option is selected as well

    Scenario: The user clicks an option to deselect it
        Given a MultiSelect with options and a selection is rendered
        And an onChange handler is attached
        And the MultiSelect is open
        When the selected option is clicked
        Then the selected option is deselected

    Scenario: The user clicks a chip's X to deselect it
        Given a MultiSelect with options and a selection is rendered
        And an onChange handler is attached
        When the chip's X is clicked
        Then the selected option is deselected

    Scenario: The user clicks a disabled option
        Given a MultiSelect with a disabled option is rendered
        And an onChange handler is attached
        And the MultiSelect is open
        When the disabled option is clicked
        Then the onchange handler is not called
