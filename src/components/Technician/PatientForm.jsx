import { Formik, Form } from "formik";
import * as Yup from "yup";
import { renderField, renderSelect, SubmitButton } from "./FormUtils";

const schema = Yup.object().shape({
  nationalId: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  pftResult: Yup.string().required("Required"),
  isSmoker: Yup.string().required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  bloodType: Yup.string().required("Required"),
  DOB: Yup.string().required("Required"),
});

export default function PatientForm() {
  return (
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
        bloodType: "",
        DOB: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Patient form values:", values);
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderField("nationalId", "National ID")}
          {renderField("firstName", "First Name")}
          {renderField("lastName", "Last Name")}
          {renderSelect("gender", "Select Gender", ["male", "female"])}
          {renderField("phoneNumber", "Phone Number")}
          {renderField("email", "Email", "email")}
          {renderField("pftResult", "PFT Result")}
          {renderField("bloodType", "Blood Type")}
          {renderField("DOB", "Date of Birth", "date")}
          {renderSelect("isSmoker", "Is Smoker?", ["yes", "no", "former"])}
          {renderField("password", "Password", "password")}
          <div className="md:col-span-3 flex justify-center mt-2">
            <SubmitButton
              isSubmitting={isSubmitting}
              label="Register Patient"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
