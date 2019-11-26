Feature: The DropdownButton renders a dropdown

    Scenario: The user opens the dropdown
        Given a DropdownButton with closed dropdown is rendered
        When the DropdownButton is clicked
        Then the dropdown is rendered

    Scenario: The user closes the dropdown
        Given a DropdownButton with opened dropdown is rendered
        When the DropdownButton is clicked
        Then the dropdown is not rendered