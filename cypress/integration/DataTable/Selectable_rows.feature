 Feature: Selectable table rows

    Background:
        Given a table with three or more table rows is rendered
        And all table rows have 'selectable' enabled

    Feature: User clicks a table row checkbox
        When the checkbox inside a table row is clicked
        Then the selected state of the table row is toggled
        And the background color of the table row changes

    Feature: User clicks the header row checkbox with some rows unselected
        Given there are rows in the table that are unselected
        When the checkbox inside the header row is clicked
        Then all of the table rows are selected
        And the checkbox in the header row is displayed selected

    Feature: User clicks the header row checkbox with all rows selected
        Given all rows in the table are selected
        When the checkbox inside the header row is clicked
        Then all of the table rows are deselected
        And the checkbox in the header row is displayed unselected
