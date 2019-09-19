import React from 'react'
import { shallow, mount } from 'enzyme'
import { Checkbox } from '../Checkbox.js'

const defaultProps = {
    name: 'name',
    label: 'label',
    onChange: () => {},
}

describe('<Checkbox>', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Checkbox {...defaultProps} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('calls onChange when changed', () => {
        const onChange = jest.fn()
        const wrapper = mount(
            <Checkbox {...defaultProps} onChange={onChange} />
        )

        wrapper.find('input').simulate('change', { target: { checked: true } })

        expect(onChange).toHaveBeenCalled()
    })
})
