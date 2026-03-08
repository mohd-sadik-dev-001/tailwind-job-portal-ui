import React from "react";
import User from "./components/User";

import myphoto from "./assets/myphoto.png";
import img2 from "./assets/user2.png";
import img3 from "./assets/user3.png";
import img4 from "./assets/user4.png";
import img5 from "./assets/user5.png";
import img6 from "./assets/user6.png";
import img7 from "./assets/user7.png";
import img8 from "./assets/user8.png";

const App = () => {

  const users = [
    {
      img: myphoto,
      tag: "React Developer",
      color: "#2563eb",
      desc: "Hi, I am Mohd Sadik. I am learning React JS and building modern UI projects using Tailwind CSS and JavaScript."
    },
    {
      img: img2,
      tag: "Mobile Banking",
      color: "#14b8a6",
      desc: "Digital banking apps allow users to transfer money, check balances, and manage accounts online."
    },
    {
      img: img3,
      tag: "Online Payments",
      color: "#f59e0b",
      desc: "Online payment systems make transactions faster, safer, and more convenient for users."
    },
    {
      img: img4,
      tag: "Customer Support",
      color: "#ec4899",
      desc: "Banks provide customer support services to help users resolve financial issues."
    },
    {
      img: img5,
      tag: "Business Banking",
      color: "#6366f1",
      desc: "Business banking helps companies manage payments, salaries, and financial planning."
    },
    {
      img: img6,
      tag: "Investments",
      color: "#22c55e",
      desc: "Investment platforms help users grow wealth through stocks, mutual funds, and savings plans."
    },
    {
      img: img7,
      tag: "Student Banking",
      color: "#eab308",
      desc: "Student banking services help young users manage expenses and savings."
    },
    {
      img: img8,
      tag: "Freelancer Payments",
      color: "#ef4444",
      desc: "Freelancers receive international payments easily using digital banking services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">

      <h1 className="text-center text-5xl font-bold pt-10">
        Digital Banking Customer Segmentation 
      </h1>

      <div className="flex justify-between items-center px-20 py-8">
        <h2 className="bg-black text-white px-6 py-2 rounded-full uppercase">
          Target Audience
        </h2>

        <button className="bg-yellow shadow-md px-6 py-2 rounded-full uppercase text-sm">
          Banking UI Dashboard
        </button>
      </div>

      <User users={users} />

    </div>
  );
};

export default App;