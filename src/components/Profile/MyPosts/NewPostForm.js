import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

const NewPostForm = (props) => {
  return (
    <Formik initialValues={{ postText: "" }} onSubmit={props.handleSubmit}>
      {() => (
        <Form>
          <div>
            <Field
              component={"textarea"}
              name={"postText"}
              placeholder={"Напишите что-нибудь..."}
            />
          </div>
          <ErrorMessage name="postText" component="div" />

          <button type={"submit"}>Опубликовать</button>
        </Form>
      )}
    </Formik>
  );
};

export default NewPostForm;
