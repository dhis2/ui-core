# Button

## Props
| Name                          | Type    | Default  | Required | Description |
| ----------------------------- | ------- | -------- | -------- | ----------- |
| className                     | string  |          | false    |             |
| icon                          | element |          | false    |             |
| name                          | string  |          | false    |             |
| value                         | string  |          | false    |             |
| [type](#markdown-header-type) | enum    | 'button' | false    |             |
| small                         | bool    | false    | false    |             |
| large                         | bool    | false    | false    |             |
| primary                       | bool    | false    | false    |             |
| secondary                     | bool    | false    | false    |             |
| destructive                   | bool    | false    | false    |             |
| disabled                      | bool    | false    | false    |             |
| onClick                       | func    | () => {} | false    |             |

## Complex Props

### type
Type: _enum_

**type** should be one of the following values:

| Value  | Type   |
| ------ | ------ |
| submit | String |
| reset  | String |
| button | String |


# Card

## Props
| Name      | Type   | Default | Required | Description |
| --------- | ------ | ------- | -------- | ----------- |
| className | string |         | false    |             |
| children  | node   |         | false    |             |


# Checkbox

## Props
| Name           | Type   | Default | Required | Description |
| -------------- | ------ | ------- | -------- | ----------- |
| name           | string |         | true     |             |
| className      | string |         | false    |             |
| label          | string |         | false    |             |
| indeterminate  | bool   | false   | false    |             |
| required       | bool   | false   | false    |             |
| checked        | bool   | false   | false    |             |
| defaultChecked | bool   | false   | false    |             |
| disabled       | bool   | false   | false    |             |
| valid          | bool   | false   | false    |             |
| warning        | bool   | false   | false    |             |
| error          | bool   | false   | false    |             |
| onChange       | func   |         | false    |             |


# Chip

## Props
| Name      | Type    | Default | Required | Description |
| --------- | ------- | ------- | -------- | ----------- |
| children  | string  |         | true     |             |
| className | string  |         | false    |             |
| icon      | element |         | false    |             |
| onClick   | func    |         | false    |             |
| onRemove  | func    |         | false    |             |
| selected  | bool    | false   | false    |             |
| disabled  | bool    | false   | false    |             |
| dragging  | bool    | false   | false    |             |
| overflow  | bool    | false   | false    |             |


# CircularProgress

## Props
| Name      | Type   | Default | Required | Description |
| --------- | ------ | ------- | -------- | ----------- |
| className | string |         | false    |             |
| overlay   | bool   | false   | false    |             |
| small     | bool   | false   | false    |             |
| large     | bool   | false   | false    |             |


# Divider

## Props
| Name      | Type   | Default | Required | Description |
| --------- | ------ | ------- | -------- | ----------- |
| className | string |         | false    |             |
| margin    | string | '8px 0' | false    |             |


# DropdownButton

## Props
| Name        | Type    | Default | Required | Description |
| ----------- | ------- | ------- | -------- | ----------- |
| className   | string  |         | false    |             |
| component   | element |         | true     |             |
| icon        | element |         | false    |             |
| children    | string  |         | false    |             |
| small       | bool    | false   | false    |             |
| large       | bool    | false   | false    |             |
| primary     | bool    | false   | false    |             |
| secondary   | bool    | false   | false    |             |
| destructive | bool    | false   | false    |             |
| disabled    | bool    | false   | false    |             |
| onClick     | func    |         | false    |             |


# Help

## Props
| Name      | Type   | Default | Required | Description |
| --------- | ------ | ------- | -------- | ----------- |
| className | string |         | false    |             |
| children  | string |         | true     |             |
| error     | bool   | false   | false    |             |
| valid     | bool   | false   | false    |             |
| warning   | bool   | false   | false    |             |


# InputField

## Props
| Name                          | Type   | Default  | Required | Description                                                    |
| ----------------------------- | ------ | -------- | -------- | -------------------------------------------------------------- |
| name                          | string |          | true     |                                                                |
| label                         | string |          | true     |                                                                |
| className                     | string |          | false    |                                                                |
| placeholder                   | string |          | false    |                                                                |
| value                         | string |          | false    | Controls the value from the outside, bypassing internal state. |
| defaultValue                  | string |          | false    |                                                                |
| required                      | bool   | false    | false    |                                                                |
| disabled                      | bool   | false    | false    |                                                                |
| filled                        | bool   | false    | false    |                                                                |
| dense                         | bool   | false    | false    |                                                                |
| focus                         | bool   | false    | false    |                                                                |
| valid                         | bool   | false    | false    |                                                                |
| warning                       | bool   | false    | false    |                                                                |
| error                         | bool   | false    | false    |                                                                |
| loading                       | bool   | false    | false    |                                                                |
| onBlur                        | func   | () => {} | false    | Handler function which is called with arguments: name, value   |
| onChange                      | func   | () => {} | false    | Handler function which is called with arguments: name, value   |
| onFocus                       | func   | () => {} | false    | Handler function which is called with arguments: name, value   |
| [type](#markdown-header-type) | enum   | 'text'   | false    |                                                                |

## Complex Props

### type
Type: _enum_

**type** should be one of the following values:

| Value    | Type   |
| -------- | ------ |
| text     | String |
| email    | String |
| number   | String |
| password | String |
| url      | String |


# LinearProgress

## Props
| Name      | Type   | Default | Required | Description |
| --------- | ------ | ------- | -------- | ----------- |
| className | string |         | false    |             |
| amount    | number |         | false    |             |
| margin    | string |         | false    |             |


# Menu

## Props
| Name      | Type   | Default | Required | Description |
| --------- | ------ | ------- | -------- | ----------- |
| className | string |         | false    |             |
| children  | any    |         | true     |             |


# MenuItem

## Props
| Name                            | Type    | Default | Required | Description |
| ------------------------------- | ------- | ------- | -------- | ----------- |
| [label](#markdown-header-label) | Union   |         | true     |             |
| value                           | any     |         | false    |             |
| onClick                         | func    |         | false    |             |
| className                       | string  |         | false    |             |
| children                        | element |         | false    |             |
| icon                            | element |         | false    |             |
| dense                           | bool    | false   | false    |             |
| active                          | bool    | false   | false    |             |
| disabled                        | bool    | false   | false    |             |

## Complex Props

### label
Type: _Union_

#### string
string


#### object
object



# Radio

## Props
| Name           | Type   | Default | Required | Description |
| -------------- | ------ | ------- | -------- | ----------- |
| onChange       | func   |         | true     |             |
| name           | string |         | true     |             |
| value          | string |         | true     |             |
| className      | string |         | false    |             |
| label          | string |         | false    |             |
| required       | bool   | false   | false    |             |
| checked        | bool   | false   | false    |             |
| defaultChecked | bool   | false   | false    |             |
| disabled       | bool   | false   | false    |             |
| valid          | bool   | false   | false    |             |
| warning        | bool   | false   | false    |             |
| error          | bool   | false   | false    |             |


# SelectField

## Props
| Name                                  | Type   | Default | Required | Description |
| ------------------------------------- | ------ | ------- | -------- | ----------- |
| name                                  | string |         | true     |             |
| onChange                              | func   |         | true     |             |
| label                                 | string |         | true     |             |
| defaultValue                          | string |         | false    |             |
| value                                 | string |         | false    |             |
| className                             | string |         | false    |             |
| [children](#markdown-header-children) | Union  |         | false    |             |
| required                              | bool   | false   | false    |             |
| disabled                              | bool   | false   | false    |             |
| filled                                | bool   | false   | false    |             |
| dense                                 | bool   | false   | false    |             |
| focus                                 | bool   | false   | false    |             |
| valid                                 | bool   | false   | false    |             |
| warning                               | bool   | false   | false    |             |
| error                                 | bool   | false   | false    |             |
| loading                               | bool   | false   | false    |             |
| onFocus                               | func   |         | false    |             |
| onBlur                                | func   |         | false    |             |

## Complex Props

### children
Type: _Union_

#### arrayOf

> | Name                                 | Type | Required |
> | ------------------------------------ | ---- | -------- |
> | [tagName](#markdown-header-tag-name) | enum | false    |
> 
> ##### tagName
> Type: _enum_
> 
> | Value    | Type   |
> | -------- | ------ |
> | OPTION   | String |
> | OPTGROUP | String |
> 


#### Object

> | Name                                 | Type | Required |
> | ------------------------------------ | ---- | -------- |
> | [tagName](#markdown-header-tag-name) | enum | false    |
> 
> ##### tagName
> Type: _enum_
> 
> | Value    | Type   |
> | -------- | ------ |
> | OPTION   | String |
> | OPTGROUP | String |
> 



# SplitButton

## Props
| Name        | Type    | Default  | Required | Description |
| ----------- | ------- | -------- | -------- | ----------- |
| component   | element |          | true     |             |
| className   | string  |          | false    |             |
| name        | string  |          | false    |             |
| value       | string  |          | false    |             |
| icon        | element |          | false    |             |
| small       | bool    | false    | false    |             |
| large       | bool    | false    | false    |             |
| primary     | bool    | false    | false    |             |
| secondary   | bool    | false    | false    |             |
| destructive | bool    | false    | false    |             |
| disabled    | bool    | false    | false    |             |
| onClick     | func    | () => {} | false    |             |


# Switch

## Props
| Name           | Type   | Default  | Required | Description |
| -------------- | ------ | -------- | -------- | ----------- |
| name           | string |          | true     |             |
| onChange       | func   | () => {} | false    |             |
| className      | string |          | false    |             |
| label          | string |          | false    |             |
| required       | bool   | false    | false    |             |
| defaultChecked | bool   | false    | false    |             |
| checked        | bool   | false    | false    |             |
| disabled       | bool   | false    | false    |             |
| valid          | bool   | false    | false    |             |
| warning        | bool   | false    | false    |             |
| error          | bool   | false    | false    |             |


# CssReset
## No props

# DropMenu

## Props
| Name      | Type       | Default | Required | Description                                                       |
| --------- | ---------- | ------- | -------- | ----------------------------------------------------------------- |
| className | string     |         | false    |                                                                   |
| component | element    |         | false    | The component to use as the dropdown component                    |
| onClose   | func       |         | false    | Function to trigger when click happens outside of the DOM element |
| stayOpen  | bool       | false   | false    | Decides if the menu should call the onClose function or not       |
| anchorEl  | instanceOf |         | false    | DOM node to position itself against                               |
