Feature: Position of select menu dropdown

    Background:
        Given the select menu dropdown has a height of 368px
        And the select menu dropdown has a width of 280px

    Scenario: Default rendering
        Given the space below the select is more than its menu's height
        When the menu is opened
        Then it is rendered below the select
        And the left of the select is aligned with the left of the anchor

    Scenario: Flipped rendering when insufficient space below
        Given the space below the select is less than its menu's height
        When the menu is opened
        Then it is rendered above the select
        And the left of the select is aligned with the left of the anchor

    Scenario: A select with less than 368px available space below and above
        Given the space below and above the select is less than its menu's height
        When the menu is opened
        Then it is rendered below the select
        And the height of the select dropdown menu is reduced to fit within the <body> element
