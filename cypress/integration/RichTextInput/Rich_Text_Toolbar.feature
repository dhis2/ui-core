Feature: Rich text toolbar

  Scenario Outline: The user clicks formatting buttons with text selected
    Given there is some text "sky" that is selected
    When the user clicks the <style> button <clickNumber> times
    Then the text is changed to <result>
    And the resulting text is selected

    Examples:
      | style | clickNumber | result |
      | bold | 1 | *sky* |
      | italic | 1 | _sky_ |
      | bold | 2 | sky |
      | italic | 2 | sky |
      | bold | 5 | *sky* |
      | italic | 5 | _sky_ |

  Scenario: The user clicks multiple formatting buttons with text selected
    Given there some text "sky" that is selected
    When the user clicks the bold button followed by the italic button
    Then the resulting text is "_*sky*_"
    And the resulting text is selected

  Scenario Outline: The user clicks a formatting button without a text selection
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    When the user clicks the <style> button
    Then the text <string> is inserted
    And the text cursor is placed inside the two inserted characters

    Examples:
      | style | string |
      | bold | ** |
      | italic | __ |

  Scenario: The user clicks a single formatting button twice without text selected
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    When the user clicks the bold button
    And the user clicks the bold button again without typing a character
    Then there are no inserted characters

  Scenario: The user formats, types, and formats again
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    When the user clicks the bold button
    And the user types the string "sky"
    And the user clicks the bold button again
    Then the resulting text is "sky"

  Scenario: The user clicks multiple formatting buttons without text selected
    Given there is no selected text
    And the text cursor is focused inside the rich text input
    When the user clicks the bold button
    And the user clicks the italic button
    Then the resulting inserted text is "_**_"
