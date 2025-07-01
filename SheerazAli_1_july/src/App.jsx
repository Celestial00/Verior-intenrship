import React from "react";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    quote: "Code is like humor.",

    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    quote: "Design is intelligence.",

    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alex Ronin",
    role: "Project Manager",
    quote: "Planning is essential.",

    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    id: 4,
    name: "Nora Fields",
    role: "Marketing Lead",
    quote: "Make it simple.",

    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "David Lane",
    role: "DevOps Engineer",
    quote: "Automate everything.",

    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    id: 6,
    name: "Emily Zhao",
    role: "Data Scientist",
    quote: "Bring data.",

    image: "https://randomuser.me/api/portraits/women/88.jpg",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className=" cursor-pointer grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl w-full">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center p-6"
          >
            <img
              className={`w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4`}
              src={profile.image}
              alt={profile.name}
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {profile.name}
            </h2>
            <p className={`text-black-600 text-sm`}>{profile.role}</p>
            <p className="text-gray-500 text-sm italic mt-2">
              "{profile.quote}"
            </p>
            <button
              className={`mt-4 px-4 py-2 bg-blue-800 text-white text-sm rounded-full hover:bg-${profile.color}-700`}
            >
              Connect
            </button>
            <button
              className={`mt-4 px-4 py-2 bg-purple-800 text-white ml-2 text-sm rounded-full hover:bg-${profile.color}-700`}
            >
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
