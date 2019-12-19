Feature: Clicking a sortable column header cell toggles sorting

    Background:
        Given a table with three or more rows is rendered
        And all column headers have sorting enbaled

    Scenario: User clicks a header cell that is not currently sorting the table
        When a header cell is clicked
        And the clicked header cell is not currently sorting the table
        Then the table rows are sorted low to high by the content of that column
        And the clicked header cell changes background color during the click

    Scenario: User clicks a header cell that is currently sorting the table
        When a header cell is clicked
        And the clicked header cell is currently sorting the table
        Then the table rows are sorted in the opposite direction by the content of that column
        And the clicked header cell changes background color during the click
