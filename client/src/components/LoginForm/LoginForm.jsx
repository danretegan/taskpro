import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(login(values)).unwrap();
      toast.success('Login successful!');
      navigate('/dashboard'); //* dashboard
    } catch (error) {
      toast.error(error.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <div className="form-header">
        <Link to="/register">Registration</Link>
        <Link to="/login" className="active">
          Log In
        </Link>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-fields">
            <div className="form-group email-field">
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
              />
            </div>
            <div className="form-group password-field">
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm a password"
                className="password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Logging in...' : 'Log In Now'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
