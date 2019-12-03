Feature: Calls onFocus cb when focused

    Scenario: Focusing a SingleSelect through clicking
        Given a SingleSelect with onFocus is rendered
        And an onFocus handler is attached
        When the SingleSelect input is clicked
        Then the onFocus handler is called
