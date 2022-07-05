import Records from "./Records";

function Layout(props) {
  return (
    <div>
      <h1>Records</h1>
      <div className="wrapper">
        {props.records.map((receipt) => {
          return <Records info={receipt} />;
        })}
      </div>
    </div>
  );
}

export default Layout;
