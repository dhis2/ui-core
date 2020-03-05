Feature: Transferring items between lists

  Scenario: The user clicks the 'move to selected list' button
    Given one or more items in the options list are highlighted
    When the user clicks the 'move to selected list' button
    Then the highlighted items are removed from the options list
    And the highlighted items are visible in the selected list
    And the highlighted items are appended to the selected list in the order they were highlighted

  Scenario: The user clicks the 'move to options list' button
    Given one or more items in the selected list are highlighted
    When the user clicks the 'move to options list' button
    Then the highlighted items are removed from the selected list
    And the highlighted items are visible in the options list
    And the highlighted items are in the original options list ordering/placement

  Scenario: The user clicks the 'move all to selected list' button
    Given the options list has one or more items
    When the user clicks the 'move all to selected list' button
    Then all items are removed from the options list
    And all items removed from options list are visible in the selected list
    And the transferred items are appended to the selected list in the order they were displayed in the options list

  Scenario: The user clicks the 'move all to options list' button
    Given the selected list has one or more items
    When the user clicks the 'move all to options list' button
    Then all items are removed from the selected list
    And all items removed from selected list are visible in the options list
    And the options list items are ordered in the original order

  #not sure how we define double click? is it defined by the OS? clicking twice (slowly) would highlight and un-highlight an item
  Scenario: The user double clicks an item in the options list
    When the user double clicks an item in the options list
    Then the item is removed from its options list
    And the item is visible at the bottom of the selected list

  Scenario: The user double clicks an item in the selected list
    When the user double clicks an item in the selected list
    Then the item is removed from the selected list
    And the item is visible in its original position in the options list
