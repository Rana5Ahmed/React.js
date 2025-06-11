
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

// First step is npm install prop-types, Then -> 

import PropTypes from "prop-types";
// Here we have to use the default paramters as you know in JS and the defaultProps In react 18 Is not working
function List ({items =  [],category = "Category" }){
    let ListItems = items
    let displayList = ListItems.map(item=> <li key={item.id}>{item.name}: {item.cal} caleries</li>)
    return(
        <>
        <h1 className="Heading">{category}</h1>
        <ol className="List">
        {displayList}
        </ol>
        </>
    )
}
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cal: PropTypes.number.isRequired,
    })
  ),
  category: PropTypes.string,
};


export default List
