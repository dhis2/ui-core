Feature: Popover positioning

    Background:
        Given the popover has a width of 360px and height of 200px

    Scenario: Spacing between anchor and popover
        When the anchor is clicked
        Then there is some space between the anchor and the popover

    Scenario: Default positioning
        Given the space above the anchor is more than the limit
        When the anchor is clicked
        Then the popover is rendered above the the anchor
        And the popover is center aligned with the anchor

    Scenario: Flipped vertical
        Given the space above the anchor is less than the limit
        When the anchor is clicked
        Then the popover is rendered below the anchor
        And the popover is center aligned with the anchor

    Scenario: Adjusted width
        Given there is not enough horizontal space available on either side to render the popover
        When the anchor is clicked
        Then the popover is rendered above the anchor
        And the popover is centered aligned with the anchor
        And the popover width is reduced to fit in the available space

        #!!Note: this is a exact copy of tooltip positioning
