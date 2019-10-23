Feature: Generic position options

    # *** Trying to be specific with positioning of the elements here, because just 'above' or 'below' etc. seems ambiguous

    Background:
        Given an anchor element
        And a positioned element that is rendered when the user clicks on the anchor

    Scenario: Top-middle position
        When the positioned element is rendered
        Then it is rendered above the the anchor element, the bottom of the positioned element immediately above the top of the anchor element
        And it is horizontally center aligned with the anchor element

    Scenario: Top-left position
        When the positioned element is rendered
        Then it is rendered above the the anchor element, the bottom of the positioned element immediately above the top of the anchor element
        And it is horizontally left aligned with the anchor element

    Scenario: Top-right position
        When the positioned element is rendered
        Then it is rendered above the the anchor element, the bottom of the positioned element immediately above the top of the anchor element
        And it is horizontally right aligned with the anchor element

    Scenario: Bottom-middle position
        When the positioned element is rendered
        Then it is rendered below the the anchor element, the top of the positioned element immediately below the bottom of the anchor element
        And it is horizontally center aligned with the anchor element

    Scenario: Bottom-left position
        When the positioned element is rendered
        Then it is rendered below the the anchor element, the top of the positioned element immediately below the bottom of the anchor element
        And it is horizontally left aligned with the anchor element

    Scenario: Bottom-right position
        When the positioned element is rendered
        Then it is rendered below the the anchor element, the top of the positioned element immediately below the bottom of the anchor element
        And it is horizontally right aligned with the anchor element

    Scenario: Left position
        When the positioned element is rendered
        Then it is rendered to the left the the anchor element, the right of the positioned element immediately to the left of the left boundary of the anchor element
        And it is vertically top aligned with the anchor element

    Scenario: Right position
        When the positioned element is rendered
        Then it is rendered to the right the the anchor element, the left of the positioned element immediately to the right of the right boundary of the anchor element
        And it is vertically top aligned with the anchor element
