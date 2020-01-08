Feature: The Node has an onOpen api

    Scenario: The user opens the Node
        Given a closed Node is rendered
        And the Node is provided with an onOpen handler
        When the arrow is clicked
        Then the onOpen handler is called
