import React from "react";

const SimilarCardsVehicle = ({
    image,
    title,
    feature,
    price,
    rating
}) => {
  return (
    <div className="min-h-screen text-right pt-12">
      <main>
        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-6">
            <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
              <div className=" w-full rounded-lg shadow-md overflow-hidden mb-4 sm:mb-6 p-2 bg-white float-right">
                <div className="flex">
                  <img
                    className="w-[50px] h-[100px] object-cover"
                    src={image}
                    alt="/"
                  />
                  <div className="p-4 flex flex-col justify-between float-right">
                    <div>
                      <div className="flex mb-2">
                       

                        <svg
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-[6px] ml-[3px]"
                        >
                          <path
                            d="M13.4185 4.57767L9.26153 3.98457L7.40326 0.28611C7.3525 0.184848 7.269 0.102875 7.16585 0.0530477C6.90717 -0.0723237 6.59282 0.0321525 6.46348 0.28611L4.60521 3.98457L0.448251 4.57767C0.333644 4.59374 0.228861 4.64679 0.148636 4.72715C0.0516486 4.82502 -0.0017959 4.95668 4.60817e-05 5.09321C0.00188807 5.22974 0.0588658 5.35996 0.158459 5.45527L3.16607 8.33399L2.45551 12.3989C2.43885 12.4935 2.44951 12.5907 2.48628 12.6796C2.52305 12.7686 2.58446 12.8456 2.66355 12.902C2.74264 12.9584 2.83625 12.9919 2.93375 12.9987C3.03125 13.0055 3.12875 12.9854 3.21519 12.9406L6.93337 11.0214L10.6515 12.9406C10.7531 12.9936 10.8709 13.0113 10.9839 12.992C11.2688 12.9438 11.4603 12.6786 11.4112 12.3989L10.7007 8.33399L13.7083 5.45527C13.7901 5.37651 13.8442 5.27364 13.8605 5.16113C13.9047 4.87985 13.705 4.61946 13.4185 4.57767Z"
                            fill="#EEA651"
                          />
                        </svg>
                        <span className="text-yellow-500">{rating}</span>
                      </div>
                      <div className="">
                      <h3 className="text-lg font-semibold ml-[220px]">
                          {title}
                        </h3>
                        <p className="text-gray-500 text-md p-2 ml-[300px]">
                          {feature}
                        </p>
                        <p className="text-gray-500 text-md p-2 ml-[300px]">
                          {price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
};

//   return (
//     <div className="min-h-screen p-10 mt-10 flex justify-center items-center">
//       <div className="grid grid-cols-1 w-full h-[20%] sm:grid-cols-2 gap-4 max-w-7xl">
//         {properties.map(property => (
//           <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img className="w-full h-48 object-cover" src={property.image} alt={property.title} />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{property.title}</h2>
//               <p className="text-gray-600">{property.location}</p>
//               <p className="text-indigo-600">{property.price}</p>
//               <div className="flex items-center mt-2">
//                 <span className="text-gray-600 mr-2">{property.beds} غرف</span>
//                 <span className="text-gray-600 mr-2">{property.baths} حمامات</span>
//                 <span className="text-gray-600">{property.size}</span>
//               </div>
//               <div className="flex items-center mt-2">
//                 <span className="text-yellow-500">{property.rating} ★</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

export default SimilarCardsVehicle;
