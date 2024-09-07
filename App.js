import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('About Me');
  const [galleryImages, setGalleryImages] = useState([
    { src: 'https://placehold.co/600x400/ffffff/000000?text=Image+1' },
    { src: 'https://placehold.co/600x400/ffffff/000000?text=Image+2' },
    { src: 'https://placehold.co/600x400/ffffff/000000?text=Image+3' },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddImage = () => {
    setGalleryImages([
      ...galleryImages,
      { src: 'https://placehold.co/600x400/ffffff/000000?text=New+Image' },
    ]);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2"></div>

      <div className="w-1/2 flex flex-col gap-4 p-4">
        {/* Widget 1: Tabs */}
        <div className="bg-gray-800 rounded-md shadow-md p-4">
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === 'About Me' ? 'bg-gray-700' : 'bg-gray-600'
              }`}
              onClick={() => handleTabClick('About Me')}
            >
              About Me
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === 'Experiences' ? 'bg-gray-700' : 'bg-gray-600'
              }`}
              onClick={() => handleTabClick('Experiences')}
            >
              Experiences
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === 'Recommended' ? 'bg-gray-700' : 'bg-gray-600'
              }`}
              onClick={() => handleTabClick('Recommended')}
            >
              Recommended
            </button>
          </div>

          <div className="mt-4">
            {activeTab === 'About Me' && (
              <p className="text-gray-400 text-sm">
                Hello! I'm Vishal kumar, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY & have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin
                daughters- Emma and Ella. Both of them are just starting
                school, so my calendar is usually blocked between 9-10 AM. This
                is a...
              </p>
            )}
            {activeTab === 'Experiences' && (
              <p className="text-gray-400 text-sm">
                Experiences content will go here.
              </p>
            )}
            {activeTab === 'Recommended' && (
              <p className="text-gray-400 text-sm">
                Recommended content will go here.
              </p>
            )}
          </div>
        </div>

        {/* Widget 2: Gallery */}
        <div className="bg-gray-800 rounded-md shadow-md p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-300 text-lg font-semibold">Gallery</p>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded-md"
              onClick={handleAddImage}
            >
              + ADD IMAGE
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-gray-700 rounded-md">
                <img src={image.src}  className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button className="bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded-md">
              ←
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded-md">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;