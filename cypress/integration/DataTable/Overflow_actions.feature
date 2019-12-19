Feature: Display overflow actions in a menu when clicked

    Scenario: User clicks the overflow actions icon
        Given a table with one or more rows is rendered
        And the rows contain a overflow actions
        When the overflow actions icon is clicked
        Then a menu containing the row actions is rendered
