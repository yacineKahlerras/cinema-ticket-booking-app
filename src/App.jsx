import Nav from "./components/Home/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { useEffect, useRef, useState } from "react";
import { db } from "./firebase/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const nameInput = useRef();
  const ageInput = useRef();

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
  }, []);

  const userElements = users.map((user, index) => {
    return (
      <h6 key={index}>
        name : {user.name} ; age : {user.age}
      </h6>
    );
  });

  async function addNewUser() {
    const inputName = nameInput.current.value;
    const inputAge = ageInput.current.value;
    await addDoc(usersCollectionRef, {
      name: inputName,
      age: Number(inputAge),
    });
    console.log("user added.");
  }

  return (
    <main>
      <Nav />
      <Outlet />
      {/* {userElements}
      <form>
        <input ref={nameInput} type="text" />
        <input ref={ageInput} type="number" />
        <button type="button" onClick={addNewUser}>
          create
        </button>
      </form> */}
    </main>
  );
}
