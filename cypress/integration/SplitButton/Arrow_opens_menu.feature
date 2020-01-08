Feature: The SplitButton renders a DropMenu

    Scenario: The user opens the DropMenu
        Given a SplitButton with closed menu is rendered
        When the SplitButton toggle is clicked
        Then the menu is rendered

    Scenario: The user closes the DropMenu
        Given a SplitButton with opened menu is rendered
        When the SplitButton toggle is clicked
        Then the menu is not rendered
