const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <button color="green" className="btn" onClick={props.onAdd}>
        Add
      </button>
    </header>
  );
};

// CSS in Component
// const headingStyle = {
//   backgroundColor: "black",
// };
export default Header;
