import { Table } from "@medusajs/ui"
import Image from "next/image";

interface TableDemoProps {
    guidataglie: number;
}

type Order = {
    i: string
    due?: string
    quattro: string
    sei: string
    otto: string
    dieci: string
    dodici: string
    quattordici?: string
    sedici?: string

}
// T-shirt Bsica Bimbo

const fakeData1: Order[] = [

    {
        i: "Lunghezza complessica (cm)",
        due: "38",
        quattro: "42",
        sei: "45",
        otto: "51",
        dieci: "55",
        dodici: "81",
    },
    {
        i: "Lunghezza torace (cm)",
        due: "28",
        quattro: "31",
        sei: "36",
        otto: "39",
        dieci: "44",
        dodici: "46",

    },

]


//Canotta Uomo
const fakeData2: Order[] = [

    {
        i: "Lunghezza complessiva (cm)",
        due: "42,5",
        quattro: "44",
        sei: "47",
        otto: "50",
        dieci: "53",
        dodici: "54",
        quattordici: "56",
        sedici: "62,5"
    },
    {
        i: "Lunghezza torace (cm)",
        due: "33",
        quattro: "35",
        sei: "37",
        otto: "41",
        dieci: "42",
        dodici: "47",
        quattordici: "48,5",
        sedici: "50"
    }
]


export function TableDemoKid2(props: TableDemoProps) {
    console.log(props.guidataglie)
    let tempdata = fakeData1
    if (props.guidataglie === 8) {
        console.log(props.guidataglie)

        tempdata = fakeData1

    } else if (props.guidataglie === 9) {
        console.log(props.guidataglie)

        tempdata = fakeData2

    }

    return (
        <>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>INT.</Table.HeaderCell>
                        <Table.HeaderCell>2</Table.HeaderCell>
                        <Table.HeaderCell>4</Table.HeaderCell>
                        <Table.HeaderCell>6</Table.HeaderCell>
                        <Table.HeaderCell>8</Table.HeaderCell>
                        <Table.HeaderCell>10</Table.HeaderCell>
                        <Table.HeaderCell>12</Table.HeaderCell>
                        <Table.HeaderCell>14</Table.HeaderCell>
                        <Table.HeaderCell>16</Table.HeaderCell>
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
                                <Table.Cell>{order.due}</Table.Cell>
                                <Table.Cell>{order.quattro}</Table.Cell>
                                <Table.Cell>{order.sei}</Table.Cell>
                                <Table.Cell>{order.otto}</Table.Cell>
                                <Table.Cell>{order.dieci}</Table.Cell>
                                <Table.Cell>{order.dodici}</Table.Cell>
                                <Table.Cell>{order.quattordici}</Table.Cell>
                                <Table.Cell>{order.sedici}</Table.Cell>


                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <div className="image-container">
                <Image
                    src={"https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/GuidaAlletaglieModalView.jpeg"}
                    alt="Below the table"
                    layout="responsive"
                    width={700}
                    height={475}
                    className="table-image"
                />
            </div>
        </>
    )
}