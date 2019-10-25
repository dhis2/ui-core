Feature: Tooltip positioning

    Background:
        Given a tooltip with a width of 300px and height of 28px
        And an anchor element that renders a tooltip when a user hovers the cursor over the anchor

    Scenario: Default positioning
        Given the anchor has more than 32px above, before the limit of the <body> element
        When the tooltip is rendered
        Then the tooltip is rendered above the the anchor
        And the tooltip is offset by a top margin of 4px
        And the tooltip is center aligned with the anchor

    Scenario: Flipped vertical
        Given the anchor has less than 32px above, before the limit of the <body> element
        When the tooltip is rendered
        Then the tooltip is rendered below the anchor
        And the tooltip is offset by a bottom margin of 4px
        And the tooltip is center aligned with the anchor

    Scenario: Adjusted horiztonal position
        Given the anchor has, measured from its center, 100px space to the right before the limit of the <body> element
        When the tooltip is rendered
        Then the tooltip is rendered above the anchor
        And the tooltip is offset by a top margin of 4px
        And the tooltip is centered aligned with the anchor
        But the tooltip is horizontally offset to the left by 50px
        #Should this be generic, rather than using specific numbers? I couldn't find a concise way of wording it generically!

    Scenario: Adjusted width
        Given the anchor has, measured from its center, less than 150px space to the left and right before the limit of the <body> element
        When the tooltip is rendered
        Then the tooltip is rendered above the anchor
        And the tooltip is offset by a top margin of 4px
        And the tooltip is centered aligned with the anchor
        And the tooltip width is reduced to fit in the available space

    # !!Note: this is a exact copy of popover positioning
