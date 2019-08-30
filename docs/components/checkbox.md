# Checkbox

[Live demo](https://ui-core.dhis2.nu/?path=/story/checkbox--default) -
[Design system](https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md)

## Usage 

### Import

```js
import { Checkbox } from '@dhis2/ui-core'
```

### JSX

```js-jsx
<Checkbox
    value="ex"
    name="ex"
    label="Checkbox"
    onChange={() => {}}
/>
```

### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onChange|`func`||Yes||
|value|`string`||Yes||
|name|`string`||Yes||
|label|`string`||Yes||
|tabIndex|`string`||||
|className|`string`||||
|onFocus|`func`||||
|onBlur|`func`||||
|icon|`element`||||
|indeterminate|`bool`||||
|required|`bool`||||
|checked|`bool`||||
|disabled|`bool`||||
|valid|`custom`||||
|warning|`custom`||||
|error|`custom`||||
|initialFocus|`bool`||||

