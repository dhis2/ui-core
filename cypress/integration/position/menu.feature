Feature: Position of a menu component

Given the menu component has a height of 368px, the default maximum
And the menu component has a width of 380px, the default maximum
And the menu component is triggered by a user click on an anchor element

Scenario: Default rendering
Given the anchor has more than 368px space below, before the end of the <body> element
When the menu is rendered
Then the menu is rendered below the anchor
And the menu is left aligned with the anchor

Scenario: Flipped vertically
Given the anchor has less than 368px space below, before the end of the <body> element
When the menu is rendered
Then the menu is rendered above the anchor
And the menu is left aligned with the anchor

Scenario: Less than 368px available space below and above anchor
Given the anchor has less than 368px space above and below before the limits of the <body> element
When the menu dropdown is rendered
Then it is rendered below the anchor
And the height of the menu is reduced to fit within the <body> element
But the heght of the menu is not reduced below 50px (and what if it is)?****

Scenario: Flipped horizontally
Given the anchor has less than 128px space to the right, before the limit of the <body> element
When the menu is rendered
Then the menu is rendered below the anchor
And the menu is right aligned with the anchor

Scenario: Forced body overflow
Given the anchor has less than 128px space to the left and the right, before the limit of the <body> element
When the menu is rendered
Then the menu is rendered below the anchor
And the menu is left aligned with the anchor
And the menu overflows the body element
// ¯\_(ツ)_/¯
// The app would need to handle this, this is beyond the scope of the positioning utility
