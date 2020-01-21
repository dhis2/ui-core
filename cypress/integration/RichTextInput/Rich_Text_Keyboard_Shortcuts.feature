Feature: Keyboard shortcuts inside an input when rich text is enabled

  Scenario Outline: The user uses a keyboard shortcut with text selected
    Given there is a text string selected
    When the user presses <shortcut>
    Then the text string is formatted <result>
    And the text string is still selected

    Examples:
      | shortcut | result |
      | ctrl+b   | bold   |
      | cmd+b    | bold   |
      | ctrl+i   | italic |
      | cmd+i    | italic |

  Scenario Outline: The user uses a keyboard shortcut without text selected
    Given there is focus inside the rich text enabled input
    When the user presses <shortcut>
    Then the <format> tags are added
    And the text cursor is in the middle of the added tags

    Examples:
      | shortcut | format |
      | ctrl+b   | bold   |
      | cmd+b    | bold   |
      | ctrl+i   | italic |
      | cmd+i    | italic |

  Scenario: The user presses enter
    Given the content of the current line is a  valid list item
    When the user presses enter
    Then the cursor moves to a new line
    And a new list item marker of the same type plus one space is added to the new line
    And the text cursor is placed after the inserted characters
