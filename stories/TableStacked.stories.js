import React from 'react'

import { storiesOf } from '@storybook/react'

import {
    Button,
    TableStacked,
    TableStackedBody,
    TableStackedCell,
    TableStackedCellHead,
    TableStackedFoot,
    TableStackedHead,
    TableStackedRow,
    TableStackedRowHead,
} from '../src'

const TableStackedFooterButton = () => (
    <div>
        <Button primary>TableStacked footer button</Button>

        <style jsx>{`
            div {
                text-align: right;
                padding: 16px 0;
            }
        `}</style>
    </div>
)

const TableStackedButton = () => <Button primary>TableStacked button</Button>

storiesOf('TableStacked', module)
    .add('Static layout', () => (
        <TableStacked>
            <TableStackedHead>
                <TableStackedRowHead>
                    <TableStackedCellHead>First name</TableStackedCellHead>
                    <TableStackedCellHead>Last name</TableStackedCellHead>
                    <TableStackedCellHead>Incident date</TableStackedCellHead>
                    <TableStackedCellHead>Last updated</TableStackedCellHead>
                    <TableStackedCellHead>Age</TableStackedCellHead>
                    <TableStackedCellHead>Registering unit</TableStackedCellHead>
                    <TableStackedCellHead>Assigned user</TableStackedCellHead>
                    <TableStackedCellHead>Status</TableStackedCellHead>
                </TableStackedRowHead>
            </TableStackedHead>
            <TableStackedBody>
                <TableStackedRow>
                    <TableStackedCell>Onyekachukwu</TableStackedCell>
                    <TableStackedCell>Kariuki</TableStackedCell>
                    <TableStackedCell>02/06/2007</TableStackedCell>
                    <TableStackedCell>05/25/1972</TableStackedCell>
                    <TableStackedCell>66</TableStackedCell>
                    <TableStackedCell>Jawi</TableStackedCell>
                    <TableStackedCell>Sofie Hubert</TableStackedCell>
                    <TableStackedCell>Incomplete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Kwasi</TableStackedCell>
                    <TableStackedCell>Okafor</TableStackedCell>
                    <TableStackedCell>08/11/2010</TableStackedCell>
                    <TableStackedCell>02/26/1991</TableStackedCell>
                    <TableStackedCell>38</TableStackedCell>
                    <TableStackedCell>Mokassie MCHP</TableStackedCell>
                    <TableStackedCell>Dashonte Clarke</TableStackedCell>
                    <TableStackedCell>Complete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Siyabonga</TableStackedCell>
                    <TableStackedCell>Abiodun</TableStackedCell>
                    <TableStackedCell>07/21/1981</TableStackedCell>
                    <TableStackedCell>02/06/2007</TableStackedCell>
                    <TableStackedCell>98</TableStackedCell>
                    <TableStackedCell>Bathurst MCHP</TableStackedCell>
                    <TableStackedCell>Unassigned</TableStackedCell>
                    <TableStackedCell>Incomplete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Chiyembekezo</TableStackedCell>
                    <TableStackedCell>Okeke</TableStackedCell>
                    <TableStackedCell>01/23/1982</TableStackedCell>
                    <TableStackedCell>07/15/2003</TableStackedCell>
                    <TableStackedCell>2</TableStackedCell>
                    <TableStackedCell>Mayolla MCHP</TableStackedCell>
                    <TableStackedCell>Wan Gengxin</TableStackedCell>
                    <TableStackedCell>Incomplete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Mtendere</TableStackedCell>
                    <TableStackedCell>Afolayan</TableStackedCell>
                    <TableStackedCell>08/12/1994</TableStackedCell>
                    <TableStackedCell>05/12/1972</TableStackedCell>
                    <TableStackedCell>37</TableStackedCell>
                    <TableStackedCell>Gbangadu MCHP</TableStackedCell>
                    <TableStackedCell>Gvozden Boskovsky</TableStackedCell>
                    <TableStackedCell>Complete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Inyene</TableStackedCell>
                    <TableStackedCell>Okonkwo</TableStackedCell>
                    <TableStackedCell>04/01/1971</TableStackedCell>
                    <TableStackedCell>03/16/2000</TableStackedCell>
                    <TableStackedCell>70</TableStackedCell>
                    <TableStackedCell>Kunike Barina</TableStackedCell>
                    <TableStackedCell>Oscar de la Cavallería</TableStackedCell>
                    <TableStackedCell>Complete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Amaka</TableStackedCell>
                    <TableStackedCell>Pretorius</TableStackedCell>
                    <TableStackedCell>01/25/1996</TableStackedCell>
                    <TableStackedCell>09/15/1986</TableStackedCell>
                    <TableStackedCell>32</TableStackedCell>
                    <TableStackedCell>Bargbo</TableStackedCell>
                    <TableStackedCell>Alberto Raya</TableStackedCell>
                    <TableStackedCell>Incomplete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Meti</TableStackedCell>
                    <TableStackedCell>Abiodun</TableStackedCell>
                    <TableStackedCell>10/24/2010</TableStackedCell>
                    <TableStackedCell>07/26/1989</TableStackedCell>
                    <TableStackedCell>8</TableStackedCell>
                    <TableStackedCell>Majihun MCHP</TableStackedCell>
                    <TableStackedCell>Unassigned</TableStackedCell>
                    <TableStackedCell>Complete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Eshe</TableStackedCell>
                    <TableStackedCell>Okeke</TableStackedCell>
                    <TableStackedCell>01/31/1995</TableStackedCell>
                    <TableStackedCell>01/31/1995</TableStackedCell>
                    <TableStackedCell>63</TableStackedCell>
                    <TableStackedCell>Mambiama CHP</TableStackedCell>
                    <TableStackedCell>Shadrias Pearson</TableStackedCell>
                    <TableStackedCell>Incomplete</TableStackedCell>
                </TableStackedRow>
                <TableStackedRow>
                    <TableStackedCell>Obi</TableStackedCell>
                    <TableStackedCell>Okafor</TableStackedCell>
                    <TableStackedCell>06/07/1990</TableStackedCell>
                    <TableStackedCell>01/03/2006</TableStackedCell>
                    <TableStackedCell>28</TableStackedCell>
                    <TableStackedCell>Dalakuru CHP</TableStackedCell>
                    <TableStackedCell>Anatoliy Shcherbatykh</TableStackedCell>
                    <TableStackedCell>Incomplete</TableStackedCell>
                </TableStackedRow>
            </TableStackedBody>
            <TableStackedFoot>
                <TableStackedRow>
                    <TableStackedCell colSpan="8">
                        <TableStackedFooterButton />
                    </TableStackedCell>
                </TableStackedRow>
            </TableStackedFoot>
        </TableStacked>
))

storiesOf('Table', module).add(
    'Static layout with buttons in dense cells',
    () => (
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
                    <TableCellHead>Button</TableCellHead>
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
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>Mokassie MCHP</TableCell>
                    <TableCell>Dashonte Clarke</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>Bathurst MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Chiyembekezo</TableCell>
                    <TableCell>Okeke</TableCell>
                    <TableCell>01/23/1982</TableCell>
                    <TableCell>07/15/2003</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Mayolla MCHP</TableCell>
                    <TableCell>Wan Gengxin</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Mtendere</TableCell>
                    <TableCell>Afolayan</TableCell>
                    <TableCell>08/12/1994</TableCell>
                    <TableCell>05/12/1972</TableCell>
                    <TableCell>37</TableCell>
                    <TableCell>Gbangadu MCHP</TableCell>
                    <TableCell>Gvozden Boskovsky</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Inyene</TableCell>
                    <TableCell>Okonkwo</TableCell>
                    <TableCell>04/01/1971</TableCell>
                    <TableCell>03/16/2000</TableCell>
                    <TableCell>70</TableCell>
                    <TableCell>Kunike Barina</TableCell>
                    <TableCell>Oscar de la Cavallería</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Amaka</TableCell>
                    <TableCell>Pretorius</TableCell>
                    <TableCell>01/25/1996</TableCell>
                    <TableCell>09/15/1986</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>Bargbo</TableCell>
                    <TableCell>Alberto Raya</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Meti</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>10/24/2010</TableCell>
                    <TableCell>07/26/1989</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>Majihun MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Eshe</TableCell>
                    <TableCell>Okeke</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>63</TableCell>
                    <TableCell>Mambiama CHP</TableCell>
                    <TableCell>Shadrias Pearson</TableCell>
                    <TableCell dense>
                        <TableButton />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Obi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>06/07/1990</TableCell>
                    <TableCell>01/03/2006</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>Dalakuru CHP</TableCell>
                    <TableCell>Anatoliy Shcherbatykh</TableCell>
                    <TableCell dense>
                        <TableButton />
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
    )
)
