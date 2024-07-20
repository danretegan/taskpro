import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UseAnimations from 'react-useanimations';
import visibility from 'react-useanimations/lib/visibility';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import {
  OrangeButton,
  WhiteButton,
} from '../common/FormButton/FormButton.styled';

// todo: => se modifica codul pentru noile cerinte ale proiectului

const LoginForm = ({ className: styles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(emailRegex, { message: 'Invalid email address' })
      .required('Required *'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(passwordRegex, {
        message: 'must include an uppercase, a lowercase and a digit',
      })
      .required('Required *'),
  });

  const handleSubmit = (values, formikBag) => {
    const { email, password } = values;
    const { setSubmitting, setFieldError, resetForm } = formikBag;

    setSubmitting(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(value => {
        toast.success(value.message);
        resetForm();
        navigate('/diary');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
        const errorNotification =
          error?.response?.data?.message || 'Internal server error';
        toast.error(errorNotification);

        if (error?.response?.data?.message === 'email is wrong') {
          setFieldError('email', 'Email is wrong');
          document.querySelector('form').scrollIntoView();
        }

        if (error?.response?.data?.message === 'password is wrong') {
          setFieldError('password', 'Password is wrong');
          document.querySelector('form').scrollIntoView();
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className={styles}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, values }) => (
          <Form autoComplete="off">
            <h1>Log in</h1>

            <div className={`field ${errors.email ? 'onError' : ''}`}>
              <label htmlFor="emailInput">Email *</label>
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

            <div className={`field ${errors.password ? 'onError' : ''}`}>
              <label htmlFor="passwordInput">Password *</label>
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
                />
              )}
            </div>

            <div className="buttonWrapper">
              <OrangeButton
                type={'submit'}
                text={isSubmitting ? 'Loading...' : 'Log in'}
                isDisabled={isSubmitting ? true : false}
              />

              <WhiteButton
                type="button"
                text={'Register'}
                handlerFunction={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/register');
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
