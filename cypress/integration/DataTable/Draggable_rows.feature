Feature: Drag and drop to reorder table rows

    Background:
        Given a table with three or more rows is rendered
        And the table has 'drag to reorder' enabled

    Scenario: The user clicks and drags a table row within the table body
        When a table row is clicked and dragged
        And the mouse cursor is inside the table body when the click is released
        Then the table row is removed from its original position
        And the table row is displayed in the table in the position closest to the mouse cursor

    Scenario: The user clicks and drags a table row outside of the table body
        When a table row is clicked and dragged
        And the mouse cursor is outside the table body when the click is released
        Then the table row is displayed in its original position
