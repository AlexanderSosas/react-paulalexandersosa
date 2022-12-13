import { useEffect, useState } from "react"

const ITEM = {id: 1, title:"Polo", description:"polo mediano",price:100, pictureURL:"", stock:1000}

const CardDetails = function (){

    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetail().then( res => {
            setItem(res)
        })
    }, [])

    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(ITEM)
            }, 2000);
        })
    }

    return (
        <div>
            <h1>View CardDetails of product</h1>
            <li>{item.title}</li>
            <li>{item.description}</li>
            <li>{item.price}</li>
            <li>{item.stock}</li>
        </div>
        //{id: 1, title:"Polo", description:"polo mediano",price:100, pictureURL:"", stock:1000}
    )
}
export default CardDetails