import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-6 flex items-center"
        >
          ← Back
        </button>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Active Projects</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Select a project to create a Daily Progress Report
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
