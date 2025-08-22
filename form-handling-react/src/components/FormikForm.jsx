import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={schema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {() => (
        <Form className="space-y-2">
          <div>
            <Field
              name="name"
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
