import { useEffect, useState } from "react"
import GlassCard from "./card"

const PRODUCTOS = [
    {id: 1, title:"Polo", description:"polo mediano",price:100, pictureURL:"", stock:1000},
    {id: 2, title:"Blusa", description:"Blusa mediano",price:100, pictureURL:"", stock:2000},
    {id: 3, title:"camisa", description:"camisa mediano",price:100, pictureURL:"", stock:3000},
    {id: 4, title:"short", description:"short mediano",price:100, pictureURL:"", stock:4000},
    {id: 5, title:"casaca", description:"casaca mediano",price:100, pictureURL:"", stock:5000}
] 
const GlassesList = function (){

    const [item, setItems]=useState([])

    useEffect( () => {
        getProducts().then(res => {
            console.log(res);
            setItems(res)
        })
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PRODUCTOS)
            }, 2000);
        })
    }

    return (
        <div>
            {/* <h1>View GlassesList</h1> */}
            { item.map( i => <GlassCard key={i.id} {...i} />)}
        </div>
    )
}
export default GlassesList