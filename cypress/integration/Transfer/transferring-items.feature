Feature: Transferring items between lists

  Scenario: Transfer from options list to selected list
    Given one or more items in the options list are highlighted
    When the 'move to selected list' button is clicked
    Then the highlighted items are removed from the options list
    And the highlighted items are visible in the selected list

  Scenario: Transfer from selected list to options list
    Given one or more items in the selected list are highlighted
    When the 'move to options list' button is clicked
    Then the highlighted items are removed from the selected list
    And the highlighted items are visible in the options list

  Scenario: Transfer all from options list
    Given the options list has one or more items
    When the 'move all to selected list' button is clicked
    Then all items are removed from the options list
    And all items removed from options list are visible in the selected list

  Scenario: Transfer all from selected list
    Given the selected list has one or more items
    When the 'move all to options list' button is clicked
    Then all items are removed from the selected list
    And all items removed from selected list are visible in the options list

  Scenario: Transfer item with double click
    When an item is double clicked
    Then the item is removed from its current list
    And the item is visible in the other list

  Scenario: Double click an item when others are highlighted
    Given the options or selected list has two or more items
    And one or more items are highlighted
    When an item is double clicked
    Then the item is removed from its current list
    And the item is visible in the other list
    And the previously highlighted items are no longer highlighted
