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
storiesOf('Table', module)
    .add('Default', () => (
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead colSpan="2" label="Name" />
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
                    <TableCellHead label="" />
                    <TableCellHead label="" />
                    <TableCellHead label="" />
                    <TableCellHead label="" />
                    <TableCellHead label="" />
                    <TableCellHead label="" />
                </TableRowHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Onyekachukwu" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Kariuki" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="05/25/1972" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="66" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Jawi" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Sofie Hubert" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Kwasi" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="08/11/2010" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="02/26/1991" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="38" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Mokassie MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Dashonte Clarke" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Siyabonga" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="07/21/1981" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="98" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Bathurst MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Chiyembekezo" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="01/23/1982" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="07/15/2003" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="2" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Mayolla MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Wan Gengxin" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Mtendere" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Afolayan" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="08/12/1994" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="05/12/1972" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="37" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Gbangadu MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Gvozden Boskovsky" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Inyene" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okonkwo" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="04/01/1971" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="03/16/2000" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="70" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Kunike Barina" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Oscar de la Cavallería" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Amaka" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Pretorius" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="01/25/1996" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="09/15/1986" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="32" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Bargbo" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Alberto Raya" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Meti" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="10/24/2010" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="07/26/1989" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="8" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Majihun MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Eshe" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="63" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Mambiama CHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Shadrias Pearson" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Obi" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="06/07/1990" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="01/03/2006" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="28" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Dalakuru CHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Anatoliy Shcherbatykh" />
                    </TableCell>
                    <TableCell title="Status">
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
                    <TableCell title="First name">
                        <TableCellText label="Onyekachukwu" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Kariuki" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="05/25/1972" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="66" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Jawi" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Sofie Hubert" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Kwasi" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="08/11/2010" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="02/26/1991" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="38" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Mokassie MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Dashonte Clarke" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Siyabonga" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="07/21/1981" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="02/06/2007" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="98" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Bathurst MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Chiyembekezo" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="01/23/1982" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="07/15/2003" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="2" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Mayolla MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Wan Gengxin" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Mtendere" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Afolayan" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="08/12/1994" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="05/12/1972" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="37" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Gbangadu MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Gvozden Boskovsky" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Inyene" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okonkwo" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="04/01/1971" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="03/16/2000" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="70" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Kunike Barina" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Oscar de la Cavallería" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Amaka" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Pretorius" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="01/25/1996" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="09/15/1986" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="32" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Bargbo" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Alberto Raya" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Meti" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Abiodun" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="10/24/2010" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="07/26/1989" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="8" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Majihun MCHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Unassigned" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Complete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Eshe" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okeke" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="01/31/1995" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="63" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Mambiama CHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Shadrias Pearson" />
                    </TableCell>
                    <TableCell title="Status">
                        <TableCellText label="Incomplete" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell title="First name">
                        <TableCellText label="Obi" />
                    </TableCell>
                    <TableCell title="Last name">
                        <TableCellText label="Okafor" />
                    </TableCell>
                    <TableCell title="Incident date">
                        <TableCellText label="06/07/1990" />
                    </TableCell>
                    <TableCell title="Last updated">
                        <TableCellText label="01/03/2006" />
                    </TableCell>
                    <TableCell title="Age">
                        <TableCellText label="28" />
                    </TableCell>
                    <TableCell title="Registering unit">
                        <TableCellText label="Dalakuru CHP" />
                    </TableCell>
                    <TableCell title="Assigned user">
                        <TableCellText label="Anatoliy Shcherbatykh" />
                    </TableCell>
                    <TableCell title="Status">
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
