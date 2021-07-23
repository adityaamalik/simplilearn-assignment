import { Button, Card } from "antd";

const CourseCard = (props) => {
  return (
    <>
      <Card
        hoverable
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "30px",
          textAlign: "center",
        }}
        cover={<img alt="example" src={props.course.thumbnailURL} />}
      >
        <h3>{props.course.title}</h3>
        {props.from === "home" && <p>Price : ₹ {props.course.price} /-</p>}

        {props.from === "home" ? (
          <Button
            onClick={() => {
              if (
                localStorage.getItem("userId") !== null &&
                localStorage.getItem("userId") !== undefined
              ) {
                props.setShowModal(true);
                props.setSelectedCourse(props.course);
              } else {
                props.setShowLoginAndSignUpModal(true);
              }
            }}
          >
            Buy
          </Button>
        ) : (
          <Button>View</Button>
        )}
      </Card>
    </>
  );
};

export default CourseCard;
