import "./GuestbookEntries.css";

const GuestbookEntries = ({ post }) => {
  return (
    <div className="GuestbookEntries">
      <p>{post.firstname}</p>
      <p>{post.lastname}</p>
      <p>{post.email}</p>
      <p>{post.message}</p>
    </div>
  );
};

export default GuestbookEntries;
