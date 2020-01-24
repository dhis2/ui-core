  Feature: Recognition and auto formatting of list items

    Scenario: The user presses enter when the text cursor is at the end of an unordered list item
      Given the content of the current line is a valid unordered list item
      And the text cursor is at the end of the line
      When the user presses the enter key
      Then the cursor moves to a new line
      And an unordered list item marker plus one space is added to the new line
      And the text cursor is placed after the inserted characters

    Scenario: The user presses enter when the text cursor is at the end of an ordered list item
      Given the content of the current line is a valid unordered list item
      And the text cursor is at the end of the line
      When the user presses the enter key
      Then the cursor moves to a new line
      And an ordered list item marker plus one space is added to the new line
      And the ordered list item number is the previous item number plus one
      And the text cursor is placed after the inserted characters

    Scenario: The user presses enter when the text cursor is in the middle of a list item
      Given the content of the current line is a valid list item
      And the text cursor is in the middle of the line
      When the user presses the enter key
      Then the content after the cursor moves to a new line
      And the new line is a list item of the same type as the previous
