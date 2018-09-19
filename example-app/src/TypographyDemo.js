import React, { Component } from 'react'

import Paper from 'ui/Paper';

import Logo from 'ui/Logo/Logo';

export default class TypographyDemo extends Component {
    render() {
        return (
            <Paper elevation={6} padded>
                <h3>typography</h3>
                <hr/>
                <h4>Classes</h4>
                <table>
                    <tbody>
                        <tr>
                            <th><strong>class</strong></th>
                            <th><strong>example</strong></th>
                        </tr>
                        <tr>
                            <td><pre>.primary-text</pre></td>
                            <td><span class="primary-text">paragraph example</span></td>
                        </tr>
                        <tr>
                            <td><pre>.secondary-text</pre></td>
                            <td><span class="secondary-text">paragraph example</span></td>
                        </tr>
                        <tr>
                            <td><pre>.subtitle-primary</pre></td>
                            <td><span class="subtitle-primary">paragraph example</span></td>
                        </tr>
                        <tr>
                            <td><pre>.subtitle-secondary</pre></td>
                            <td><span class="subtitle-secondary">paragraph example</span></td>
                        </tr>
                        <tr>
                            <td><pre>.overline</pre></td>
                            <td><span class="overline">paragraph example</span></td>
                        </tr>
                    </tbody>
                </table>
                <br/><br/>
                <h4>Elements</h4>
                <table>
                    <tbody>
                        <tr>
                            <th><strong>element</strong></th>
                            <th><strong>example</strong></th>
                        </tr>
                        <tr>
                            <td><pre>&lt;a&gt;</pre></td>
                            <td><a href="#">paragraph example</a></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;caption&gt;</pre></td>
                            <td><caption>paragraph example</caption></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;p&gt;</pre></td>
                            <td><p>paragraph example</p></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;h1&gt;</pre></td>
                            <td><h1>paragraph example</h1></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;h2&gt;</pre></td>
                            <td><h2>paragraph example</h2></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;h3&gt;</pre></td>
                            <td><h3>paragraph example</h3></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;h4&gt;</pre></td>
                            <td><h4>paragraph example</h4></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;h5&gt;</pre></td>
                            <td><h5>paragraph example</h5></td>
                        </tr>
                        <tr>
                            <td><pre>&lt;h6&gt;</pre></td>
                            <td><h6>paragraph example</h6></td>
                        </tr>
                    </tbody>
                </table>
            </Paper>
        )
    }
}
