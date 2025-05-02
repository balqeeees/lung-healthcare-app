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
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function DoctorForm() {
  return (
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
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Doctor form values:", values);
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
          {renderField("password", "Password", "password", "md:col-span-2")}
          <div className="md:col-span-3 flex justify-center mt-2">
            <SubmitButton isSubmitting={isSubmitting} label="Create Doctor" />
          </div>
        </Form>
      )}
    </Formik>
  );
}
