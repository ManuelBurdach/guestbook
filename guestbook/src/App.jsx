import { useEffect, useState } from "react";
import "./App.css";
import GuestbookEntries from "./Components/GuestbookEntries/GuestbookEntries";
import GuestbookForm from "./Components/GuestbookForm/GuestbookForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [guestbookEntries, setGuestbookEntries] = useState();

  useEffect(() => {
    fetch("http://localhost:7777/getPosts")
      .then((res) => res.json())
      .then((data) => setGuestbookEntries(data));
  }, []);

  return (
    <div className="App">
      <GuestbookForm setGuestbookEntries={setGuestbookEntries} />

      {guestbookEntries?.map((entrie) => {
        return <GuestbookEntries key={uuidv4()} post={entrie} />;
      })}
    </div>
  );
}

export default App;
