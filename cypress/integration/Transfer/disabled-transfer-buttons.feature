Feature: Disable transfer buttons when actions are not possible

  Scenario: No highlighted items in options list
      Given the options list has items
      When no items are highlighted
      Then the 'move to selected list' button is disabled

  Scenario: No highlighted items in selected list
      Given the selected list has items
      When no items are highlighted
      Then the 'move to options list' button is disabled

  Scenario: No items in options list
      Given the options list does not have items
      Then the 'move all to selected list' button is disabled

  Scenario: No items in selected list
      Given the selected list does not have items
      Then the 'move all to options list' button is disabled
