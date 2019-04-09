# Input Field API

This is a rich input field, allowing to show errors,
hint texts and well as validity states like valid, warning and error.

## API

This is a list of supported prop types:

| Property    | Required | Default value | Possibl values |
|-------------|----------|---------------|--------------- |
| disabled    | No       | false         | Boolean |
| help        | No       | ''            | String |
| focus       | No       | false         | Boolean |
| kind        | No       | 'default'     | [Input Kinds](./constants.md#input-kinds) |
| label       | No       | ''            | String |
| name        | Yes      | n/a           | String |
| onChange    | Yes      | n/a           | Function |
| placeholder | No       | ''            | String |
| required    | No       | false         | Boolean |
| size        | No       | 'default'     | [Input Sizes](./constants.md#input-sizes) |
| status      | No       | 'default'     | [Statuses](./constants.md#statuses) |
| type        | No       | 'text'        | [Input types](./constants.md#input-types) |
| value       | No       | ''            | string |
