
//Static List component
// function List (){
//     let arrOfObjects = [{id:1, name:"Apple", cal: 90},
//                         {id:2, name:"Banana", cal: 150},
//                     {id:3, name:"Orange", cal: 80},
//                 {id:4, name:"Cherry", cal: 120},
//             {id:5, name:"Peach", cal: 160}]

//     let displayFruties = arrOfObjects.map(fruit=> <li key={fruit.id}>{fruit.name}: {fruit.cal} caleries</li>)
//     return(
//         <>
//         <h1>Fruites</h1>
//         <ol>
//         {displayFruties}
//         </ol>
//         </>
//     )
// }

// Now we wil create a Dynamic List Componet 
function List (props){
    let ListItems = props.items
    let displayList = ListItems.map(item=> <li key={item.id}>{item.name}: {item.cal} caleries</li>)
    return(
        <>
        <h1 className="Heading">{props.catecory}</h1>
        <ol className="List">
        {displayList}
        </ol>
        </>
    )
}
export default List
