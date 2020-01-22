Feature: Rich text toolbar

  Scenario Outline: The user clicks formatting buttons with text selected
    Given there is some unformatted text selected
    When the user clicks the <style> button <clickNumber> times
    Then the text is formatted <result>
    And the resulting text is selected

    Examples:
      | style  | clickNumber | result |
      | bold   | 1           | bold   |
      | italic | 1           | italic |
      | bold   | 2           | normal |
      | italic | 2           | normal |
      | bold   | 5           | bold   |
      | italic | 5           | italic |

  Scenario: The user clicks multiple formatting buttons with text selected
    Given there is some unformatted text selected
    When the user clicks the bold button followed by the italic button
    Then the resulting text is formatted bold and italic
    And the resulting text is selected

  Scenario Outline: The user clicks a formatting button without a text selection
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    When the user clicks the <style> button
    Then the <tags> are inserted
    And the text cursor is placed in the middle of the inserted tags

    Examples:
      | style | tags |
      | bold | bold tags |
      | italic | italic tags |

  Scenario Outline: The user clicks a formatting button with the cursor inside a word
    Given the text cursor is inside a word
    When the user clicks the <buttonType> button
    Then the word is <style>

    Examples:
      | buttonType | style  |
      | bold       | bold   |
      | italic     | italic |

  Scenario: The user clicks a single formatting button twice without text selected
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    And the text cursor is not inside a word
    When the user clicks the bold button
    And the user clicks the bold button again without typing a character
    Then there are no inserted characters

  Scenario: The user formats, types, and formats again
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    And the text cursor is not inside a word
    When the user clicks the bold button
    And the user types some text
    And the user clicks the bold button again
    Then the resulting text is formatted normal

  Scenario: The user clicks multiple formatting buttons without text selected
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    And the text cursor is not inside a word
    When the user clicks the bold button
    And the user clicks the italic button
    Then the resulting inserted text is bold tags wrapped by italic tags
    And the text cursor is in the middle of the inserted tags

  Scenario: The user clicks a header style
    Given the text cursor is inside the rich text input
    When the user clicks to insert a header style
    Then header tags are inserted
    And a space is inserted after the header tags

  Scenario: The user clicks a header style with text selected
    Given there is some text selected
    When the user clicks to insert a header style
    Then the selected text is converted to a header
