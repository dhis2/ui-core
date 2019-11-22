Feature: The AlertBar will hide when the user clicks an action

    Scenario: The user clicks the "Cancel" action
        Given an AlertBar has a "Cancel" action
        When the user clicks on the "Cancel" button
        Then the AlertBar will not be visible
