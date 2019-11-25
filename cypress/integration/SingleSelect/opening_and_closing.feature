Feature: Opening and closing the SingleSelect

    Scenario: The user clicks the SingleSelect input to display the options
        Given a closed SingleSelect with options is rendered
        When the SingleSelect input is clicked
        Then the options are displayed

    Scenario: The user presses the down arrowkey to display the options
        Given a closed SingleSelect with options is rendered
        And the SingleSelect is focused
        When the down arrowkey is pressed on the focused element
        Then the options are displayed

    Scenario: The user presses the up arrowkey to display the options
        Given a closed SingleSelect with options is rendered
        And the SingleSelect is focused
        When the up arrowkey is pressed on the focused element
        Then the options are displayed

    Scenario: The user presses the spacebar to display the options
        Given a closed SingleSelect with options is rendered
        And the SingleSelect is focused
        When the spacebar is pressed on the focused element
        Then the options are displayed

    Scenario: The user clicks the backdrop to hide the options
        Given an open SingleSelect with options is rendered
        When the user clicks the backdrop
        Then the options are not displayed

    Scenario: The user presses the escape key to hide the options
        Given an open SingleSelect with options is rendered
        And the SingleSelect is focused
        When the escape key is pressed on the focused element
        Then the options are not displayed
