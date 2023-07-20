import { useNavigate } from "react-router-dom";
import auth from "../../auth.firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import DishList from "../../components/DishList";
import { Button } from "react-bootstrap";

const Dashboard = ({ setCurrentUser, currentUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        navigate("/login");
      }
    });
  }, [currentUser]);
  const signOutUser = () => {
    signOut(auth)
      .then(function () {
        console.log("Signed Out");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Signed Out");
      });
  };
  return (
    <>
      <div className="container">
        <Button
          style={{ marginLeft: "4rem" }}
          variant="dark"
          onClick={signOutUser}
          className="btn"
        >
          Sign Out
        </Button>
      </div>

      <div className="container">
        <DishList />
      </div>
    </>
  );
};

export default Dashboard;
