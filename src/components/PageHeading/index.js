const PageHeading = (props) => {
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "30px" }}
      >
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default PageHeading;
