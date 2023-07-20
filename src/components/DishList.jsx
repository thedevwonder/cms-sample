import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../db.firebase";
import { default as image } from "../assets/img.jpg";
import { Button, Card } from "react-bootstrap";
const DishList = () => {
  const [dishList, setDishList] = useState([]);
  const getDishes = async () => {
    const docs = await getDocs(collection(db, "dishes"));
    const result = [];
    docs.forEach((doc) => {
      const data = { ...doc.data(), key: doc.id, id: doc.id };
      result.push(data);
    });
    console.log(result);
    setDishList(result);
  };
  useEffect(() => {
    getDishes();
  }, []);
  const addDish = () => {
    setDishList([...dishList, "dish"]);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const AddDishModal = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      await addDoc(collection(db, "dishes"), {
        name,
        image,
        ingredients,
      });
      getDishes();
      // Perform form submission logic here, e.g., send data to server or update state
      console.log(event);
      console.log("Name:", name);
      console.log("Image:", image);
      console.log("Ingredients:", ingredients);

      // Reset form fields
      setName("");
      setImage("");
      setIngredients("");
    };

    return (
      <form style={{ paddingLeft: "4rem" }} onSubmit={handleSubmit}>
        <table className="form">
          <tbody>
            <tr>
              <td>
                <label>Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Image:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Ingredients:</label>
              </td>
              <td>
                <textarea
                  value={ingredients}
                  onChange={(event) => setIngredients(event.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button type="submit" className="btn">
          Submit
        </Button>
      </form>
    );
  };
  return (
    <div>
      <Button
        style={{ marginLeft: "4rem" }}
        variant="dark"
        className="btn"
        onClick={addDish}
      >
        Add dish
      </Button>
      <AddDishModal />
      <ul className="card-list">
        {dishList.map((item) => {
          console.log(item);
          return (
            <Card key={item.key} className="card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <span>
                  <img src={image}></img>
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingRight: 10,
                  }}
                >
                  <h5>{item.name}</h5>
                  <span>{item.ingredients}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default DishList;
