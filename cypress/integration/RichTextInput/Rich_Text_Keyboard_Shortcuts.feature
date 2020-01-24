Feature: Keyboard shortcuts inside an input when rich text is enabled

  Scenario Outline: The user uses a keyboard shortcut with text selected
    Given there is an unformatted text string selected
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
    And the text cursor is not inside a word
    When the user presses <shortcut>
    Then the <format> tags are added after the text cursor
    And the text cursor is moved to the middle of the added tags

    Examples:
      | shortcut | format |
      | ctrl+b   | bold   |
      | cmd+b    | bold   |
      | ctrl+i   | italic |
      | cmd+i    | italic |

  Scenario Outline: The user uses a keyboard shortcut inside a word
    Given there is focus inside the rich text enabled input
    And the text cursor is inside a word
    When the user presses <shortcut>
    Then the word is <format>
    And the text cursor remains in the same place

    Examples:
      | shortcut | format |
      | ctrl+b   | bold   |
      | cmd+b    | bold   |
      | ctrl+i   | italic |
      | cmd+i    | italic |
