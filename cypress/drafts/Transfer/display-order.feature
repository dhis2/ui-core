Feature: Display order of items in lists

  #Trying to say: the options list does not manipulate the order in any way: is this an redundant scenario? I suppose 'not messing with the order' seems like a feature because the selected list actively changes the order.
  Scenario: The transfer renders the options in the order they're given in
    Given the options list has one or more items
    Then the display order of the options matches the order the options are given in

  #I can't get this one quite right. I'm trying to test for the options list always maintaining its original ordering, even when items are passed back to it.
  Scenario: Items in options list resume order on transfer
    Given the options list has one or more items
    And a selected list that has at two or more items
    When an item is transferred from the selected list to the options list
    Then the item is rendered in the options list in the original order the options were given in

  Scenario: Items in selected list ordered by last added
    Given the options list has one or more items
    And a selected list that has one or more item
    When an item is transferred from the options list to the selected list
    Then the item is rendered at the bottom of the selected list
