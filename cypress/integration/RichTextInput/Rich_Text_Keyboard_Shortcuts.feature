Feature: Keyboard shortcuts inside an input when rich text is enabled

  Scenario Outline: The user selects text and presses <shortcut>
    Given there is a text string "the sky" that is selected
    When the user presses ctrl+b/cmd+b
    Then the text string is <result>
    And the text string is still selected

    Examples:
      | shortcut | result    |
      | ctrl+b   | *the sky* |
      | cmd+b    | *the sky* |
      | ctrl+i   | _the sky_ |
      | cmd+i    | _the sky_ |

  Scenario: The user presses ctrl+b with no text selected
    Given there is focus inside the rich text enabled input
    When the user presses ctrl+b
    Then the text string "**" is added
    And the text cursor is inside the "*" characters

  Scenario: The user presses ctrl+b with no text selected
    Given there is focus inside the rich text enabled input
    When the user presses ctrl+b
    Then the text string "__" is added
    And the text cursor is inside the "_" characters

  Scenario: The user presses enter
    Given the content of the current line is <currentItem>
    When the user presses enter
    Then the cursor moves to a new line
    And <insert> is added to the new line
    And the text cursor is placed after the inserted <insert> plus one space

    Examples:
      | currentItem | insert |
      | - sky       | -      |
      | -sky        |        |
      | 1. sky      | 2.     |
      | 33. sky     | 34.    |
