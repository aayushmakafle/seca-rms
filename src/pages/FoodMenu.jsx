import { useState } from "react"

let FoodMenu = () => {
    const [FoodMenuList, setFoodMenuList] = useState([
        {
            id: 1,
            name: "Pizza",
            price: 10,
            description: "Delicious cheese pizza with tomato sauce and toppings.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
        },
        {
            id: 2,
            name: "Burger",
            price: 45,
            description: "Juicy beef burger with lettuce ,tomato and cheese.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgn-l4PKW5yM3AhlQl0orUMQhtyh-bwFEZ_A&s",
        }
    ])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ nmae, price, description, image })
        let data = {
            id: FoodMenuList.length + 1,
            name,
            price,
            description,
            image
        }
        setFoodMenuList([...FoodMenuList, data])
    }
    const handleEdit = (data) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setImage(data.image);
        setIsEdit(true);
        setEditId(data.id);
    }
    const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        setFoodMenuList(FoodMenuList.filter((item) => item.id !== id));
    }
};
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const handleEditMenu = (e) => {
        e.preventDefault();
        let foundFm = FoodMenuList.find(
            (ele) => {
                return ele.id === editId
            }
        )
        foundFm.name = name;
        foundFm.description = description;
        foundFm.price = price;
        foundFm.image = image;
        setFoodMenuList([...FoodMenuList])
        //Back to initial state
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        setIsEdit(false);
        setEditId(null);
    }
    return (
        <div style={{ display: "flex", paddingTop: "40px", paddingBottom: "40px", gap: "20px", backgroundColor: "wheat" }} >
            <div>
                <h1>Food Menu</h1>
                {
                    FoodMenuList.map(
                        (FoodMenu) => {
                            return (
                                <div key={`${FoodMenu.id}` - `${FoodMenu.name}`}>
                                    <h2>{FoodMenu.name}</h2>
                                    <p>Price:${FoodMenu.price}</p>
                                    <p>{FoodMenu.description}</p>
                                    <img src={FoodMenu.image} alt={FoodMenu.name} width="200" />
                                    <div>
                                        <button onClick={() => handleEdit(FoodMenu)}>Edit</button>
                                        <button onClick={() => handleDelete(FoodMenu.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="FoodMenu">
                <h1>Add Food Menu</h1>
                <form onSubmit={isEdit ? handleEditMenu : handleSubmit}>
                    <div>
                        <label>Name:</label><br></br>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Price:</label><br></br>
                        <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label>Description:</label><br></br>
                        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label>Image URL:</label><br></br>
                        <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <button type="submit" >{isEdit ? "Update Food" : "Add Food"}</button>
                </form>
            </div>
        </div>
    )
}
export default FoodMenu
