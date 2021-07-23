import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import CourseCard from "../../components/CourseCard";
import PaymentModal from "../../components/PaymentModal";
import OtpModal from "../../components/OtpModal";
import PageHeading from "../../components/PageHeading";
import LoginAndSignUp from "../../components/LoginAndSignUp";
import Header from "../../components/Header";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showLoginAndSignUpModal, setShowLoginAndSignUpModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json"
      )
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
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

      <PageHeading title="Courses" />

      {showModal && (
        <PaymentModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          setShowOtpModal={setShowOtpModal}
        />
      )}

      {showOtpModal && (
        <OtpModal
          selectedCourse={selectedCourse}
          setShowModal={setShowModal}
          showOtpModal={showOtpModal}
          setShowOtpModal={setShowOtpModal}
        />
      )}

      {showLoginAndSignUpModal && (
        <LoginAndSignUp
          showLoginAndSignUpModal={showLoginAndSignUpModal}
          setShowLoginAndSignUpModal={setShowLoginAndSignUpModal}
        />
      )}

      <Row justify="center" align="middle">
        {courses.map((course) => {
          return (
            <Col key={course.id} lg={8} md={12} sm={24} xs={24}>
              <CourseCard
                course={course}
                from="home"
                setShowModal={setShowModal}
                setSelectedCourse={setSelectedCourse}
                showLoginAndSignUpModal={showLoginAndSignUpModal}
                setShowLoginAndSignUpModal={setShowLoginAndSignUpModal}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Courses;
