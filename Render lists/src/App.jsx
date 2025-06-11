import List from './List.jsx'
function App() {
    let arrOfObjFruite = [{id:1, name:"Apple", cal: 90},
                        {id:2, name:"Banana", cal: 150},
                    {id:3, name:"Orange", cal: 80},
                {id:4, name:"Cherry", cal: 120},
            {id:5, name:"Peach", cal: 160}]

    let arrOfObjVetables = [{id:6, name:"Carrot", cal: 35},
                        {id:7, name:"Tomato", cal: 70},
                    {id:8, name:"Onion", cal: 80},
                {id:9, name:"Garlic", cal: 120},
            {id:10, name:"Lattec", cal: 20}]



 return(
  <>
 {arrOfObjFruite.length > 0 && <List items = {arrOfObjFruite} category = "Fruites" />}
 {arrOfObjVetables.length > 0 && <List items = {arrOfObjVetables} category = "Vegtables"/>}
 
 </>
 )
}

export default App
