Feature: Sorting table rows

    Scenario: Low to high sorting of alphanumerical data
        Given a table with at least three rows of alphanumerical data is rendered
        When a column is sorted low to high
        And that column contains textual data
        Then the rows are ordered alphanumerically by the content in that column

    Scenario: High to low sorting of alphanumerical data
        Given a table with at least three rows of alphanumerical data is rendered
        When a column is sorted high to low
        And that column contains textual data
        Then the rows are ordered reverse alphanumerically by the content in that column
        
    # I'm not sure about this one? Trying to test for some kind of default ordering, so that rows are never displayed in a random order
    Scenario: Default sorting display
        Given a table with at least three rows of alphanumerical data is rendered
        When no columns are used for sorting
        Then the rows are ordered in the order the data was supplied
