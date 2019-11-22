Feature: Reorder items in the selected list

  Background:
    Given reordering of items is enabled

# I created two scenarios for up and down reordering because I wanted to incorporate a check for 'is first' or 'is last' and it seemed overly ambiguous to write this in a single scenario. Or, is it enough that I have included the 'Disable move buttons' scenarios at the bottom of this file, so that doesn't need to be handled in the basic scenarios at the top?

  Scenario Outline: Reorder items upwards using buttons
      Given the selected list has two or more items
      And the <previous> item is highlighted
      When the 'move up' button is pressed
      Then the highlighted item is moved to the <next> place

      Examples:
          | previous | next |
          | 1        | 1    |
          | 2        | 1    |
          | 3        | 2    |

  Scenario Outline: Reorder items upwards using buttons
      Given the selected list has three items
      And the <previous> item is highlighted
      When the 'move down' button is pressed
      Then the highlighted item is moved to the <next> place

      Examples:
          | previous | next |
          | 1        | 2    |
          | 2        | 3    |
          | 3        | 3    |

  Scenario: Disable reorder buttons when no items highlighted
      Given the selected list has two or more items
      When no items are highlighted in the list
      Then the 'move up' and 'move down' reorder buttons are disabled
