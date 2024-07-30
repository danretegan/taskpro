import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProjects } from '../../../redux/projects/projectsSlice';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.items);
  const isLoading = useSelector(state => state.projects.isLoading);
  const error = useSelector(state => state.projects.error);

  useEffect(() => {
    dispatch(fetchUserProjects());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {projects.map(project => (
        <ProjectListItem key={project._id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
