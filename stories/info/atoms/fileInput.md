# FileInput

This is a `Button` with a hidden file input. When the button is clicked a file dialog appears and when a file is selected, the input's `FileList` instance is passed to the onChange handler. For security reasons, you cannot programmatically set a value to a file input. As a consequence of this, this component is not strictly speaking a "controlled input". There is no `value` prop because you simply cannot set it.

## FileInput.SelectedFile

This is a component that can be placed below the `FileInput` to show a list of files that have been selected locally, or have been uploaded before. When the `loading` prop is set to `true`, this component will show a loading icon and a "cancel" link. If `loading` is set to `false`, it will show a paperclip icon and a "remove" link.

## FileInput.PlaceHolder

A styled paragraph that you can place below the `FileInput` when no files have been selected yet.
