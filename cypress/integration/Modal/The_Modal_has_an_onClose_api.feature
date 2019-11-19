Feature: The Modal has an onClose api

    Scenario: The user clicks on the Backdrop
        Given a Modal is rendered
        And the Modal is provided with an onClose handler
        When the Backdrop is clicked
        Then the onClose handler is called
