import React, {useEffect, useMemo, useState} from "react";
import List from "./List";
import * as api from "../api";

// type MappedList = {key: string, value: string}[];

// function mapItems(items: string[]) {
//     return items.map((value, i) => ({key:i.toString(), value}));
// }

// const array = new Array(100).fill(null).map((v, i) => `Item ${i}`);

// function filterAndSort(text: string, asc: boolean): string[] {
//     return (
//         array
//         .filter((i) => text.length === 0 || i.includes(text))
//         .sort(
//             asc ? 
//             (a , b) => (a > b ? 1 : a < b ? -1 : 0) : 
//             (a , b) => (a < b ? 1 : a > b ? -1 : 0))
//     ) ;
// }

export default function ListContainer() {
    // const [asc, setAsc] = useState(true);
    // const [filter, setFilter] = useState("");
    // const [data, setData]= useState<MappedList>([]);   
    const [data, setData] = useState<{key: string; value: string}[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    function fetchItems() {
        return api
                .fetchItems({})
                .then((resp) => resp.json())
                .then(({ items }) => {
                    setData([
                        ...data, 
                        ...items.map((value) => ({
                        key: value,
                        value,
                        })),
                    ]);
                });

    }

    function refreshItems() {
        setIsRefreshing(true);
        return api
                .fetchItems({refresh: true})
                .then((resp) => resp.json())
                .then(({ items }) => {
                    setData(
                        items.map((value) => ({
                            key: value,
                            value,
                        }))
                    );
                })
                .finally(() => {
                    setIsRefreshing(false);
                });
    }

    // const data = useMemo(() => {
    //     return filterAndSort(filter, asc);
    // }, [filter, asc]);
    // useEffect(() => {
    //     fetchItems(filter, asc)
    //         .then((resp) => resp.json())
    //         .then(({items}) => {
    //             setData(mapItems(items));
    //         });
    // }, [])

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <List 
            data={data}
            fetchItems = {fetchItems}
            refreshItems = {refreshItems}
            isRefreshing = {isRefreshing}
        />
    )

    // return (
    //     <List
    //         data={data}
    //         asc={asc}
    //         onFilter={(text) => {
    //             fetchItems(text, asc)
    //                 .then((resp) => resp.json())
    //                 .then(({items}) => {
    //                     setFilter(text);
    //                     setData(mapItems(items));
    //                 });
    //         }}
    //         onSort={() => {
    //             fetchItems(filter, !asc)
    //                 .then((resp) => resp.json())
    //                 .then(({items}) => {
    //                     setAsc(!asc);
    //                     setData(mapItems(items));
    //                 });
    //         }}
    //     />
}