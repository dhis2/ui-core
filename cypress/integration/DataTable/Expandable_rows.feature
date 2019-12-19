Feature: Expandable table rows

    Scenario: User clicks an expandable table row
        Given a table with one or more rows is rendered
        And all the table rows have 'expandable' enabled
        When the cell containing the expand-arrow icon in the table row is clicked
        Then the expandable content of the table cell visibility is toggled
        And the arrow icon is vertically flipped
