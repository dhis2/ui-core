# Input Field API

This is a rich input field, allowing to show errors,
hint texts and well as validity states like valid, warning and error.

# Gotchas

There are some things that might require some tweaking,
here is a list of possible gotchas.

## Label background

In order to match the background of the container the `InputField` is placed in,
you can overwrite the background color of the label by providing a className 
or inline style object via the `styles.label` prop.

### Example with styled-jsx

~~~jsx
import React, { Fragment } from 'react'
import { resolve } from 'styled-jsx/css'

const customLabelStyles = resolve`
  .label {
    background: red;
  }
`

const NewLabel = () => (
  <Fragment>
    <Input {...inputProps} styles={{ label: customLabelStyles.className }} />
    <style>customLabelStyles.styles</style>
  </Fragment>
)
~~~

### Example with inline-styles

Alternatively you can simply pass a styled object instead of a className,
which will add inline styles to the component

~~~jsx
import React, { Fragment } from 'react'
import { resolve } from 'styled-jsx/css'

const customLabelStyles = {
  background: 'red',
}

const NewLabel = () => (
  <Fragment>
    <Input {...inputProps} styles={{ label: customLabelStyles }} />
  </Fragment>
)
~~~

### Limits of styling

The input does not support changing text color, so make sure
to use a background that will work with the default colors
