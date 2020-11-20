import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import axios from './axios'
import RegisterItemAgain from "./RegisterItemAgain";
import UploadItemAgain from "./UploadItemAgain";
function ItemDetails(props){
    const {id} = useParams()

    const [ItemData, setItemData] = useState([{}])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(`/lost/${id}`)

            setItemData(req.data)
        }

        fetchData()
    }, [])

    function postData(){
        const data = [{
            id:11,
            name:"Cub",
            type:"stationary",
            img:"https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            flag:0,
        }]
        axios.post('/lost',data)
    }
    
    console.log(ItemData)
    const item = ItemData[0]
    
    
    console.log(item)
    return (
        <div align = "center" style = {{padding:"4rem"}}>
        <div style = {{border:"solid", width:"40rem", padding:"6rem", paddingTop:"3rem", align:"center", borderRadius:"2%"}}>
            <img src = {item.img} top width="100%"/>
            <hr />
            <h2>Name: {item.name}</h2>
            <h2>{item.description}</h2>
            <h3>Type: {item.type}</h3>
            <br />
            {item.flag == 0 ? <RegisterItemAgain/> : <UploadItemAgain/>}

        </div>
        </div>
    )
}

export default ItemDetails;
