Feature: Position of select menu dropdown

Given the select menu dropdown has a height of 368px, the default maximum
And the select menu dropdown has a width of 280px, the default maximum
And the select menu dropdown opens when the select is clicked

Scenario: Default rendering
Given a select menu with more than 368px space below, before the end of the <body> element
When the select menu dropdown is rendered
Then it is rendered below the select
And it is left aligned with the select

Scenario: Flipped rendering when insufficient space below
Given a select menu with less than 368px space below, before the end of the <body> element
When the select menu dropdown is rendered
Then it is rendered above the select
And it is left aligned with the select

Scenario: A select with less than 368px available space below and above
Given a select menu with less than 368px space before the limits of the <body> element
When the select menu dropdown is rendered
Then it is rendered below the select
And the height of the select dropdown menu is reduced to fit within the <body> element
