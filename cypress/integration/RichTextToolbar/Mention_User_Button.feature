Feature: Mention user button

    Scenario: The user clicks the Mention user button without selection
      Given the cursor is inside the rich text input
      And there is no text selected
      When the user clicks the Mention user button
      Then the Mention marker is added at the cursor position
      And the cursor directly follows the Mention marker
      And the User search popover is open
      And the User search popover is positioned bottom-start in reference to the text cursor

    Scenario: The user clicks the Mention user button with a selection
      Given there is a rich text enabled input
      And there is some text selected
      When the user clicks the Mention user button
      Then the Mention marker is added at the end of the selected text
      And the text is not selected
      And the cursor directly follows the Mention marker
      And the User search popover is open
      And the User search popover is positioned bottom-start in reference to the text cursor
