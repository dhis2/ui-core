Feature: Tooltip positioning

    Background:
        Given the tooltip has a width of 300px and height of 28px

    Scenario: Spacing between anchor and tooltip
        When the anchor is clicked
        Then there is some space between the anchor and the tooltip

    Scenario: Default positioning
        Given the space above the anchor is more than the limit
        When the anchor is clicked
        Then the tooltip is rendered above the the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor

    Scenario: Flipped vertical
        Given the space above the anchor is less than the limit
        When the anchor is clicked
        Then the tooltip is rendered below the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor

    Scenario: Adjusted horiztonal position
        Given there is some space between the anchor and either side
        When the anchor is clicked
        Then the tooltip is rendered above the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor
        But the tooltip uses not more than 50% of the space available next to the anchor

    Scenario: Adjusted width
        Given there is not enough horizontal space available on both sides to render the tooltip
        When the anchor is clicked
        Then the tooltip is rendered above the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor
        And the tooltip width is reduced to fit in the available space
