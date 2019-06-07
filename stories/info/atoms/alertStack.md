# AlertStack

The AlertStack is a simple helper component for displaying one or more `AlertBar` components. It does the following:

-   Places the alert-bars horizontally centred at the bottom of the window.
-   Displays the alert-bars in reversed vertical order, so the most recent one is on top
-   Ensures that the alert-bars are always rendered above other page content (because it creates a portal at the end of the `document.body`, has position fixed and highest z-index).

## Example

![](images/alert-stack.png)
