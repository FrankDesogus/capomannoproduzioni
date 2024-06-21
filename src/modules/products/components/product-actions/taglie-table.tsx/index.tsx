import { Table } from "@medusajs/ui"


interface TableDemoProps {
    guidataglie: number;
  }

type Order = {
    i: string
    xs?: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
    xxxl?: string
    xxxxl?: string

}
    // FelpaVintage

const fakeData1: Order[] = [
    {
        i: "IT",
        xs: "44",
        s: "46",
        m: "48",
        l: "50",
        xl: "52",
        xxl: "54",
        xxxl: "54",

    },
    {
        i: "Lunghezza complessica (cm)",
        xs: "65",
        s: "66",
        m: "68",
        l: "70",
        xl: "73",
        xxl: "75",
        xxxl: "77",
    },
    {
        i: "Lunghezza torace (cm)",
        xs: "50",
        s: "52",
        m: "54",
        l: "56",
        xl: "58",
        xxl: "60",
        xxxl: "62",

    },
    {
        i: "Lunghezza manica (cm)",
        xs: "54",
        s: "56",
        m: "56",
        l: "5",
        xl: "58",
        xxl: "59",
        xxxl: "60",
    }

]


//Canotta Uomo
const fakeData2: Order[] = [
    {
        i: "IT",
        s: "48",
        m: "50",
        l: "52",
        xl: "54",
        xxl: "56",

    },
    {
        i: "Lunghezza complessiva (cm)",
        s: "64",
        m: "65",
        l: "67",
        xl: "69",
        xxl: "71",
    },
    {
        i: "Lunghezza torace (cm)",
        s: "52",
        m: "53",
        l: "55",
        xl: "60",
        xxl: "60",
    }
]

// Felpa Pullover Cappuccio

const fakeData3: Order[] = [
    {
        i: "IT",
        xs: "44",
        s: "46",
        m: "48",
        l: "50",
        xl: "52",
        xxl: "54",
        xxxl: "56",
        xxxxl: "58"


    },
    {
        i: "Lunghezza complessiva (cm)",
        xs: "68",
        s: "70",
        m: "71",
        l: "72",
        xl: "74",
        xxl: "75",
        xxxl: "78",
        xxxxl: "80",

    },
    {
        i: "Lunghezza torace (cm)",
        xs: "52",
        s: "54",
        m: "56",
        l: "58",
        xl: "60",
        xxl: "63",
        xxxl: "66",
        xxxxl: "69",

    },
    {
        i: "Lunghezza manica (cm)",
        xs: "54",
        s: "55",
        m: "56",
        l: "56",
        xl: "56",
        xxl: "58",
        xxxl: "60",
        xxxxl: "60",

    }

]


   // Felpa Zip Stampa

   const fakeData4: Order[] = [
    {
        i: "IT",
        xs: "46",
        s: "48",
        m: "50",
        l: "52",
        xl: "54",
        xxl: "56",
        xxxl: "58",
        xxxxl: "60",


    },
    {
        i: "Lunghezza complessica (cm)",
        xs: "64",
        s: "66",
        m: "67",
        l: "69",
        xl: "71",
        xxl: "71",
        xxxl: "72",
        xxxxl: "73",

    },
    {
        i: "Lunghezza torace (cm)",
        xs: "56",
        s: "57",
        m: "58",
        l: "62",
        xl: "65",
        xxl: "66",
        xxxl: "67",
        xxxxl: "68",


    },
    {
        i: "Lunghezza manica (cm)",
        xs: "50",
        s: "51",
        m: "52",
        l: "53",
        xl: "54",
        xxl: "54",
        xxxl: "54",
        xxxxl: "54",

    }

]

// Prima Linea Uomo
const fakeData5: Order[] = [
    {
        i: "IT",
        s: "44",
        m: "46",
        l: "48",
        xl: "50",
        xxl: "52",
        xxxl: "54",
        xxxxl: "58",


    },
    {
        i: "Lunghezza complessiva (cm)",
        s: "66",
        m: "68",
        l: "71",
        xl: "73",
        xxl: "75",
        xxxl: "77",
        xxxxl: "79",

    },
    {
        i: "Lunghezza torace (cm)",
        s: "42",
        m: "45",
        l: "47",
        xl: "49",
        xxl: "53",
        xxxl: "55",
        xxxxl: "58",


    },

]

//  Linea Exconomica
const fakeData6: Order[] = [
    {
        i: "IT",
        xs: "44",
        s: "46",
        m: "48",
        l: "50",
        xl: "52",
        xxl: "54",


    },
    {
        i: "Lunghezza complessiva (cm)",
        xs: "68",
        s: "70",
        m: "73",
        l: "73",
        xl: "75",
        xxl: "77",

    },
    {
        i: "Lunghezza torace (cm)",
        s: "46",
        m: "49",
        l: "53",
        xl: "57",
        xxl: "57",
        xs: "59",
    },

]
//  Linea Serafino
const fakeData7: Order[] = [
    {
        i: "IT",
        s: "48",
        m: "50",
        l: "52",
        xl: "54",
        xxl: "56",
        xxxl:"58",
        xxxxl:"60"


    },
    {
        i: "Lunghezza complessiva (cm)",
        s: "66",
        m: "68",
        l: "71",
        xl: "72",
        xxl: "75",
        xxxl:"77",
        xxxxl:"79"
    },
    {
        i: "Lunghezza torace (cm)",
        s: "49",
        m: "53",
        l: "56",
        xl: "60",
        xxl: "60",
        xxxl:"65",
        xxxxl:"66"
    },

]

//  Linea Abito Capo Mannu
const fakeData12: Order[] = [

    {
        i: "Lunghezza torace (cm)",
        s: "43",
        m: "45",
        l: "48",
        xl: "50",
        xxl: "54",
    },

]
//  Felpa zip cap.
const fakeData13: Order[] = [

    {
        i: "IT",
        xs:"46",
        s: "48",
        m: "50",
        l: "52",
        xl: "54",
        xxl: "56",
        xxxl:"58",
        xxxxl:"60"


    },
    {
        i: "Lunghezza complessiva (cm)",
        xs: "64",
        s:"66",
        m: "67",
        l: "69",
        xl: "71",
        xxl: "71",
        xxxl:"72",
        xxxxl:"73"
    },
    {
        i: "Lunghezza torace (cm)",
        xs:"56",
        s: "57",
        m: "58",
        l: "62",
        xl: "65",
        xxl: "66",
        xxxl:"67",
        xxxxl:"68"
    },
    {
        i: "Lunghezza manica (cm)",
        xs:"50",
        s: "51",
        m: "52",
        l: "53",
        xl: "54",
        xxl: "54",
        xxxl:"54",
        xxxxl:"54"
    },
]
//  Felpa zip donna no stampa
const fakeData14: Order[] = [
  
    {
        i: "Lunghezza complessiva (cm)",
        xs: "57",
        s:"58",
        m: "59",
        l: "60",
        xl: "61",
        xxl: "62",
        xxxl:"63",
        xxxxl:"64"
    },
    {
        i: "Lunghezza torace (cm)",
        xs:"48",
        s: "50",
        m: "52",
        l: "54",
        xl: "56",
        xxl: "58",
        xxxl:"63",
        xxxxl:"65"
    },
    {
        i: "Lunghezza manica (cm)",
        xs:"51",
        s: "62",
        m: "63",
        l: "64",
        xl: "65",
        xxl: "66",
        xxxl:"67",
        xxxxl:"69"
    },
]
const fakeData15: Order[] = [
  
    {
        i: "Lunghezza complessiva (cm)",
        xs: "60",
        s:"61",
        m: "63",
        l: "66",
        xl: "68",
        xxl: "69",
        xxxl:"71",
    },
    {
        i: "Lunghezza torace (cm)",
        xs:"42",
        s: "45",
        m: "46",
        l: "47",
        xl: "50",
        xxl: "53",
        xxxl:"55",
    },
]
export function TableDemo(props: TableDemoProps) {
    console.log(props.guidataglie)
    let tempdata = fakeData1
    if(props.guidataglie === 1){
        console.log(props.guidataglie)

        tempdata = fakeData1

    }else if (props.guidataglie ===2){
        console.log(props.guidataglie)

        tempdata = fakeData2

    }else if (props.guidataglie ===3){
        console.log(props.guidataglie)

        tempdata = fakeData3

    }else if (props.guidataglie ===4){
        tempdata = fakeData4

    }else if (props.guidataglie ===5){
        tempdata = fakeData5

    }else if (props.guidataglie ===6){
        tempdata = fakeData6

    }else if (props.guidataglie ===7){
        tempdata = fakeData7

    }else if (props.guidataglie ===12){
        tempdata = fakeData12

    }else if (props.guidataglie ===13){
        tempdata = fakeData13

    }else if (props.guidataglie ===14){
        tempdata = fakeData14

    }else if (props.guidataglie ===15){
        tempdata = fakeData15

    }

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>INT.</Table.HeaderCell>
                    <Table.HeaderCell>XS</Table.HeaderCell>
                    <Table.HeaderCell>S</Table.HeaderCell>
                    <Table.HeaderCell>M</Table.HeaderCell>
                    <Table.HeaderCell>L</Table.HeaderCell>
                    <Table.HeaderCell>XL</Table.HeaderCell>
                    <Table.HeaderCell>2XL</Table.HeaderCell>
                    <Table.HeaderCell>3XL</Table.HeaderCell>
                    <Table.HeaderCell>4XL</Table.HeaderCell>
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
                            <Table.Cell>{order.xs}</Table.Cell>
                            <Table.Cell>{order.s}</Table.Cell>
                            <Table.Cell>{order.m}</Table.Cell>
                            <Table.Cell>{order.l}</Table.Cell>
                            <Table.Cell>{order.xl}</Table.Cell>
                            <Table.Cell>{order.xxl}</Table.Cell>
                            <Table.Cell>{order.xxxl}</Table.Cell> 
                            <Table.Cell>{order.xxxxl}</Table.Cell>


                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}