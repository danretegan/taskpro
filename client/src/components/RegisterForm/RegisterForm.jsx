// RegisterForm.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be 32 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be 64 characters or less')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
        'Must contain at least one uppercase, one lowercase, one number and one special character'
      )
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.message || 'Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <div className="form-header">
        <Link to="/register" className="active">Registration</Link>
        <Link to="/login">Log In</Link>
      </div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-fields">
            <div className="form-group name-field">
              <Field name="name" type="text" placeholder="Enter your name" autoComplete="off"/>
              {errors.name && touched.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group email-field">
              <Field name="email" type="email" placeholder="Enter your email" autoComplete="off"/>
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group password-field">
              <Field name="password" type={showPassword ? "text" : "password"} placeholder="Create a password" className="password-input"/>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && touched.password && <div className="error">{errors.password}</div>}
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-button">
              {isSubmitting ? 'Registering...' : 'Register Now'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
