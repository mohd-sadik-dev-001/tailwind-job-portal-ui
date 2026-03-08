import React from "react";

const User = ({ users }) => {
  return (
    <div className="flex px-20 gap-14 items-center h-[80vh]">

      
      <div className="w-1/3 flex flex-col justify-between h-full">

        <div>
          <h1 className="text-6xl font-bold mb-10 leading-tight">
            Smart <br />
            <span className="text-blue-600">Customer</span> <br />
            Analytics
          </h1>

          <p className="text-gray-600 text-lg w-[90%]">
            This dashboard helps analyze different banking users
            and understand how customers interact with digital services.
          </p>
        </div>

        <div className="text-7xl font-bold text-gray-700">
          
        </div>

      </div>

     
      <div className="flex gap-10 overflow-x-auto w-2/3 pb-6">

        {users.map((user, index) => (
          <div
            key={index}
            className="relative w-72 h-[430px] rounded-3xl overflow-hidden shadow-xl shrink-0 hover:scale-105 transition duration-300"
          >

            <img
              src={user.img}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 p-6 flex flex-col justify-between">

              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>

              <div>

                <p className="text-white text-lg mb-6">
                  {user.desc}
                </p>

                <div className="flex justify-between items-center">

                  <button
                    style={{ backgroundColor: user.color }}
                    className="px-6 py-2 rounded-full text-white"
                  >
                    {user.tag}S
                  </button>

                  <span className="text-white text-xl">→</span>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default User;