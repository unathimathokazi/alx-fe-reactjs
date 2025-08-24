import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-lg font-bold mb-4">Formik Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                name="username"
                type="text"
                className="border px-2 py-1 w-full rounded"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="border px-2 py-1 w-full rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="border px-2 py-1 w-full rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
