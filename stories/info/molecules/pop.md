# Context

The `Context` component is a container for displaying information/options
to the user in a context menu like style supporting multiple levels.
In combination with the `Menu` component, it can be used to create 
a context menu.

## Usage

Every `Context` component needs an anchor to position itself against.
That anchor needs to be passed as a component reference created with
`React.createRef` (do not pass the `current` property, pass the ref itself!)

Each `Context` level needs to know it's depth, except the root level 
(the `level` will default to 0) in order to have to correct z-index.

The component doesn't handle closing other `Context` levels,
so the implementing parent component will need to make sure that 
other levels of the same hierarchy are closed.
