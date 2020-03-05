Feature: Highlight item in lists

  Scenario Outline: The user clicks an item that is not already highlighted
    Given the <type> list has one or more items
    When the user clicks an item in the list
    Then it is highlighted
    And any other highlighted items are no longer highlighted

    Examples:
        | type      |
        | option    |
        | selected |

  Scenario Outline: The user presses enter on a focussed item that is not already highlighted
    Given the <type> list has one or more items
    And an item that has keyboard focus
    When the user presses the enter or space key
    Then the focussed item is highlighted
    And any other highlighted items are no longer highlighted

    Examples:
        | type      |
        | option    |
        | selected |

  Scenario Outline: The user clicks a highlighted item
    Given the <type> list has one or more items
    When the user clicks an item in the list that is highlighted
    Then it is not highlighted

    Examples:
        | type      |
        | option    |
        | selected |

  Scenario Outline: The user presses enter on a focussed highlighted item
    Given the <type> list has one or more items
    And an item that has keyboard focus
    When the user presses the enter or space key on  an item in the list that is highlighted
    Then the item is not highlighted

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
