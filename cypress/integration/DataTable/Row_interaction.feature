Feature: Interaction with a table row

    Scenario: The user clicks on a table row
        Given a table with at least one row is rendered
        When a table row is clicked
        Then the background color of the clicked table row changes during the click

    Scenario: The user hovers a table row
        Given a table with at least one row is rendered
        When a table row is hovered
        Then the background color of the hovered table row changes
