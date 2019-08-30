### AlertBar/Action.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|`string`||Yes||
|hide|`func`||Yes||
|onClick|`func`||Yes||

### AlertBar/Actions.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|actions|`custom`||||
|hide|`func`||Yes||

### AlertBar/Dismiss.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onClick|`func`||Yes||

### AlertBar/Icon.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|icon|`custom`||||
|success|`custom`||||
|warning|`custom`||||
|critical|`custom`||||

### AlertBar/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`string`||Yes||
|success|`custom`||||
|warning|`custom`||||
|critical|`custom`||||
|icon|`custom`|`true`|||
|duration|`number`|`8000`|||
|permanent|`bool`||||
|actions|`custom`||||
|onHidden|`func`||||

### AlertBar/Message.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`string`||Yes||

### Button/index.js

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

### ButtonStrip/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`arrayOf`||||
|start|`custom`||||
|middle|`custom`||||
|end|`custom`||||

### Card/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`node`||||

### Checkbox/Icon.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|checked|`bool`||||
|disabled|`bool`||||
|valid|`custom`||||
|error|`custom`||||
|warning|`custom`||||
|indeterminate|`bool`||||
|focus|`bool`||||

### Checkbox/index.js

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

### Checkbox/Input.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onChange|`func`||Yes||
|name|`string`||Yes||
|tabIndex|`string`||||
|onFocus|`func`||||
|onBlur|`func`||||
|checked|`bool`||||
|disabled|`bool`||||
|focus|`bool`||||

### Checkbox/Label.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|disabled|`bool`||||
|required|`bool`||||

### Chip/Content.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|overflow|`bool`||||

### Chip/Icon.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|icon|`element`|||the slot for an icon is 24x24px, bigger elements will be clipped|

### Chip/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`string`||Yes||
|className|`string`||||
|icon|`element`||||
|onClick|`func`||||
|onRemove|`func`||||
|selected|`bool`||||
|disabled|`bool`||||
|dragging|`bool`||||
|overflow|`bool`||||

### Chip/Remove.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onRemove|`func`||||

### CircularLoader/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|small|`custom`||||
|large|`custom`||||

### ComponentCover/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`node`||||
|className|`string`||||

### Divider/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|margin|`string`|``${spacers.dp8} 0``|||

### DropdownButton/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|component|`element`||Yes||
|icon|`element`||||
|children|`string`||||
|small|`custom`||||
|large|`custom`||||
|primary|`custom`||||
|secondary|`custom`||||
|destructive|`custom`||||
|disabled|`bool`||||

### DropMenu/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|component|`element`|||The component to use as the dropdown component|
|onClose|`func`|||Function to trigger when click happens outside of the DOM element|
|stayOpen|`bool`|||Decides if the menu should call the onClose function or not|
|anchorEl|`shape`|||DOM node to position itself against|

### FieldSet/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`node`||Yes||

### FormControl/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`node`||Yes||

### Help/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`string`||Yes||
|error|`custom`||||
|valid|`custom`||||
|warning|`custom`||||
|indent|`bool`||||

### icons/AttachFile.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||

### icons/Cancel.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||

### icons/Close.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||

### icons/FileUpload.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||

### Input/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onChange|`func`||Yes||
|name|`string`||Yes||
|label|`string`||Yes||
|className|`string`||||
|placeholder|`string`||||
|value|`string`||||
|tabIndex|`string`||||
|required|`bool`||||
|disabled|`bool`||||
|filled|`bool`||||
|dense|`bool`||||
|valid|`custom`||||
|warning|`custom`||||
|error|`custom`||||
|loading|`bool`||||
|initialFocus|`bool`||||
|onBlur|`func`|`() => {}`|||
|onFocus|`func`|`() => {}`|||
|type|`enum`|`'text'`|||

### Input/InternalInput.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|name|`string`||Yes||
|type|`string`||Yes||
|onChange|`func`||Yes||
|value|`string`||||
|placeholder|`string`||||
|tabIndex|`string`||||
|onFocus|`func`||||
|onBlur|`func`||||
|focus|`bool`||||
|disabled|`bool`||||
|filled|`bool`||||
|dense|`bool`||||

### Legend/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`node`||Yes||
|required|`bool`||||

### LinearLoader/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|amount|`number`||Yes|set the progression in percentage (without the % suffix)|
|margin|`string`|`spacers.dp12`||set the margin around the loader, can be a full shorthand|
|width|`string`|`'300px'`||set the width of the entire indicator, e.g. '100%' or '300px'.|

### Logo/LogoIconSvg.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|iconColor|`string`||Yes||

### Logo/LogoSvg.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|iconColor|`string`||Yes||
|textColor|`string`||Yes||

### Menu/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`custom`||||
|className|`string`||||

### MenuItem/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|``string`|`object``||Yes||
|value|`any`||||
|href|`string`||||
|onClick|`func`|||handler function called with `value` as the sole argument|
|className|`string`||||
|children|`element`||||
|icon|`element`||||
|dense|`bool`||||
|active|`bool`||||
|disabled|`bool`||||

### MenuList/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|`string`||||
|children|`any`||Yes||

### Modal/Actions.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|``element`|`arrayOf``||Yes||

### Modal/Content.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`node`||Yes||

### Modal/ModalCard.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|``element`|`arrayOf``||Yes||
|small|`custom`||||
|large|`custom`||||

### Modal/Title.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`string`||Yes||

### Node/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|component|`element`||Yes||
|open|`bool`||||
|onOpen|`func`||||
|onClose|`func`||||

### Radio/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onChange|`func`||Yes||
|name|`string`||Yes||
|value|`string`||Yes||
|className|`string`||||
|label|`string`||||
|tabIndex|`string`||||
|icon|`element`||||
|onFocus|`func`||||
|onBlur|`func`||||
|required|`bool`||||
|checked|`bool`||||
|disabled|`bool`||||
|valid|`custom`||||
|warning|`custom`||||
|error|`custom`||||
|initialFocus|`bool`||||

### ScreenCover/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onClick|`func`||||
|className|`string`||||
|children|`node`||||

### Select/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|name|`string`||Yes||
|onChange|`func`||Yes||
|label|`string`||Yes||
|value|`string`||||
|className|`string`||||
|tabIndex|`string`||||
|children|``arrayOf`|`shape``||||
|required|`bool`||||
|disabled|`bool`||||
|filled|`bool`||||
|dense|`bool`||||
|valid|`custom`||||
|warning|`custom`||||
|error|`custom`||||
|loading|`bool`||||
|initialFocus|`bool`||||
|onFocus|`func`||||
|onBlur|`func`||||

### Select/InternalSelect.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|name|`string`||Yes||
|onChange|`func`||Yes||
|value|`string`||||
|tabIndex|`string`||||
|onFocus|`func`||||
|onBlur|`func`||||
|children|``arrayOf`|`shape``||||
|disabled|`bool`||||
|filled|`bool`||||
|dense|`bool`||||
|focus|`bool`||||

### SplitButton/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`string`||||
|component|`element`||Yes||
|onClick|`func`||||
|className|`string`||||
|name|`string`||||
|value|`string`||||
|icon|`element`||||
|small|`bool`||||
|large|`bool`||||
|primary|`custom`||||
|secondary|`custom`||||
|destructive|`custom`||||
|disabled|`bool`||||

### Switch/index.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onChange|`func`||Yes||
|name|`string`||Yes||
|className|`string`||||
|label|`string`||||
|required|`bool`||||
|checked|`bool`||||
|disabled|`bool`||||
|valid|`custom`||||
|warning|`custom`||||
|error|`custom`||||
|initialFocus|`bool`||||
|onFocus|`func`||||
|onBlur|`func`||||

### Tabs/ScrollBar.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|`node`||Yes||

### Tabs/TabBar.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|fixed|`bool`||||

### Tabs/Tab.js

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|icon|`element`||||
|onClick|`func`||||
|addTabRef|`func`||||
|selected|`bool`||||
|disabled|`bool`||||
|children|`node`||||
