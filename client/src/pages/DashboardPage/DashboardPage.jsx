import useAuth from '../../hooks/useAuth';

const DashboardPage = ({ className: styles }) => {
  // todo : => proiectele din db
  const projects = [{ title: 'project 1' }, { title: 'project 2' }];
  // const projects = null;

  const { theme } = useAuth();

  return (
    <section className={`${styles} ${theme}`}>
      {!projects || projects.length === 0 ? (
        <p>
          Before starting your project, it is essential{' '}
          <b onClick={() => console.log('Deschid modala de add si de aici')}>
            to create a board
          </b>{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      ) : (
        <p>
          You can select a project from the the list by clicking on it, and
          relevant project information will be displayed here.
        </p>
      )}
    </section>
  );
};

export default DashboardPage;
