Feature: Drag and drop selected items

  Background:
    Given reordering is enabled

  # I have excluded any design information from this scenario: opacity, how the items look when dragging etc.
  Scenario: Drag and drop a single selected item
    Given the selected list has two or more items
    When an item is clicked and dragged
    Then the item is removed from its original position in the list
    And the item is placed in the list at the cursor position when the click is released

  Scenario: Drag and drop two or more selected items
    Given the selected list has three or more items
    And two or more highlighted items
    When one of the highlighted items is clicked and dragged
    Then the items are removed from their original positions
    And the items are placed in the list at the cursor position when the click is released
    And the items are ordered based on their previous ordering

  Scenario: Disable reordering with a single item
    Given the selected list has one item
    And one highlighted item
    When the highlighted item is clicked and dragged
    Then the highlighted item remains in position and does not move
