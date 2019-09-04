import React from 'react'

import { storiesOf } from '@storybook/react'

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableFoot,
    TableHead,
    TableRow,
    TableRowHead,
} from '../src'

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
    </div>
)

storiesOf('Table', module).add('Static layout', () => (
    <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead>First name</TableCellHead>
                <TableCellHead>Last name</TableCellHead>
                <TableCellHead>Incident date</TableCellHead>
                <TableCellHead>Last updated</TableCellHead>
                <TableCellHead>Age</TableCellHead>
                <TableCellHead>Registering unit</TableCellHead>
                <TableCellHead>Assigned user</TableCellHead>
                <TableCellHead>Status</TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Onyekachukwu</TableCell>
                <TableCell>Kariuki</TableCell>
                <TableCell>02/06/2007</TableCell>
                <TableCell>05/25/1972</TableCell>
                <TableCell>66</TableCell>
                <TableCell>Jawi</TableCell>
                <TableCell>Sofie Hubert</TableCell>
                <TableCell>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Kwasi</TableCell>
                <TableCell>Okafor</TableCell>
                <TableCell>08/11/2010</TableCell>
                <TableCell>02/26/1991</TableCell>
                <TableCell>38</TableCell>
                <TableCell>Mokassie MCHP</TableCell>
                <TableCell>Dashonte Clarke</TableCell>
                <TableCell>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Siyabonga</TableCell>
                <TableCell>Abiodun</TableCell>
                <TableCell>07/21/1981</TableCell>
                <TableCell>02/06/2007</TableCell>
                <TableCell>98</TableCell>
                <TableCell>Bathurst MCHP</TableCell>
                <TableCell>Unassigned</TableCell>
                <TableCell>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Chiyembekezo</TableCell>
                <TableCell>Okeke</TableCell>
                <TableCell>01/23/1982</TableCell>
                <TableCell>07/15/2003</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Mayolla MCHP</TableCell>
                <TableCell>Wan Gengxin</TableCell>
                <TableCell>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Mtendere</TableCell>
                <TableCell>Afolayan</TableCell>
                <TableCell>08/12/1994</TableCell>
                <TableCell>05/12/1972</TableCell>
                <TableCell>37</TableCell>
                <TableCell>Gbangadu MCHP</TableCell>
                <TableCell>Gvozden Boskovsky</TableCell>
                <TableCell>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Inyene</TableCell>
                <TableCell>Okonkwo</TableCell>
                <TableCell>04/01/1971</TableCell>
                <TableCell>03/16/2000</TableCell>
                <TableCell>70</TableCell>
                <TableCell>Kunike Barina</TableCell>
                <TableCell>Oscar de la Cavallería</TableCell>
                <TableCell>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Amaka</TableCell>
                <TableCell>Pretorius</TableCell>
                <TableCell>01/25/1996</TableCell>
                <TableCell>09/15/1986</TableCell>
                <TableCell>32</TableCell>
                <TableCell>Bargbo</TableCell>
                <TableCell>Alberto Raya</TableCell>
                <TableCell>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Meti</TableCell>
                <TableCell>Abiodun</TableCell>
                <TableCell>10/24/2010</TableCell>
                <TableCell>07/26/1989</TableCell>
                <TableCell>8</TableCell>
                <TableCell>Majihun MCHP</TableCell>
                <TableCell>Unassigned</TableCell>
                <TableCell>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Eshe</TableCell>
                <TableCell>Okeke</TableCell>
                <TableCell>01/31/1995</TableCell>
                <TableCell>01/31/1995</TableCell>
                <TableCell>63</TableCell>
                <TableCell>Mambiama CHP</TableCell>
                <TableCell>Shadrias Pearson</TableCell>
                <TableCell>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Obi</TableCell>
                <TableCell>Okafor</TableCell>
                <TableCell>06/07/1990</TableCell>
                <TableCell>01/03/2006</TableCell>
                <TableCell>28</TableCell>
                <TableCell>Dalakuru CHP</TableCell>
                <TableCell>Anatoliy Shcherbatykh</TableCell>
                <TableCell>Incomplete</TableCell>
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

storiesOf('Table', module).add('Static layout dense', () => (
    <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead dense>First name</TableCellHead>
                <TableCellHead dense>Last name</TableCellHead>
                <TableCellHead dense>Incident date</TableCellHead>
                <TableCellHead dense>Last updated</TableCellHead>
                <TableCellHead dense>Age</TableCellHead>
                <TableCellHead dense>Registering unit</TableCellHead>
                <TableCellHead dense>Assigned user</TableCellHead>
                <TableCellHead dense>Status</TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell dense>Onyekachukwu</TableCell>
                <TableCell dense>Kariuki</TableCell>
                <TableCell dense>02/06/2007</TableCell>
                <TableCell dense>05/25/1972</TableCell>
                <TableCell dense>66</TableCell>
                <TableCell dense>Jawi</TableCell>
                <TableCell dense>Sofie Hubert</TableCell>
                <TableCell dense>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Kwasi</TableCell>
                <TableCell dense>Okafor</TableCell>
                <TableCell dense>08/11/2010</TableCell>
                <TableCell dense>02/26/1991</TableCell>
                <TableCell dense>38</TableCell>
                <TableCell dense>Mokassie MCHP</TableCell>
                <TableCell dense>Dashonte Clarke</TableCell>
                <TableCell dense>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Siyabonga</TableCell>
                <TableCell dense>Abiodun</TableCell>
                <TableCell dense>07/21/1981</TableCell>
                <TableCell dense>02/06/2007</TableCell>
                <TableCell dense>98</TableCell>
                <TableCell dense>Bathurst MCHP</TableCell>
                <TableCell dense>Unassigned</TableCell>
                <TableCell dense>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Chiyembekezo</TableCell>
                <TableCell dense>Okeke</TableCell>
                <TableCell dense>01/23/1982</TableCell>
                <TableCell dense>07/15/2003</TableCell>
                <TableCell dense>2</TableCell>
                <TableCell dense>Mayolla MCHP</TableCell>
                <TableCell dense>Wan Gengxin</TableCell>
                <TableCell dense>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Mtendere</TableCell>
                <TableCell dense>Afolayan</TableCell>
                <TableCell dense>08/12/1994</TableCell>
                <TableCell dense>05/12/1972</TableCell>
                <TableCell dense>37</TableCell>
                <TableCell dense>Gbangadu MCHP</TableCell>
                <TableCell dense>Gvozden Boskovsky</TableCell>
                <TableCell dense>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Inyene</TableCell>
                <TableCell dense>Okonkwo</TableCell>
                <TableCell dense>04/01/1971</TableCell>
                <TableCell dense>03/16/2000</TableCell>
                <TableCell dense>70</TableCell>
                <TableCell dense>Kunike Barina</TableCell>
                <TableCell dense>Oscar de la Cavallería</TableCell>
                <TableCell dense>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Amaka</TableCell>
                <TableCell dense>Pretorius</TableCell>
                <TableCell dense>01/25/1996</TableCell>
                <TableCell dense>09/15/1986</TableCell>
                <TableCell dense>32</TableCell>
                <TableCell dense>Bargbo</TableCell>
                <TableCell dense>Alberto Raya</TableCell>
                <TableCell dense>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Meti</TableCell>
                <TableCell dense>Abiodun</TableCell>
                <TableCell dense>10/24/2010</TableCell>
                <TableCell dense>07/26/1989</TableCell>
                <TableCell dense>8</TableCell>
                <TableCell dense>Majihun MCHP</TableCell>
                <TableCell dense>Unassigned</TableCell>
                <TableCell dense>Complete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Eshe</TableCell>
                <TableCell dense>Okeke</TableCell>
                <TableCell dense>01/31/1995</TableCell>
                <TableCell dense>01/31/1995</TableCell>
                <TableCell dense>63</TableCell>
                <TableCell dense>Mambiama CHP</TableCell>
                <TableCell dense>Shadrias Pearson</TableCell>
                <TableCell dense>Incomplete</TableCell>
            </TableRow>
            <TableRow>
                <TableCell dense>Obi</TableCell>
                <TableCell dense>Okafor</TableCell>
                <TableCell dense>06/07/1990</TableCell>
                <TableCell dense>01/03/2006</TableCell>
                <TableCell dense>28</TableCell>
                <TableCell dense>Dalakuru CHP</TableCell>
                <TableCell dense>Anatoliy Shcherbatykh</TableCell>
                <TableCell dense>Incomplete</TableCell>
            </TableRow>
        </TableBody>
        <TableFoot>
            <TableRow>
                <TableCell dense colSpan="8">
                    <TableFooterButton />
                </TableCell>
            </TableRow>
        </TableFoot>
    </Table>
))
