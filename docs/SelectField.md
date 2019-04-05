# Select Field API

This is a rich select field, allowing to show errors,
hint texts and well as validity states like valid, warning and error.
The `list` property supports a second level, which will be rendered as
optgroup. Right now, the parent option will be rendered as a choosalbe option
as well and it's label will be the label for the optgroup.

## API

This is a list of supported prop types:

| Property    | Required | Default value | Possibl values |
|-------------|----------|---------------|--------------- |
| className   | No       | ''            | String |
| disabled    | No       | false         | Boolean |
| help        | No       | ''            | String |
| kind        | No       | 'default'     | [Input Kinds](./constants.md#input-kinds) |
| label       | Yes      | n/a           | String |
| list        | Yes      | n/a           | [Option List](#references-1) |
| name        | Yes      | n/a           | String |
| onFocus     | No       | null          | Function |
| onBlur      | NO       | null          | Function |
| required    | No       | false         | Boolean |
| size        | No       | 'default'     | [Input Sizes](./constants.md#input-sizes) |
| status      | No       | 'default'     | [Statuses](./constants.md#statuses) |
| value       | Yes      | n/a           | string |

<hr>

<a id="references-1"></a>
## References
**1. `list` property type**

```js
Array<{
  label: string;
  value: string;
  list?: Array<{
    label: string;
    value: string;
  }>;
}>
```
