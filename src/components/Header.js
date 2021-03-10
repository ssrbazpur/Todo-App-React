const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <button class="btn" onClick={props.onAdd}>
        {props.showAdd ? "Close" : "Add"}
      </button>
    </header>
  );
};

// CSS in Component
// const headingStyle = {
//   backgroundColor: "black",
// };
export default Header;
