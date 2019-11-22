Feature: Filter options list

  Background:
    Given filtering is enabled
    And the options list is being filtered

  Scenario: Filtering with results
    When the result is not empty
    Then all the matching items are shown in the options list

  Scenario: Filtering without results
    When the result is empty
    Then no items are shown in the options list
    And information is displayed that no items matched the filter
