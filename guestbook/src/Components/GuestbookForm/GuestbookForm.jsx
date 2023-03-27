import "./GuestbookForm.css";

const GuestbookForm = () => {
  const formInput = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const sendPost = (e) => {
    e.preventDefault();
    fetch("http://localhost:7777/postPost/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    });
  };

  return (
    <form className="GuestbookForm">
      <input
        type="text"
        placeholder="Firstname"
        onChange={(e) => {
          formInput.firstname = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Lastname"
        onChange={(e) => {
          formInput.lastname = e.target.value;
        }}
      />
      <input
        type="email"
        placeholder="E-Mail"
        onChange={(e) => {
          formInput.email = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => {
          formInput.message = e.target.value;
        }}
      />
      <input type="submit" value="Send post" onClick={sendPost} />
    </form>
  );
};

export default GuestbookForm;
