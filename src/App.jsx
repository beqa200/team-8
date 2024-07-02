import React from "react";
import Home from "./Pages/Home.jsx";
import Personal from "./Pages/Personal.jsx";
import Education from "./Pages/Education.jsx";
import Experience from "./Pages/Experience.jsx";
import Resume from "./Pages/Resume.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function App() {
  //personal use states
  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [nameDescriptionInputValue, setNameDescriptionInputValue] =
    useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [mobileInputValue, setMobileInputValue] = useState("");
  const [image, setImage] = useState("");

  //experience use states
  const [positionInputValue, setpositionInputValue] = useState("");
  const [employerInputValue, setEmployerInputValue] = useState("");
  const [experienceDescriptionInputValue, setExperienceDescriptionInputValue] =
    useState("");
  const [startDateInputValue, setStartDateInputValue] = useState("");
  const [endDateInputValue, setEndDateInputValue] = useState("");
  const [experienceAdditional, setExperienceAdditional] = useState(false);

  const [positionInputValue2, setpositionInputValue2] = useState("");
  const [employerInputValue2, setEmployerInputValue2] = useState("");
  const [
    experienceDescriptionInputValue2,
    setExperienceDescriptionInputValue2,
  ] = useState("");
  const [startDateInputValue2, setStartDateInputValue2] = useState("");
  const [endDateInputValue2, setEndDateInputValue2] = useState("");

  //education use states
  const [schoolInputValue, setSchoolInputValue] = useState("");
  const [degreeInputValue, setDegreeInputValue] = useState("");
  const [educationEndDateInputValue, setEducationEndDataInputValue] =
    useState("");
  const [educationDescriptionInputValue, setEducationDescriptionInputValue] =
    useState("");
  const [educationAdditional, setEducationAdditional] = useState(false);

  const [schoolInputValue2, setSchoolInputValue2] = useState("");
  const [degreeInputValue2, setDegreeInputValue2] = useState("");
  const [educationEndDateInputValue2, setEducationEndDataInputValue2] =
    useState("");
  const [educationDescriptionInputValue2, setEducationDescriptionInputValue2] =
    useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/personal",
      element: (
        <Personal
          nameValue={nameValue}
          setNameValue={setNameValue}
          lastNameValue={lastNameValue}
          setLastNameValue={setLastNameValue}
          nameDescriptionInputValue={nameDescriptionInputValue}
          setNameDescriptionInputValue={setNameDescriptionInputValue}
          emailInputValue={emailInputValue}
          setEmailInputValue={setEmailInputValue}
          mobileInputValue={mobileInputValue}
          setMobileInputValue={setMobileInputValue}
          image={image}
          setImage={setImage}
          positionInputValue={positionInputValue}
          employerInputValue={employerInputValue}
          experienceDescriptionInputValue={experienceDescriptionInputValue}
          startDateInputValue={startDateInputValue}
          endDateInputValue={endDateInputValue}
          experienceAdditional={experienceAdditional}
          schoolInputValue={schoolInputValue}
          degreeInputValue={degreeInputValue}
          educationEndDateInputValue={educationEndDateInputValue}
          educationDescriptionInputValue={educationDescriptionInputValue}
          educationAdditional={educationAdditional}
          positionInputValue2={positionInputValue2}
          setpositionInputValue2={setpositionInputValue2}
          employerInputValue2={employerInputValue2}
          setEmployerInputValue2={setEmployerInputValue2}
          experienceDescriptionInputValue2={experienceDescriptionInputValue2}
          setExperienceDescriptionInputValue2={
            setExperienceDescriptionInputValue2
          }
          startDateInputValue2={startDateInputValue2}
          setStartDateInputValue2={setStartDateInputValue2}
          endDateInputValue2={endDateInputValue2}
          setEndDateInputValue2={setEndDateInputValue2}
          schoolInputValue2={schoolInputValue2}
          setSchoolInputValue2={setSchoolInputValue2}
          degreeInputValue2={degreeInputValue2}
          setDegreeInputValue2={setDegreeInputValue2}
          educationEndDateInputValue2={educationEndDateInputValue2}
          setEducationEndDataInputValue2={setEducationEndDataInputValue2}
          educationDescriptionInputValue2={educationDescriptionInputValue2}
          setEducationDescriptionInputValue2={
            setEducationDescriptionInputValue2
          }
        />
      ),
    },
    {
      path: "/education",
      element: (
        <Education
          nameValue={nameValue}
          lastNameValue={lastNameValue}
          nameDescriptionInputValue={nameDescriptionInputValue}
          emailInputValue={emailInputValue}
          mobileInputValue={mobileInputValue}
          image={image}
          positionInputValue={positionInputValue}
          employerInputValue={employerInputValue}
          experienceDescriptionInputValue={experienceDescriptionInputValue}
          startDateInputValue={startDateInputValue}
          endDateInputValue={endDateInputValue}
          experienceAdditional={experienceAdditional}
          schoolInputValue={schoolInputValue}
          degreeInputValue={degreeInputValue}
          educationEndDateInputValue={educationEndDateInputValue}
          educationDescriptionInputValue={educationDescriptionInputValue}
          educationAdditional={educationAdditional}
          setSchoolInputValue={setSchoolInputValue}
          setDegreeInputValue={setDegreeInputValue}
          setEducationEndDataInputValue={setEducationEndDataInputValue}
          setEducationDescriptionInputValue={setEducationDescriptionInputValue}
          setEducationAdditional={setEducationAdditional}
          positionInputValue2={positionInputValue2}
          setpositionInputValue2={setpositionInputValue2}
          employerInputValue2={employerInputValue2}
          setEmployerInputValue2={setEmployerInputValue2}
          experienceDescriptionInputValue2={experienceDescriptionInputValue2}
          setExperienceDescriptionInputValue2={
            setExperienceDescriptionInputValue2
          }
          startDateInputValue2={startDateInputValue2}
          setStartDateInputValue2={setStartDateInputValue2}
          endDateInputValue2={endDateInputValue2}
          setEndDateInputValue2={setEndDateInputValue2}
          schoolInputValue2={schoolInputValue2}
          setSchoolInputValue2={setSchoolInputValue2}
          degreeInputValue2={degreeInputValue2}
          setDegreeInputValue2={setDegreeInputValue2}
          educationEndDateInputValue2={educationEndDateInputValue2}
          setEducationEndDataInputValue2={setEducationEndDataInputValue2}
          educationDescriptionInputValue2={educationDescriptionInputValue2}
          setEducationDescriptionInputValue2={
            setEducationDescriptionInputValue2
          }
        />
      ),
    },
    {
      path: "/experience",
      element: (
        <Experience
          nameValue={nameValue}
          lastNameValue={lastNameValue}
          nameDescriptionInputValue={nameDescriptionInputValue}
          emailInputValue={emailInputValue}
          mobileInputValue={mobileInputValue}
          image={image}
          positionInputValue={positionInputValue}
          employerInputValue={employerInputValue}
          experienceDescriptionInputValue={experienceDescriptionInputValue}
          experienceAdditional={experienceAdditional}
          startDateInputValue={startDateInputValue}
          endDateInputValue={endDateInputValue}
          schoolInputValue={schoolInputValue}
          degreeInputValue={degreeInputValue}
          educationEndDateInputValue={educationEndDateInputValue}
          educationDescriptionInputValue={educationDescriptionInputValue}
          setExperienceAdditional={setExperienceAdditional}
          setpositionInputValue={setpositionInputValue}
          setEmployerInputValue={setEmployerInputValue}
          setExperienceDescriptionInputValue={
            setExperienceDescriptionInputValue
          }
          setStartDateInputValue={setStartDateInputValue}
          setEndDateInputValue={setEndDateInputValue}
          educationAdditional={educationAdditional}
          positionInputValue2={positionInputValue2}
          setpositionInputValue2={setpositionInputValue2}
          employerInputValue2={employerInputValue2}
          setEmployerInputValue2={setEmployerInputValue2}
          experienceDescriptionInputValue2={experienceDescriptionInputValue2}
          setExperienceDescriptionInputValue2={
            setExperienceDescriptionInputValue2
          }
          startDateInputValue2={startDateInputValue2}
          setStartDateInputValue2={setStartDateInputValue2}
          endDateInputValue2={endDateInputValue2}
          setEndDateInputValue2={setEndDateInputValue2}
          schoolInputValue2={schoolInputValue2}
          setSchoolInputValue2={setSchoolInputValue2}
          degreeInputValue2={degreeInputValue2}
          setDegreeInputValue2={setDegreeInputValue2}
          educationEndDateInputValue2={educationEndDateInputValue2}
          setEducationEndDataInputValue2={setEducationEndDataInputValue2}
          educationDescriptionInputValue2={educationDescriptionInputValue2}
          setEducationDescriptionInputValue2={
            setEducationDescriptionInputValue2
          }
        />
      ),
    },
    {
      path: "/resume",
      element: (
        <Resume
          nameValue={nameValue}
          lastNameValue={lastNameValue}
          nameDescriptionInputValue={nameDescriptionInputValue}
          emailInputValue={emailInputValue}
          mobileInputValue={mobileInputValue}
          image={image}
          positionInputValue={positionInputValue}
          employerInputValue={employerInputValue}
          experienceDescriptionInputValue={experienceDescriptionInputValue}
          experienceAdditional={experienceAdditional}
          startDateInputValue={startDateInputValue}
          endDateInputValue={endDateInputValue}
          schoolInputValue={schoolInputValue}
          degreeInputValue={degreeInputValue}
          educationEndDateInputValue={educationEndDateInputValue}
          educationDescriptionInputValue={educationDescriptionInputValue}
          educationAdditional={educationAdditional}
          positionInputValue2={positionInputValue2}
          employerInputValue2={employerInputValue2}
          experienceDescriptionInputValue2={experienceDescriptionInputValue2}
          startDateInputValue2={startDateInputValue2}
          endDateInputValue2={endDateInputValue2}
          schoolInputValue2={schoolInputValue2}
          degreeInputValue2={degreeInputValue2}
          educationEndDateInputValue2={educationEndDateInputValue2}
          educationDescriptionInputValue2={educationDescriptionInputValue2}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
