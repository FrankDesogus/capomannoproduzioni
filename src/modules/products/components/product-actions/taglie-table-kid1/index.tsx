import { Table } from "@medusajs/ui"


interface TableDemoProps {
    guidataglie: number;
}

type Order = {
    i: string
    zero?: string
    uno: string
    tre: string
    cinque: string
    sette: string
    nove: string
    undici: string
    tredici?: string

}
// FelpaVintage

const fakeData1: Order[] = [

    {
        i: "Lunghezza complessiva (cm)",
        zero: "32,5",
        uno: "36",
        tre: "41",
        cinque: "45",
        sette: "49",
        nove: "51",
        undici: "58",
        tredici: "62"
    },
    {
        i: "Lunghezza torace (cm)",
        zero: "27",
        uno: "32",
        tre: "34",
        cinque: "39",
        sette: "42",
        nove: "46",
        undici: "49",
        tredici: "52"

    },
    {
        i: "Lunghezza manica (cm)",
        zero: "21",
        uno: "23",
        tre: "26",
        cinque: "30",
        sette: "36",
        nove: "40",
        undici: "44",
        tredici: "48"
    }

]


//Canotta Uomo
const fakeData2: Order[] = [

    {
        i: "Lunghezza complessiva (cm)",
        zero: "36,5",
        uno: "38",
        tre: "41",
        cinque: "43",
        sette: "48,5",
        nove: "52,5",
        undici: "55",
        tredici: "57,5"
    },
    {
        i: "Lunghezza torace (cm)",
        zero: "28",
        uno: "30",
        tre: "31",
        cinque: "34",
        sette: "37",
        nove: "59,5",
        undici: "43",
        tredici: "47"
    }
]





export function TableDemoKid1(props: TableDemoProps) {
    console.log(props.guidataglie)
    let tempdata = fakeData1
    if (props.guidataglie === 10) {
        console.log(props.guidataglie)

        tempdata = fakeData1

    } else if (props.guidataglie === 11) {
        console.log(props.guidataglie)

        tempdata = fakeData2

    }

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>INT.</Table.HeaderCell>
                    <Table.HeaderCell>0-1</Table.HeaderCell>
                    <Table.HeaderCell>1-2</Table.HeaderCell>
                    <Table.HeaderCell>3-4</Table.HeaderCell>
                    <Table.HeaderCell>5-6</Table.HeaderCell>
                    <Table.HeaderCell>7-8</Table.HeaderCell>
                    <Table.HeaderCell>9-10</Table.HeaderCell>
                    <Table.HeaderCell>11-12</Table.HeaderCell>
                    <Table.HeaderCell>13-14</Table.HeaderCell>

                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tempdata.map((order) => {
                    return (
                        <Table.Row
                            key={order.i}
                            className="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap"
                        >
                            <Table.Cell>{order.i}</Table.Cell>
                            <Table.Cell>{order.zero}</Table.Cell>
                            <Table.Cell>{order.uno}</Table.Cell>
                            <Table.Cell>{order.tre}</Table.Cell>
                            <Table.Cell>{order.cinque}</Table.Cell>
                            <Table.Cell>{order.sette}</Table.Cell>
                            <Table.Cell>{order.nove}</Table.Cell>
                            <Table.Cell>{order.undici}</Table.Cell>
                            <Table.Cell>{order.tredici}</Table.Cell>


                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}