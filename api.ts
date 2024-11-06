// const items = new Array(100).fill(null).map((v,i) => `Item ${i}`);

// function filterAndSort(data: string[], text: string, asc: boolean){
//     return data
//         .filter((i) => text.length===0 || i.includes(text))
//         .sort(
//             asc
//             ? (a,b) => (b > a ? -1 : a === b ? 0 : 1)
//             : (a,b) => (b < a ? -1 : a === b ? 0 : 1)
//         );
// }

function *getItems() {
    let cnt = 0;
    while(true){
        yield `Item ${cnt++}`;
    }
}

let items = getItems();

export function fetchItems({refresh}: {refresh?: boolean}) {
    if( refresh) {
        items = getItems();
    }
    return Promise.resolve({
        json: () =>
            Promise.resolve({
                items: new Array(30).fill(null).map(() => items.next().value as string),
            }),
    });
}

// export function fetchItems(
//     filter: string,
//     asc: boolean
// ) : Promise<{json: () => Promise<{items: string[]}>}> {
//     return new Promise((resolve) => {
//         resolve({
//             json: () => 
//                 Promise.resolve({
//                     items: filterAndSort(items, filter, asc),
//                 }),
//         });
//     });
// }