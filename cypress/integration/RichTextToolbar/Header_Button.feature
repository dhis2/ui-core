Feature: Header format button

    Scenario: The user clicks a header style
      Given the text cursor is inside the rich text input
      When the user clicks to insert a header style
      Then header tags are inserted
      And a space is inserted after the header tags

    Scenario: The user clicks a header style with text selected
      Given there is some text selected
      When the user clicks to insert a header style
      Then the selected text is converted to a header
