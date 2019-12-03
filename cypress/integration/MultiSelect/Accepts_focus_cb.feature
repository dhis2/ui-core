Feature: Calls onFocus cb when focused

    Scenario: Focusing a MultiSelect through clicking
        Given a MultiSelect with onFocus is rendered
        And an onFocus handler is attached
        When the MultiSelect input is clicked
        Then the onFocus handler is called
