Feature: Calls onBlur cb when blurred

    Scenario: Blurring a SingleSelect through clicking away
        Given a SingleSelect with onBlur is rendered
        And an onBlur handler is attached
        And the SingleSelect input is clicked
        And the SingleSelect has focus
        When the user clicks the backdrop
        Then the onBlur handler is called
