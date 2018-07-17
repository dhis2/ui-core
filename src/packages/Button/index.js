import React from 'react';
import Button from './Button';
import * as VARIANTS from './variants';

export { default as DropdownButton } from './DropdownButton';
export const FlatButton = props => <Button variant={VARIANTS.FLAT} {...props} />;
export const RaisedButton = props => <Button variant={VARIANTS.RAISED} {...props} />;
export const PrimaryButton = props => <Button variant={VARIANTS.PRIMARY} {...props} />;
export const OutlinedButton = props => <Button variant={VARIANTS.OUTLINED} {...props} />;
export const CircleButton = props => <Button variant={VARIANTS.CIRCLE} {...props} />;
