import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function RestoAdmin() {

    let [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(()=>{
        async function getRestaurants() {
            let Res = await axios.get("http://localhost:8080/api/restaurant/all");
            if(Res)
            {
                setAllRestaurants(Res.data);
            }
            else
            {
                alert("Error in fetching Restaurants");
            }
            
        }
    })



    async function handleSubmit(e) 
    {
        e.preventDefault();

        let Data = {
            name: e.target[0].value,
            address: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        };
        
        console.log(Data);

        let Res = await axios.post("http://localhost:8080/api/restaurant/add", Data);
        if(Res)
        {
            alert("Restaurant Added");
        }
        else
        {
            alert("Error");
        }
    }

  return (
    <div>
        <center>
            <h2>RestoAdmin</h2>
        </center>
       <div className="ResForm">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" />
                </div>
                <div className="form-group">
                    <label for="image">Image</label>
                    <input type="text" className="form-control" id="image" placeholder="Enter image" />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       </div>

       <div id="RestoTable">

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Manage Dishes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRestaurants.map((resto) => {
                                return (
                                    <tr>
                                        <td>{resto.id}</td>
                                        <td>{resto.name}</td>
                                        <td>{resto.address}</td>
                                        <td>{resto.image}</td>
                                        <td>{resto.description}</td>
                                        <td><button>Update</button></td>
                                        <td><button>Delete</button></td>
                                        <td><button>Manage Dishes</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

       </div>
    </div>
  )
}
