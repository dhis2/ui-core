Feature: The AlertBars will hide automatically

    Scenario: AlertBar hides automatically after the default time
        Given a default AlertBar is rendered
        When the default time has passed
        Then the AlertBar will not be visible

    Scenario: AlertBars hides automatically after a custom time
        Given an AlertBar with a custom timeout is rendered
        When the custom time has passed
        Then the AlertBar will not be visible
