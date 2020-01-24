Feature: Add link toolbar button

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
