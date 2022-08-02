import * as Yup from "yup";

const editProfileFormSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  aboutMe: Yup.string().required("Required"),
  lookingForAJobDescription: Yup.string().required("Required"),
});
export default editProfileFormSchema;
