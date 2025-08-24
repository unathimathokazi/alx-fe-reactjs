import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Form Handling Demo</h1>

      <h2 className="text-xl mb-2">Controlled Form</h2>
      <RegistrationForm />

      <h2 className="text-xl mt-6 mb-2">Formik Form</h2>
      <FormikForm />
    </div>
  );
}
