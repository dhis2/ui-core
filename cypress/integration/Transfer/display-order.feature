Feature: Display order of items in lists

  Scenario: All supplied options are rendered in the options-side
    Given none of the supplied options have been selected
    Then the order of the available options matches the order of the supplied options

  Scenario: Some of the supplied options have been selected
    Given some of the supplied options have been selected
    Then the order of the remaining available options matches the order of the supplied options

  Scenario: A single selected options is deselected
    Given some of the supplied options have been selected
    When one selected option is deselected
    Then it takes its position according to the order of the supplied options

  Scenario: Multiple selected options are deselected
    Given some of the supplied options have been selected
    When multiple selected option are deselected
    Then all take the position according to the order of the supplied options

  Scenario: An available option gets selected
    Given some available options are available
    When one option gets selected
    Then it is added to the end of the selected options list

  Scenario: Multiple available options get selected
    Given some available options are available
    When multiple options get selected
    Then they are added to the end of the selected options list in the order they have been highlighted
