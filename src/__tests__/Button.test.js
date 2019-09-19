import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from '../Button.js'

describe('<Button>', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Button />)

        expect(wrapper).toMatchSnapshot()
    })

    it('calls onClick when clicked', () => {
        const onClick = jest.fn()
        const wrapper = mount(<Button onClick={onClick} />)

        wrapper.find('button').simulate('click')

        expect(onClick).toHaveBeenCalled()
    })
})
