import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { providers, BigNumber} from 'ethers';

const provider = new providers.JsonRpcProvider('https://eth-mainnet.alchemyapi.io/v2/_1_KrNiJBFo09hSX0gHXml4BZB8PTb_k');

function createData(blockParameter, value) {
    return { blockParameter, value };
}

const initBlock = {
   _difficulty: {_hex: "0x0"},
   difficulty: 0,
   extraData: '0x0',
   gasLimit: {_hex: "0x0"},
   gasUsed: {_hex: "0x0"},
   baseFeePerGas: {_hex: "0x0"},
   hash: '0x0',
   miner: '0x0',
   nonce: '0x0',
   number: 0,
   parentHash: '0x0',
   timestamp: 0,
   transactions: 0
 }

export default function Block() {

    let [block, setBlock] = React.useState(initBlock)

    React.useEffect(async () => {
        let latestBlock = await provider.getBlock('latest');
        setBlock(latestBlock);
    },[])



    const rows = [
        createData('number', block.number),
        createData('difficulty', BigNumber.from(block._difficulty._hex).toString()),
        createData('extraData', block.extraData),
        createData('gasLimit', BigNumber.from(block.gasLimit._hex).toString()),
        createData('gasUsed', BigNumber.from(block.gasUsed._hex).toString()),
        createData('baseFeePerGas', BigNumber.from(block.baseFeePerGas._hex).toString()),
        createData('hash', block.hash),
        createData('miner', block.miner),
        createData('nonce', block.nonce),
        createData('parentHash', block.parentHash),
        createData('timestamp', block.timestamp),
        createData('Number of Transactions', block.transactions.length)
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
