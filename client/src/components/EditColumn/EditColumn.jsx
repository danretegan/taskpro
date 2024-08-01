import { Formik, Form, Field } from 'formik';
import sprite from '../../assets/icons/icons.svg';
import { GreenButton } from '../common/FormButton/FormButton.styled.js';

const EditColumn = ({ className, isOpen, onClose, onCreate, initialTitle }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Editing column:', values);
    if (onCreate) {
      onCreate(values);
    }
    resetForm();
    if (onClose) {
      onClose();
    }
  };

  console.log('EditColumn rendering, isOpen:', isOpen);

  // Pentru testare, linia este comentata
  // if (!isOpen) return null;

  return (
    <div className={`${className} modal-overlay`}>
      <div className="modal-content">
        <h2>Edit column</h2>
        <button className="close-button" onClick={onClose}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-closeBtn`}></use>
          </svg>
        </button>

        <Formik
  initialValues={{ title: initialTitle || '' }}
  onSubmit={handleSubmit}
>
  {({ isSubmitting }) => (
    <Form>
      <Field
        type="text"
        name="title"
        placeholder="Title"
      />

      <GreenButton
        type="submit"
        text={
          <>
            <span className="edit-icon">
              <svg width="28" height="28">
                <use href={`${sprite}#icon-plusWhite`}></use>
              </svg>
            </span>
            Edit
          </>
        }
        handlerFunction={() => {}}
        isDisabled={isSubmitting}
        className="edit-button new-button"
      />
    </Form>
  )}
</Formik>
      </div>
    </div>
  );
};

export default EditColumn;
