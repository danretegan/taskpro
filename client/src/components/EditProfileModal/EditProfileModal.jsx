import { useEffect, useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UseAnimations from 'react-useanimations';
import visibility from 'react-useanimations/lib/visibility';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import {
  GreenButton,
  VioletButton,
} from '../common/FormButton/FormButton.styled';
import 'animate.css';
import useAuth from '../../hooks/useAuth';
import StyledCloseButton from '../common/CloseButton/CloseButton.styled';
import icons from '../../assets/icons/icons.svg';

const EditProfileModal = ({ className: styles, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', addCloseEvent);

    function addCloseEvent(event) {
      event.key === 'Escape' && closeModal();
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', addCloseEvent);
    };
  });
  const { user, theme } = useAuth();
  const dispatch = useDispatch();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [file, setFile] = useState(user.profilePhotoUrl);

  const initialValues = {
    name: user.name,
    email: user.email,
    password: user.password ?? '',
    profilePhoto: '',
  };

  const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters long')
      .required('Required *'),
    email: Yup.string()
      .matches(emailRegex, { message: 'Invalid email address' })
      .required('Required *'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(passwordRegex, {
        message: 'Must include an uppercase, a lowercase and a digit',
      })
      .required('Required *'),
  });

  const handleSubmit = (values, formikBag) => {
    const { name, email, password, profilePhoto } = values;
    const { setSubmitting, setFieldError, resetForm } = formikBag;

    setSubmitting(true);

    dispatch(updateUser({ name, email, password, profilePhoto }))
      .unwrap()
      .then(value => {
        toast.success(value.message);
        resetForm();
        closeModal();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
        const errorNotification =
          error?.response?.data?.message || 'Internal server error';
        toast.error(errorNotification);

        if (error?.response?.status === 409) {
          setFieldError('email', errorNotification);
          document.querySelector('form').scrollIntoView();
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div
      className={styles}
      onMouseDown={e => e.currentTarget === e.target && closeModal()}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, values, touched, setFieldValue }) => (
          <Form
            autoComplete="off"
            className={`editForm ${theme} animate__animated animate__zoomIn  animate__slow`}
          >
            <StyledCloseButton handlerFunction={() => closeModal()} />

            <h1 className={theme}>Edit profile</h1>

            <div className={`photoField`}>
              {file ? (
                <img src={file} alt="profile" />
              ) : (
                <svg>
                  <use
                    href={
                      (theme === 'dark' && `${icons}#icon-no-profile-dark`) ||
                      (theme === 'light' && `${icons}#icon-no-profile-light`) ||
                      (theme === 'violet' && `${icons}#icon-no-profile-violet`)
                    }
                  ></use>
                </svg>
              )}

              <label htmlFor="fileInput" className={theme}>
                <svg>
                  <use href={`${icons}#icon-add`}></use>
                </svg>
              </label>
              <Field
                id="fileInput"
                type="file"
                name="profilePhoto"
                accept="image/png, image/jpeg"
                value=""
                onChange={async e => {
                  if (e.target.files[0].size > 5000000) {
                    toast.error(
                      'Error! The file is larger than the allowed 5 MB limit.'
                    );
                    return;
                  }

                  setFile(URL.createObjectURL(e.target.files[0]));
                  setFieldValue('profilePhoto', e.target.files[0]);
                }}
              />
            </div>

            <div
              className={`field ${
                touched.name && errors.name ? 'onError' : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="nameInput"
                type="text"
                name="name"
                placeholder="Please, enter your name !"
              />
              <div className="error">
                <ErrorMessage name="name" component="span" />
              </div>
            </div>

            <div
              className={`field ${
                touched.email && errors.email ? 'onError' : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="emailInput"
                type="email"
                name="email"
                placeholder="Please, enter your email !"
              />
              <div className="error">
                <ErrorMessage name="email" component="span" />
              </div>
            </div>

            <div
              className={`field ${
                touched.password && errors.password ? 'onError' : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="passwordInput"
                type={passwordIsVisible ? 'text' : 'password'}
                name="password"
                placeholder="Please, enter your password !"
              />
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
              {values.password && (
                <UseAnimations
                  animation={visibility}
                  onClick={() => setPasswordIsVisible(prev => !prev)}
                  size={30}
                  className="showPassword"
                  strokeColor={`${
                    theme === 'dark'
                      ? 'rgba(255, 255, 255, 1)'
                      : 'rgba(22, 22, 22, 1)'
                  }`}
                  speed={2}
                />
              )}
            </div>

            {theme === 'violet' ? (
              <VioletButton
                type={'submit'}
                text={isSubmitting ? 'Loading...' : 'Send'}
                isDisabled={isSubmitting}
              />
            ) : (
              <GreenButton
                type={'submit'}
                text={isSubmitting ? 'Loading...' : 'Send'}
                isDisabled={isSubmitting}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfileModal;
