import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import sprite from '../../assets/icons/icons.svg';
import { GreenButton } from '../common/FormButton/FormButton.styled.js';

const AddColumn = ({ className, isOpen, onClose, onCreate }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required *')
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    if (values.title.trim() !== '') {
      console.log('Creating column:', values);
      if (onCreate) {
        onCreate(values);
      }
      resetForm();
      if (onClose) {
        onClose();
      }
    } else {
      setSubmitting(false);
    }
  };

  console.log('AddColumn rendering, isOpen:', isOpen);

  if (!isOpen) return null;

  return (
    <div className={`${className} modal-overlay`}>
      <div className="modal-content">
        <h2>Add column</h2>
        <button className="close-button" onClick={onClose}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-closeBtn`}></use>
          </svg>
        </button>

        <Formik
          initialValues={{ title: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className={`field ${touched.title && errors.title ? 'onError' : ''}`}>
                <Field type="text" name="title" placeholder="Title" />
                <div className="error">
                  {touched.title && errors.title && <span>{errors.title}</span>}
                </div>
              </div>

              <GreenButton
                type="submit"
                text={
                  <>
                    <span className="plus-icon">
                      <svg width="28" height="28">
                        <use href={`${sprite}#icon-plusWhite`}></use>
                      </svg>
                    </span>
                    Add
                  </>
                }
                handlerFunction={() => {}}
                isDisabled={isSubmitting}
                className="add-button"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddColumn;
