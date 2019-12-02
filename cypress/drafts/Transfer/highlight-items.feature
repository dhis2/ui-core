Feature: Highlight item in lists

  Scenario Outline: Highlight a single item on mouse click
    Given the <type> list has one or more items
    When an item is clicked
    Then it is highlighted

    Examples:
        | type      |
        | option    |
        | selected |

  Scenario Outline: Highlight an item with keyboard
    Given the <type> list has one or more items
    And an item that has keyboard focus
    When the Enter key or Space is pressed
    Then the focussed item is highlighted

    Examples:
        | type      |
        | option    |
        | selected |

  Scenario Outline: Highlight multiple items using CMD/CTRL+click
    Given the <type> list has two or more items
    When multiple items are CMD/CTRL+clicked
    Then all of the clicked items are highlighted

    Examples:
        | type      |
        | option    |
        | selected |

  Scenario Outline: Highlight multiple items using SHIFT+click
    Given the <type> list has two or more items
    And a highlighted item
    When any other item is SHIFT+clicked
    Then all items between the highlighted item and the SHIFT+clicked item are highlighted, inclusive of the SHIFT+clicked item

    Examples:
        | type      |
        | option    |
        | selected |
