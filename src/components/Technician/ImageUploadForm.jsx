import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { renderField, SubmitButton } from "./FormUtils";

const schema = Yup.object().shape({
  patientId: Yup.string().required("Required"),
  image: Yup.mixed().required("Required"),
});

export default function ImageUploadForm() {
  const [preview, setPreview] = useState(null);

  return (
    <Formik
      initialValues={{ patientId: "", image: null }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Image upload values:", values);
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setPreview(null);
        }, 500);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderField("patientId", "Patient National ID")}

          <div className="flex flex-col">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => {
                const file = e.currentTarget.files[0];
                setFieldValue("image", file);
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => setPreview(reader.result);
                  reader.readAsDataURL(file);
                } else {
                  setPreview(null);
                }
              }}
              className="p-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <ErrorMessage
              name="image"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {preview && (
            <div className="md:col-span-2 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="mt-2 h-40 w-auto object-contain border rounded shadow"
              />
            </div>
          )}

          <div className="md:col-span-2 flex justify-center mt-2">
            <SubmitButton isSubmitting={isSubmitting} label="Upload Image" />
          </div>
        </Form>
      )}
    </Formik>
  );
}
