import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { providers } from 'ethers';

const provider = new providers.JsonRpcProvider(process.env.PROVIDER_URL);

function createData(blockParameter, value) {
    return { blockParameter, value };
}

const initBlock = {
   _difficulty: { BigNumber: "3849295379889" },
   difficulty: 3849295379889,
   extraData: '0x476574682f76312e302e312d39383130306634372f6c696e75782f676f312e34',
   gasLimit: { BigNumber: "3141592" },
   gasUsed: { BigNumber: "21000" },
   hash: '0xf93283571ae16dcecbe1816adc126954a739350cd1523a1559eabeae155fbb63',
   miner: '0x909755D480A27911cB7EeeB5edB918fae50883c0',
   nonce: '0x1a455280001cc3f8',
   number: 100004,
   parentHash: '0x73d88d376f6b4d232d70dc950d9515fad3b5aa241937e362fdbfd74d1c901781',
   timestamp: 1439799168,
   transactions: [
     '0x6f12399cc2cb42bed5b267899b08a847552e8c42a64f5eb128c1bcbd1974fb0c'
   ]
 }

export default function Block() {

    let [block, setBlock] = React.useState(initBlock)

    // React.useEffect(async () => {
    //     setBlock(await provider.getBlock('latest'));
    // },[])



    const rows = [
        createData('difficulty', block.difficulty),
        createData('extraData', block.extraData),
        createData('gasLimit', block.gasLimit.BigNumber),
        createData('gasUsed', block.gasUsed.BigNumber),
        createData('hash', block.hash),
        createData('miner', block.miner),
        createData('nonce', block.nonce),
        createData('number', block.number),
        createData('parentHash', block.parentHash),
        createData('timestamp', block.timestamp),
        createData('transactions', block.transactions)
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.blockParameter}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.blockParameter}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
