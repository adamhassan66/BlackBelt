import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// ////////////////////////////////////


const AllPets = (props) => {

    const [petList, setPetList] = useState([]);

    const deletePet = (idFromBelow) => {
        axios.delete(`http://localhost:8001/api/pets/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetList(petList.filter(pet => pet._id !== idFromBelow));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // /////////////////////////////////////////////


    useEffect(() => {
        axios.get("http://localhost:8001/api/pets")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    // //////////////////////////////////////////

    const linkStyle = {
        color: 'black',
        textDecoration: "none"
    }

    const actionLinkStyle = {
        color: '#135695'
    }
    //  FORM displaying pet and their info(list)
    return (
        <div id="container">
            <header>
                <h1>Pet Adpotion Shelter</h1>
                <Link style={actionLinkStyle} to={"/new"}>Add a pet to the shelter</Link>
            </header>
            <h1>These pets are looking for a lovely home</h1>
            <table>
                <tr>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Actions Below</th>
                </tr>
                {
                    petList.map((pet, index) => (

                        <tr id="PetInList" key={pet._id}>

                            <td>
                                <Link style={linkStyle} to={`/pet/${pet._id}`}>{pet.name}</Link>
                            </td>
                            <td>{pet.type}</td>
                            <td id="actions">
                                <Link style={actionLinkStyle} to={`/pet/${pet._id}`}>details /</Link>
                                <Link style={actionLinkStyle} to={`/pet/edit/${pet._id}`}> edit</Link>

                            </td>

                        </tr>

                    ))
                }
            </table>

        </div>
    )
}

export default AllPets;


