import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TechnicianPage() {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/");

  const DoctorSchema = Yup.object().shape({
    nationalId: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });

  const PatientSchema = Yup.object().shape({
    nationalId: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    pftResult: Yup.string().required("Required"),
    isSmoker: Yup.string().required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });

  const ImageSchema = Yup.object().shape({
    patientId: Yup.string().required("Required"),
    image: Yup.mixed().required("Required"),
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-2">
          <img src="/logo-preview.png" alt="Logo" className="w-8 h-8" />
          <span className="font-semibold text-sm">Lung Health Care</span>
        </div>
        <button
          className="text-sm bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </header>

      <main className="space-y-16 max-w-5xl mx-auto">
        <section>
          <h2 className="text-center font-semibold mb-6 text-lg">
            Add New Doctor
          </h2>
          <Formik
            initialValues={{
              nationalId: "",
              firstName: "",
              lastName: "",
              gender: "",
              phoneNumber: "",
              email: "",
              password: "",
            }}
            validationSchema={DoctorSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // Handle form submission
              console.log("Doctor form values:", values);
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
                // Here you would typically send the data to your backend
              }, 500);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="nationalId"
                    placeholder="ID / National num"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="nationalId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    as="select"
                    name="gender"
                    className="input p-2 border rounded"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                  {isSubmitting ? "Adding..." : "Add Doctor"}
                </button>
              </Form>
            )}
          </Formik>
        </section>

        <section>
          <h2 className="text-center font-semibold mb-6 text-lg">
            Add New Patient
          </h2>
          <Formik
            initialValues={{
              nationalId: "",
              firstName: "",
              lastName: "",
              gender: "",
              phoneNumber: "",
              email: "",
              pftResult: "",
              isSmoker: "",
              password: "",
            }}
            validationSchema={PatientSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // Handle form submission
              console.log("Patient form values:", values);
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
                // Here you would typically send the data to your backend
              }, 500);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="nationalId"
                    placeholder="ID / National num"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="nationalId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    as="select"
                    name="gender"
                    className="input p-2 border rounded"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="pftResult"
                    placeholder="PFT result value"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="pftResult"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    as="select"
                    name="isSmoker"
                    className="input p-2 border rounded"
                  >
                    <option value="" disabled>
                      Is Smoker?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="former">Former Smoker</option>
                  </Field>
                  <ErrorMessage
                    name="isSmoker"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="md:col-span-3 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button w-48 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                  >
                    {isSubmitting ? "Adding..." : "Add Patient"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>

        <section>
          <h2 className="text-center font-semibold mb-6 text-lg">
            Add New Tissue Image
          </h2>
          <Formik
            initialValues={{
              patientId: "",
              image: null,
            }}
            validationSchema={ImageSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Image upload values:", values);
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 500);
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="patientId"
                    placeholder="Patient ID / National num"
                    className="input p-2 border rounded"
                  />
                  <ErrorMessage
                    name="patientId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="file"
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                    className="input bg-white p-2 border rounded"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button w-48 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                  >
                    {isSubmitting ? "Adding..." : "Add Image"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
}

export default TechnicianPage;
