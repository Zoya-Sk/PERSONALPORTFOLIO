export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology (BSc-IT)",
      college: "SNDT College Churchgate, SNDT University",
      duration: "2023 – 2026",
      result: "7.46 CGPA – 2nd Year",
    },
    {
      degree: "HSC – Science Stream",
      college: "SVT College of Home Science for Womens, Santacruz, Mumbai",
      duration: "2021 – 2022",
      result: "Score: 61%",
    },
    {
      degree: "SSC – Secondary Education",
      college: "St. Mary's High School, Mumbai",
      duration: "2020",
      result: "Score: 62%",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600">Education</h2>
          <p className="text-gray-600 mt-2">My academic background and milestones</p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-700">{edu.degree}</h3>
              <p className="text-gray-700">{edu.college}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
              <p className="text-sm mt-2 text-gray-600">{edu.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
