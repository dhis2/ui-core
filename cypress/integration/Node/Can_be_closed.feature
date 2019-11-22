Feature: The Node has an onClose api

    Scenario: The user closes the Node
        Given a closed Node is rendered
        And the Node is provided with an onClose handler
        When the arrow is clicked
        Then the onClose handler is called
