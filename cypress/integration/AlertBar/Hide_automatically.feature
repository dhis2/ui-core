Feature: The AlertBars will hide automatically

    Scenario: AlertBars hides automatically after the default time
        Given an AlertBar will hide after the default time
        When the default time has passed
        Then the AlertBar will not be visible

    Scenario: AlertBars hides automatically after a custom time
        Given an AlertBar will hide after a custom time
        When the custom time has passed
        Then the AlertBar will not be visible
