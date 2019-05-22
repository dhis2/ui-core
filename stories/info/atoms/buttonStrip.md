# ButtonStrip

A ButtonStrip is a framing element that can be used to layout an inline set of `Buttons`. This component will only accept instances of the `Button` component as its children and requires at least 2 children.

## Usage

In its default configuration, the `ButtonStrip` will add 16px of whitespace between the buttons, and it will align them on the left (flex-start). It also accepts the following properties:

| Prop       | Type      | Description                                                    |
| ---------- | --------- | -------------------------------------------------------------- |
| `compact`  | `Boolean` | Adds compact styling to the buttons                            |
| `alignEnd` | `Boolean` | Will align the buttons on the right instead of left (flex-end) |

## Examples

Default
![](images/btn-strip-default.png)

Compact
![](images/btn-strip-compact.png)
