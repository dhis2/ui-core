Feature: Editable table cells

    Scenario: User clicks an editable table cell
        Given a table with data
        And one or more cell has 'editable' enabled
        When the editable cell is clicked
        Then a popover is opened
        # note: the popover is empty, the editing controls are handled by the app
