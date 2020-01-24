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

  #lists
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


  # link button

  Scenario: The user clicks the link button with no text selected
    Given there is no text selected
    When the user clicks the link button
    Then the Add Link popover opens
    And the popover is positioned bottom-start to the link button
    And the inputs inside the popover are empty

  Scenario: The user clicks the link button with text selected
    Given there is some text selected
    When the user clicks the link button
    Then the Add Link popover opens
    And the popover is positioned bottom-start to the link button
    And the Link Title input content is populated with the selected text

  Scenario: The user clicks the Insert link button with empty Link title
    Given the Add Link popover is open
    And the the Link address input is not empty
    And the Link title input is empty
    When the user clicks the Insert link button
    Then a formatted link is added to the last cursor position
    And the Link address is used as the Link title

  Scenario: The user clicks the Insert link button with empty Link address
    Given the Add Link popover is open
    And the Link address input is empty
    When the user clicks the Insert link button
    Then an error is displayed
    And no content is added to the last cursor position
    And the Add Link popver is still open
