Feature: Popover positioning

Given a popover with a width of 360px and height of 200px
And an anchor element that renders a popover when a user clicks the anchor

Scenario: Default positioning
Given the anchor has more than 200px above, before the limit of the <body> element
When the popover is rendered
Then the popover is rendered above the the anchor
And the popover is center aligned with the anchor

Scenario: Flipped vertical
Given the anchor has less than 200px above, before the limit of the <body> element
When the popover is rendered
Then the popover is rendered below the anchor
And the popover is center aligned with the anchor

Scenario: Adjusted width
Given the anchor has, measured from its center, less than 180px space to the right before the limit of the <body> element
When the popover is rendered
Then the popover is rendered above the anchor
And the popover is offset by a top margin of 4px
And the popover is centered aligned with the anchor
And the popover width is reduced to fit in the available space

//!!Note: this is a exact copy of tooltip positioning
