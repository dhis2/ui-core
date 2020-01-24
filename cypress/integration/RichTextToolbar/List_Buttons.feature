Feature: List toolbar buttons

    Scenario: The user creates an unordered list on an empty line
      Given the text cursor is on a line with no content
      When the user clicks the unordered list button
      Then an unordered list marker is inserted at the start of the line
      And a space is inserted after the marker
      And the text cursor is at the end of the inserted characters

    Scenario: The user creates an unordered list on a line with content
      Given the text cursor is on a line with text content
      And the current line is not an unordered list item
      When the user clicks the unordered list button
      Then the current line becomes an unordered list item
      And the cursor is still in the same location

    Scenario: The user creates an unordered list with content selected
      Given there is some selected text on the current line
      And the current line is not an unordered list item
      When the user clicks the unordered list button
      Then the current line becomes an unordered list item
      And the selected text is still selected

    Scenario: The user creates an ordered list on a empty, non-ordered list line
      Given the text cursor is on a line with no content
      And the previous line is not an ordered list item
      When the user clicks the ordered list button
      Then the current line becomes an ordered list item
      And the list marker starts at 1

    Scenario: The user creates an ordered list on a non-empty line not in an ordered list
      Given the text cursor is on a line with content
      And the current line is not an ordered list item
      And the previous line is not an ordered list item
      When the user clicks the ordered list button
      Then the current line becomes an ordered list item
      And the list marker starts at 1
      And the text cursor is still in the same location

    Scenario: The user creates an ordered list with text selected on a line not in an ordered list
      Given there is text selected on a line with content
      And the current line is not an ordered list item
      And the previous line is not an ordered list item
      When the user clicks the ordered list button
      Then the current line becomes an ordered list item
      And the list marker starts at 1
      And the selected text is still selected

    Scenario: The user creates an ordered list following another ordered list item
      Given the text cursor is on a line
      And the previous line is an ordered list item
      When the user clicks the ordered list button
      Then the current line becomes an ordered list item
      And the list marker starts at the previous lines list marker plus one

    Scenario Outline: The user toggles a list item off
      Given the text cursor is on a <listType> line
      When the user clicks the <listTypeButton>
      Then the current line is no longer a list item

      Examples:
      | listType  | listTypeButton        |
      | unordered | unordered list button |
      | ordered   | ordered list button   |
