import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

function DPRForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectFromState = location.state?.projectName || '';

  const [formData, setFormData] = useState({
    projectName: projectFromState,
    date: '',
    weather: '',
    workDescription: '',
    workerCount: ''
  });

  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 3) {
      alert('You can only upload a maximum of 3 images');
      return;
    }

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.projectName || !formData.date || !formData.weather ||
        !formData.workDescription || !formData.workerCount) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('DPR Form Data:', {
      ...formData,
      images: images.map(img => img.file.name)
    });

    alert('DPR Submitted Successfully');

    setFormData({
      projectName: '',
      date: '',
      weather: '',
      workDescription: '',
      workerCount: ''
    });
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-6 flex items-center"
        >
          ← Back
        </button>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Daily Progress Report (DPR)
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="font-semibold block mb-1 dark:text-gray-300">Project Name *</label>
              <select
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                className="w-full border rounded p-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              >
                <option value="">Select a project</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.name}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="font-semibold block mb-1 dark:text-gray-300">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border rounded p-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-semibold block mb-1 dark:text-gray-300">Weather *</label>
              <select
                name="weather"
                value={formData.weather}
                onChange={handleInputChange}
                className="w-full border rounded p-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              >
                <option value="">Select weather</option>
                <option value="Sunny">Sunny</option>
                <option value="Cloudy">Cloudy</option>
                <option value="Rainy">Rainy</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="font-semibold block mb-1 dark:text-gray-300">Work Description *</label>
              <textarea
                name="workDescription"
                value={formData.workDescription}
                onChange={handleInputChange}
                className="w-full border rounded p-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                rows="5"
                placeholder="Describe the work completed today..."
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-semibold block mb-1 dark:text-gray-300">Worker Count *</label>
              <input
                type="number"
                name="workerCount"
                value={formData.workerCount}
                onChange={handleInputChange}
                className="w-full border rounded p-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                min="0"
                placeholder="Number of workers present"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-semibold block mb-1 dark:text-gray-300">
                Upload Photos (Max 3)
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="w-full border rounded p-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                disabled={images.length >= 3}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {images.length}/3 images uploaded
              </p>
            </div>

            {images.length > 0 && (
              <div className="mb-4">
                <label className="font-semibold block mb-2 dark:text-gray-300">Image Previews</label>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded border dark:border-gray-600"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-600 dark:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 dark:hover:bg-red-800"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded hover:bg-green-700 dark:hover:bg-green-800 font-semibold w-full"
            >
              Submit DPR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DPRForm;
