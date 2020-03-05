Feature: Disable transfer buttons when actions are not possible

  Scenario: None of the available options is highlighted
      Given the options list has items
      When no option items are highlighted
      Then the 'move to selected list' button is disabled

  Scenario: Some of the available options is highlighted
      Given the options list has items
      When some option items are highlighted
      Then the 'move to selected list' button is enabled

  Scenario: None of the selected options is highlighted
      Given the selected list has items
      When no selected items are highlighted
      Then the 'move to options list' button is disabled

  Scenario: Some of the selected options is highlighted
      Given the selected list has items
      When some selected items are highlighted
      Then the 'move to options list' button is enabled

  Scenario: The transfer does not have any options at all
      Given the transfer does not have any options
      Then the 'move all to selected list' button is disabled

  Scenario: All options are on the selected side
      Given all options have been selected
      Then the 'move all to selected list' button is disabled

  Scenario: Some items in options list
      Given the options list has items
      Then the 'move all to selected list' button is enabled

  Scenario: No items in selected list
      Given the selected list does not have items
      Then the 'move all to options list' button is disabled

  Scenario: Some items in selected list
      Given the selected list has items
      Then the 'move all to options list' button is enabled
