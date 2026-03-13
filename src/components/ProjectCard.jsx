import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dpr', { state: { projectName: project.name } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{project.name}</h3>
      <div className="space-y-2">
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Location:</span> {project.location}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Status:</span>{' '}
          <span
            className={`px-2 py-1 rounded text-sm ${
              project.status === 'Active'
                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
            }`}
          >
            {project.status}
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Start Date:</span> {project.startDate}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
