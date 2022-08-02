import { ErrorMessage, Field, Form, Formik } from "formik";
import editProfileFormSchema from "../../../../utils/FormValidation/editProfileFormSchema";
import s from "./ProfileData.module.css";

const EditProfileForm = ({
  profile,
  contacts,
  saveProfile,
  editModeDisable,
}) => {
  return (
    <Formik
      initialValues={profile}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        saveProfile(values, setStatus)
          .then(() => {
            editModeDisable();
          })
          .catch(() => {
            setSubmitting(false);
          });
      }}
      validationSchema={editProfileFormSchema}
    >
      {({ status }) => {
        return (
          <Form>
            <div>
              <Field type={"text"} name={"fullName"} placeholder={"fullName"} />
              <ErrorMessage
                name="fullName"
                component="span"
                className={s.error}
              />
            </div>
            <div>
              <Field
                component={"textarea"}
                name={"aboutMe"}
                placeholder={"about me"}
              />
              <ErrorMessage
                name="aboutMe"
                component="span"
                className={s.error}
              />
            </div>
            <div>
              <label>
                <Field type={"checkbox"} name={"lookingForAJob"} />
                Ищу работу
              </label>
            </div>
            <div>
              <Field
                component={"textarea"}
                name={"lookingForAJobDescription"}
                placeholder={"Мои навыки..."}
              />
              <ErrorMessage
                name="lookingForAJobDescription"
                component="span"
                className={s.error}
              />
            </div>
            <div>
              {Object.keys(contacts).map((key) => {
                return (
                  <div key={key}>
                    {key}
                    <Field
                      type={"text"}
                      name={"contacts." + key}
                      placeholder={key}
                    />
                  </div>
                );
              })}
            </div>
            <div>{status}</div>
            <button type={"submit"}>Сохранить</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditProfileForm;
