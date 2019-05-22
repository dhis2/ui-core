import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Checkbox, InputField, Radio, SelectField } from '../src'

class Form extends React.Component {
    state = {
        title: 'Mr',
        name: '',
        foodWish: '',
        allergies: [],
    }

    onSubmit = e => {
        e.preventDefault()
        alert(JSON.stringify(this.state, null, 2))
    }

    setTitle = event =>
        this.setState({
            title: event.target.value,
        })

    setName = event =>
        this.setState({
            name: event.target.value,
        })

    setFoodWish = event =>
        this.setState({
            foodWish: event.target.value,
        })

    updateAllergies = event => {
        const { value, checked } = event.target

        if (checked && this.state.allergies.indexOf(value) === -1) {
            this.setState({ allergies: [...this.state.allergies, value] })
        } else if (!checked && this.state.allergies.indexOf(value) !== -1) {
            const index = this.state.allergies.findIndex(v => v === value)
            this.setState({
                allergies:
                    index === 0
                        ? this.state.allergies.slice(1)
                        : [
                              ...this.state.allergies.slice(0, index),
                              ...this.state.allergies.slice(index + 1),
                          ],
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <SelectField
                        name="title"
                        onChange={this.setTitle}
                        value={this.state.title}
                        label="Title"
                        filled={this.props.filled}
                    >
                        <option value="mr">mr.</option>
                        <option value="ms">ms.</option>
                        <option value="other">other</option>
                    </SelectField>
                </div>

                <div style={{ marginBottom: 10 }}>
                    <InputField
                        name="name"
                        label="name"
                        value={this.state.name}
                        onChange={this.setName}
                        filled={this.props.filled}
                    />
                </div>

                <p>
                    food wish:
                    <br />
                    <Radio
                        checked={this.state.foodWish === 'carnivore'}
                        name="foodWish"
                        value="carnivore"
                        label="carnivore"
                        onChange={this.setFoodWish}
                    />
                    <Radio
                        checked={this.state.foodWish === 'veggie'}
                        name="foodWish"
                        value="veggie"
                        label="veggie"
                        onChange={this.setFoodWish}
                    />
                    <Radio
                        checked={this.state.foodWish === 'vegan'}
                        name="foodWish"
                        value="vegan"
                        label="vegan"
                        onChange={this.setFoodWish}
                    />
                </p>

                <p>
                    allergies:
                    <br />
                    <Checkbox
                        checked={this.state.allergies.indexOf('seafood') !== -1}
                        name="allergies"
                        value="seafood"
                        label="sea food"
                        onChange={this.updateAllergies}
                    />
                    <Checkbox
                        checked={this.state.allergies.indexOf('nuts') !== -1}
                        name="allergies"
                        value="nuts"
                        label="nuts"
                        onChange={this.updateAllergies}
                    />
                </p>

                <p>
                    <Button primary type="submit">
                        Submit
                    </Button>
                </p>
            </form>
        )
    }
}

storiesOf('Multiple Form Inputs', module)
    .add('Form (outlined)', () => <Form />)
    .add('Form (filled)', () => <Form filled />)
