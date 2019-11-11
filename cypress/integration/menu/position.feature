Feature: Position of a menu component

    # default max width: 380px; default max height: 380px
    Background:
        Given the menu component has a height and height of its default maximum

    Scenario: Default rendering
        Given there is enough space below the anchor to fit the default maximum
        When the menu is opened
        Then the menu is below the anchor
        And the menu is left aligned with the anchor

    Scenario: Flipped vertically
        Given there is not enough space below the anchor to fit the default maximum
        When the menu is opened
        Then the menu is above the anchor
        And the menu is left aligned with the anchor

    Scenario: Less than 368px and more than 50px available space below and above anchor
        Given there is not enough space above and below the anchor to fit the default maximum
        But there is more than 50px of available space
        When the menu is opened
        Then the menu is below the anchor
        And the height of the menu is reduced to fit

    # ¯\_(ツ)_/¯
    # This will cause the menu always to be off screen, but that's the apps fault
    Scenario: Less than 50px available space below and above anchor
        Given there is not enough space above and below the anchor to fit the default maximum
        When the menu is opened
        Then the menu is below the anchor
        And the heght of the menu is not reduced below 50px

    Scenario: Flipped horizontally
        Given the anchor has less than 128px space to the right
        When the menu is opened
        Then the menu is right aligned with the anchor
        And the menu is below the anchor

    # ¯\_(ツ)_/¯
    # This will cause the menu always to be off screen, but that's the apps fault
    Scenario: Forced body overflow
        Given the anchor has less than 128px space to the left and the right
        When the menu is opened
        Then the menu is left aligned with the anchor
        And the menu is rendered below the anchor
