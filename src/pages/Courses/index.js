import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import CourseCard from "../../components/CourseCard";
import { Row, Col } from "antd";

const Courses = () => {
  const [showLoginAndSignUpModal, setShowLoginAndSignUpModal] = useState(false);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`/orders?userId=${localStorage.getItem("userId")}`)
      .then((res) => {
        console.log(res.data);
        setMyCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header
        showLoginAndSignUpModal={showLoginAndSignUpModal}
        setShowLoginAndSignUpModal={setShowLoginAndSignUpModal}
      />

      <PageHeading title="My Courses" />

      <Row justify="center" align="middle">
        {myCourses.map((course) => {
          return (
            <Col key={course.courses._id} lg={8} md={12} sm={24} xs={24}>
              <CourseCard course={course.courses} from="mycourse" />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Courses;
