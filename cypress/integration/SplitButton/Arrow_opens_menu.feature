Feature: The SplitButton renders a DropMenu

    Scenario: The user opens the DropMenu
        Given a SplitButton with closed DropMenu is rendered
        When the SplitButton arrow icon is clicked
        Then the DropMenu is rendered

    Scenario: The user closes the DropMenu
        Given a SplitButton with opened DropMenu is rendered
        When the SplitButton arrow icon is clicked
        Then the DropMenu is not rendered
