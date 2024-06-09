import React from "react";
import chrome from "../assets/chrome.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organizations",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus aut deserunt doloremque culpa? Repellat mollitia, exercitationem minus iste aliquam voluptatum molestiae animi.",
      image: "/src/assets/charizard.png",
    },
    {
      id: 2,
      title: "Membership Organizations",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus aut deserunt doloremque culpa? Repellat mollitia, exercitationem minus iste aliquam voluptatum molestiae animi.",
      image: "/src/assets/charizard.png",
    },
    {
      id: 3,
      title: "Membership Organizations",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus aut deserunt doloremque culpa? Repellat mollitia, exercitationem minus iste aliquam voluptatum molestiae animi.",
      image: "/src/assets/charizard.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img className="max-w-12" src={chrome} alt="" />
          <img className="max-w-12" src={chrome} alt="" />
          <img className="max-w-12" src={chrome} alt="" />
          <img className="max-w-12" src={chrome} alt="" />
          <img className="max-w-12" src={chrome} alt="" />
          <img className="max-w-12" src={chrome} alt="" />
          <img className="max-w-12" src={chrome} alt="" />
        </div>
      </div>
      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Interact with the entire community
        </h2>
        <p className="text-neutralGrey">With over 50,000 Members!</p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8FSE9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
