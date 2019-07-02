import React from 'react'

import { storiesOf } from '@storybook/react'

import { Button } from '../src/Button'
import { Table } from '../src/Table'
import { TableBody } from '../src/Table/TableBody'
import { TableCell } from '../src/Table/TableCell'
import { TableCellHead } from '../src/Table/TableCellHead'
import { TableCellText } from '../src/Table/TableCellText'
import { TableFoot } from '../src/Table/TableFoot'
import { TableHead } from '../src/Table/TableHead'
import { TableRow } from '../src/Table/TableRow'
import { TableRowHead } from '../src/Table/TableRowHead'

const TableFooterButton = () => (
    <div>
        <Button primary>Table footer button</Button>

        <style jsx>{`
            div {
                text-align: right;
                padding: 16px 0;
            }
        `}</style>
    </div>
)

const Actions = () => (
    <div>
        <a className="icon" href="#">
            ...
        </a>

        <div className="content">
            <p>
                <b>Actions:</b>
            </p>
            <ul>
                <li>
                    <a href="#">Show</a>
                </li>
                <li>
                    <a href="#">Edit</a>
                </li>
                <li>
                    <a href="#">Delete</a>
                </li>
            </ul>
        </div>

        <style jsx>{`
            .content {
                display: none;
            }

            ul {
                padding: 0;
            }

            li {
                font-size: 14px;
                padding: 9px 0;
            }

            @media (max-width: 768px) {
                .icon {
                    display: none;
                }
                .content {
                    display: block;
                }
                list-style: inside;
            }
        `}</style>
    </div>
)

storiesOf('Table', module)
    .add('Default', () => (
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead label="Name" colSpan="2" />
                    <TableCellHead label="Incident date" />
                    <TableCellHead label="Last updated" />
                    <TableCellHead label="Age" />
                    <TableCellHead label="Registering unit" />
                    <TableCellHead label="Assigned user" />
                    <TableCellHead label="Status" />
                </TableRowHead>
                <TableRowHead>
                    <TableCellHead label="First name" />
                    <TableCellHead label="Last name" />
                    <TableCellHead label="" colSpan="6" />
                </TableRowHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Onyekachukwu" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Kariuki" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="05/25/1972" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="66" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Jawi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Sofie Hubert" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Kwasi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="08/11/2010" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/26/1991" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="38" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mokassie MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Dashonte Clarke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Siyabonga" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/21/1981" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="98" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Bathurst MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Chiyembekezo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/23/1982" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/15/2003" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="2" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mayolla MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Wan Gengxin" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Mtendere" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Afolayan" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="08/12/1994" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="05/12/1972" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="37" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Gbangadu MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Gvozden Boskovsky" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Inyene" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okonkwo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="04/01/1971" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="03/16/2000" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="70" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Kunike Barina" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Oscar de la Cavallería" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Amaka" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Pretorius" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/25/1996" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="09/15/1986" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="32" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Bargbo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Alberto Raya" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Meti" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="10/24/2010" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/26/1989" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="8" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Majihun MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Eshe" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="63" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mambiama CHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Shadrias Pearson" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Obi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="06/07/1990" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/03/2006" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="28" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Dalakuru CHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Anatoliy Shcherbatykh" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableCell colSpan="8">
                        <TableFooterButton />
                    </TableCell>
                </TableRow>
            </TableFoot>
        </Table>
    ))
    .add('Some without title', () => (
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead label="Name" colSpan="2" />
                    <TableCellHead label="Incident date" />
                    <TableCellHead label="Last updated" />
                    <TableCellHead label="Age" />
                    <TableCellHead label="Registering unit" />
                    <TableCellHead label="Assigned user" />
                    <TableCellHead label="Status" />
                    <TableCellHead label="Actions" />
                </TableRowHead>
                <TableRowHead>
                    <TableCellHead label="First name" />
                    <TableCellHead label="Last name" />
                    <TableCellHead label="" colSpan="7" />
                </TableRowHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Onyekachukwu" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Kariuki" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="05/25/1972" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="66" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Jawi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Sofie Hubert" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Kwasi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="08/11/2010" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/26/1991" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="38" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mokassie MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Dashonte Clarke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Siyabonga" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/21/1981" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="98" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Bathurst MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Chiyembekezo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/23/1982" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/15/2003" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="2" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mayolla MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Wan Gengxin" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Mtendere" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Afolayan" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="08/12/1994" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="05/12/1972" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="37" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Gbangadu MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Gvozden Boskovsky" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Inyene" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okonkwo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="04/01/1971" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="03/16/2000" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="70" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Kunike Barina" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Oscar de la Cavallería" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Amaka" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Pretorius" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/25/1996" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="09/15/1986" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="32" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Bargbo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Alberto Raya" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Meti" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="10/24/2010" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/26/1989" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="8" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Majihun MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Eshe" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="63" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mambiama CHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Shadrias Pearson" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Obi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="06/07/1990" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/03/2006" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="28" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Dalakuru CHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Anatoliy Shcherbatykh" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                    <TableCell noTitle>
                        <Actions />
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableCell colSpan="9">
                        <TableFooterButton />
                    </TableCell>
                </TableRow>
            </TableFoot>
        </Table>
    ))
    .add('Static layout', () => (
        <Table staticLayout>
            <TableHead>
                <TableRowHead>
                    <TableCellHead label="First name" />
                    <TableCellHead label="Last name" />
                    <TableCellHead label="Incident date" />
                    <TableCellHead label="Last updated" />
                    <TableCellHead label="Age" />
                    <TableCellHead label="Registering unit" />
                    <TableCellHead label="Assigned user" />
                    <TableCellHead label="Status" />
                </TableRowHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Onyekachukwu" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Kariuki" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="05/25/1972" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="66" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Jawi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Sofie Hubert" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Kwasi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="08/11/2010" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/26/1991" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="38" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mokassie MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Dashonte Clarke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Siyabonga" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/21/1981" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="98" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Bathurst MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Chiyembekezo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/23/1982" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/15/2003" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="2" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mayolla MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Wan Gengxin" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Mtendere" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Afolayan" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="08/12/1994" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="05/12/1972" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="37" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Gbangadu MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Gvozden Boskovsky" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Inyene" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okonkwo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="04/01/1971" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="03/16/2000" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="70" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Kunike Barina" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Oscar de la Cavallería" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Amaka" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Pretorius" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/25/1996" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="09/15/1986" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="32" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Bargbo" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Alberto Raya" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Meti" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="10/24/2010" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="07/26/1989" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="8" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Majihun MCHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Eshe" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="63" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Mambiama CHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Shadrias Pearson" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TableCellText label="Obi" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="06/07/1990" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="01/03/2006" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="28" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Dalakuru CHP" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Anatoliy Shcherbatykh" />
                    </TableCell>
                    <TableCell>
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableCell colSpan="8">
                        <TableFooterButton />
                    </TableCell>
                </TableRow>
            </TableFoot>
        </Table>
    ))
