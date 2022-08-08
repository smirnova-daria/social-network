import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

// type PropsType = {
//   handleSubmit: () => void
// }

const NewMessageForm = (props) => {
  return (
    <Formik initialValues={{ postText: "" }} onSubmit={props.handleSubmit}>
      {() => (
        <Form>
          <div>
            <Field
              component={"textarea"}
              name={"postText"}
              placeholder={"Напишите сообщение"}
            />
          </div>
          <ErrorMessage name="postText" component="div" />

          <button type={"submit"}>Отправить</button>
        </Form>
      )}
    </Formik>
  );
};

export default NewMessageForm;
