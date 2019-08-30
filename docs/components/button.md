# Button

[Live demo](https://ui-core.dhis2.nu/?path=/story/button-basic--default) -
[Design system](https://github.com/dhis2/design-system/blob/master/atoms/button.md)

## Usage 

### Import

```js
import { Button } from '@dhis2/ui-core'
```

### JSX

```js-jsx
<Button>
    The button text
</Button>
```

### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`string`|||The label of the button|
|onClick|`func`||||
|className|`string`||||
|icon|`element`||||
|name|`string`||||
|value|`string`||||
|type|`enum`|`'button'`|||
|small|`custom`|||`small`, and `large` are mutually exclusive boolean props|
|large|`custom`|||`small`, and `large` are mutually exclusive boolean props|
|primary|`custom`|||`primary`, `secondary`, and `destructive` are mutually exclusive boolean props|
|secondary|`custom`|||`primary`, `secondary`, and `destructive` are mutually exclusive boolean props|
|destructive|`custom`|||`primary`, `secondary`, and `destructive` are mutually exclusive boolean props|
|disabled|`bool`||||
|initialFocus|`bool`||||

