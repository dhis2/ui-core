# FAQ

## How to avoid a global style rule from affecting a ui-core component?

The best practice is that each component has styles that are scoped to
that component to avoid style rules that leak out from one component and
bleeds into another component.

Generally all the CSS-in-JS solutions grant this out of the box, and
this is only a problem when using global stylesheets, e.g. by importing
`index.css` in an application and adding global rules to it.

There are two ways to work around the problem.

#### Example CSS

Given the following CSS:

`index.css`:

```
div {
    padding: 20px;
}

.disabled {
    opacity: 0.5;
}
```

These styles will bleed into all components that use `div` or
`.disabled` and doesn't itself set those rules and win by specificity.

If a rule is not set by the component, the technique that overrides
through the use of `className` still applies, it's just "softer" and
does not require `!important` to counter the rules.

If the rules do something `!important`, the only course of action is to
counter it with another `!important` rule. Given the following CSS:

`index.css`:

```
div {
    padding: 20px !important;
}

.disabled {
    opacity: 0.5 !important;
}
```

Now there is no way for specificity to win, and all components that use
those classes or elements will inherit those rules.

#### Cascading override

By using a cascading override, the style bleed can be stopped by
utilizing a wrapper element for the component, and this will cascade
down to the children of the component as well. The technique allows for
a workaround which does not affect the component itself, and is easily
removed when the App no longer uses leaky styles.

Before:

```js-jsx
<div>
    {...}
    <Component disabled />
</div>
```

After:

```js-jsx
<div>
    {...}
    <div className="fix-container">
        <Component disabled />
    </div>
</div>
```

```css
.fix-container .disabled {
    /* will undo the overriding of global styles for this component */
    opacity: 1 !important;
}
```

#### Class name override

If you cannot control the CSS that bleeds into `ui` components, then
you need to define a class that counters the effects of the rule, and
use the `className` prop to override the global rule.

`index.css`:

```
.fix {
    opacity: 1 !important;
    padding: 10px !important;
}
```

Pass that to the component through `className='fix'`, and it should
negate the troublesome CSS. Once the global rules in the App has been
removed, it is possible to remove the `className='fix'` as well. This
should be considered a temporary measure.
