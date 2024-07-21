// client/src/pages/RegisterPage/RegisterPage.jsx
import Container from '../../components/common/Container/Container.styled';
import StyledRegisterForm from '../../components/RegisterForm/RegisterForm.styled';

const RegisterPage = ({ className: styles }) => {
  return (
    <section className={styles}>
      <Container>
        <StyledRegisterForm />
      </Container>
    </section>
  );
};

export default RegisterPage;
