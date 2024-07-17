import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flat1 from "../../assets/Images/Flat1.png";
import Flat2 from "../../assets/Images/Flat2.png";
import Person from "../../assets/ImagesVehicle/person.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DescriptionTravelOrder = () => {

  const {t} = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const hotels = [
    {
      id: 1,
      name: "فندق الشفاء",
      location: "سيناء",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
    {
      id: 2,
      name: "منتجع الدار",
      location: "الدمام",
      image: Flat2,
      status: "غير مرخص",
      rating: 4.2,
    },
    {
      id: 3,
      name: "فندق القصران",
      location: "الرياض",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
    {
      id: 4,
      name: "فندق النجوم",
      location: "بيروت",
      image: Flat2,
      status: "غير مرخص",
      rating: 4.2,
    },
    {
      id: 5,
      name: "فندق الأمراء",
      location: "الكويت",
      image: Flat1,
      status: " غير مرخص",
      rating: 4.2,
    },
  ];

  const resturants = [
    {
      id: 1,
      name: "مطعم الشفاء",
      location: "طور سيناء",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
    {
      id: 2,
      name: "مطعم الدار",
      location: "الدمام",
      image: Flat2,
      status: "غير مرخص",
      rating: 4.2,
    },
    {
      id: 3,
      name: "مطعم القصران",
      location: "الرياض",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
    {
      id: 4,
      name: "مطعم النجوم",
      location: "بيروت",
      image: Flat2,
      status: "غير مرخص",
      rating: 4.2,
    },
    {
      id: 5,
      name: "مطعم الأمراء",
      location: "الكويت",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
  ];

  return (
    <div className="min-h-screen text-right pt-12">
      <main>
        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <svg
                width="25"
                height="36"
                viewBox="0 0 30 36"
                fill="none"
                className="float-right"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C11.0232 0.00442346 7.21062 1.49589 4.39859 4.14723C1.58656 6.79857 0.0047075 10.3933 1.59585e-05 14.1429C-0.00474707 17.207 1.05681 20.188 3.02183 22.6286C3.02183 22.6286 3.43092 23.1364 3.49774 23.2097L15 36L26.5077 23.2033C26.5677 23.1351 26.9782 22.6286 26.9782 22.6286L26.9795 22.6247C28.9436 20.1852 30.0046 17.2056 30 14.1429C29.9953 10.3933 28.4134 6.79857 25.6014 4.14723C22.7894 1.49589 18.9768 0.00442346 15 0ZM15 19.2857C13.9212 19.2857 12.8666 18.9841 11.9696 18.419C11.0726 17.8539 10.3735 17.0507 9.96066 16.1109C9.54782 15.1712 9.4398 14.1372 9.65027 13.1395C9.86073 12.1419 10.3802 11.2255 11.1431 10.5063C11.9059 9.78707 12.8778 9.29726 13.9359 9.09882C14.9939 8.90038 16.0907 9.00223 17.0874 9.39148C18.084 9.78073 18.9359 10.4399 19.5353 11.2856C20.1346 12.1314 20.4545 13.1257 20.4545 14.1429C20.4527 15.5063 19.8775 16.8134 18.8549 17.7775C17.8324 18.7416 16.4461 19.284 15 19.2857Z"
                  fill="#415770"
                />
              </svg>
              <p className="mb-4 text-gray-600 leading-relaxed text-2xl font-bold space-y-4">
                الانطلاق من المارينا والإبحار باتجاه محمية رأس محمد. عمل ثلاث
                وقفات سنوركلينج في أشهر مواقع الغطس والشعاب المرجانية في شرم
                الشيخ وذلك مع مرشدين سنوركلينج محترفين. تناول الغداء من بوفيه
                مفتوح به مأكولات متنوعة تناسب جميع الأذواق ، العودة إلى
                المارينا.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4">
            {t('travel_ser_des2')}
          </h3>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="25" rx="2.42157" fill="#EBEAFA" />
            <rect
              x="0.403595"
              y="0.403595"
              width="24.1928"
              height="24.1928"
              rx="2.01797"
              stroke="black"
              stroke-opacity="0.5"
              stroke-width="0.80719"
            />
            <path
              d="M18.3333 9.18182H6.06667V7.54545C6.06667 7.40079 6.01048 7.26205 5.91046 7.15976C5.81044 7.05747 5.67478 7 5.53333 7C5.39188 7 5.25623 7.05747 5.15621 7.15976C5.05619 7.26205 5 7.40079 5 7.54545V18.4545C5 18.5992 5.05619 18.7379 5.15621 18.8402C5.25623 18.9425 5.39188 19 5.53333 19C5.67478 19 5.81044 18.9425 5.91046 18.8402C6.01048 18.7379 6.06667 18.5992 6.06667 18.4545V16.2727H19.9333V18.4545C19.9333 18.5992 19.9895 18.7379 20.0895 18.8402C20.1896 18.9425 20.3252 19 20.4667 19C20.6081 19 20.7438 18.9425 20.8438 18.8402C20.9438 18.7379 21 18.5992 21 18.4545V11.9091C21 11.1858 20.719 10.4921 20.219 9.98062C19.7189 9.46915 19.0406 9.18182 18.3333 9.18182ZM6.06667 10.2727H10.8667V15.1818H6.06667V10.2727ZM11.9333 15.1818V10.2727H18.3333C18.7577 10.2727 19.1646 10.4451 19.4647 10.752C19.7648 11.0589 19.9333 11.4751 19.9333 11.9091V15.1818H11.9333Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
          <Slider {...settings}>
            {hotels.map((hotel) => (
              <div key={hotel.id} className="p-2">
                <div className=" w-full rounded-lg shadow-md overflow-hidden mb-4 sm:mb-6 p-2 bg-white float-right">
                  <div className="flex">
                    <img
                      className="w-32 h-34 object-cover"
                      src={hotel.image}
                      alt="/"
                    />
                    <div className="p-4 flex flex-col justify-between float-right">
                      <div>
                        <div className="flex mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold mr-2 ${
                              hotel.status === "مرخص"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {hotel.status}
                          </span>

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
                          <span className="text-yellow-500">
                            {hotel.rating}
                          </span>
                        </div>
                        <div className="">
                          <h3 className="text-[18px] font-semibold  mr-[10px]">
                            {hotel.name}
                          </h3>

                          <p className="text-gray-500 text-md p-2 ml-[290px]">
                            {hotel.location}
                          </p>
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 30 36"
                            fill="none"
                            className="float-right mr-[60px] mt-[-25px]"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 0C11.0232 0.00442346 7.21062 1.49589 4.39859 4.14723C1.58656 6.79857 0.0047075 10.3933 1.59585e-05 14.1429C-0.00474707 17.207 1.05681 20.188 3.02183 22.6286C3.02183 22.6286 3.43092 23.1364 3.49774 23.2097L15 36L26.5077 23.2033C26.5677 23.1351 26.9782 22.6286 26.9782 22.6286L26.9795 22.6247C28.9436 20.1852 30.0046 17.2056 30 14.1429C29.9953 10.3933 28.4134 6.79857 25.6014 4.14723C22.7894 1.49589 18.9768 0.00442346 15 0ZM15 19.2857C13.9212 19.2857 12.8666 18.9841 11.9696 18.419C11.0726 17.8539 10.3735 17.0507 9.96066 16.1109C9.54782 15.1712 9.4398 14.1372 9.65027 13.1395C9.86073 12.1419 10.3802 11.2255 11.1431 10.5063C11.9059 9.78707 12.8778 9.29726 13.9359 9.09882C14.9939 8.90038 16.0907 9.00223 17.0874 9.39148C18.084 9.78073 18.9359 10.4399 19.5353 11.2856C20.1346 12.1314 20.4545 13.1257 20.4545 14.1429C20.4527 15.5063 19.8775 16.8134 18.8549 17.7775C17.8324 18.7416 16.4461 19.284 15 19.2857Z"
                              fill="#415770"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4">
            {t('travel_ser_des1')}
          </h3>
          <Slider {...settings}>
            {resturants.map((resturant) => (
              <div key={resturant.id} className="p-2">
                <div className=" w-full rounded-lg shadow-md overflow-hidden mb-4 sm:mb-6 p-2 bg-white float-right">
                  <div className="flex">
                    <img
                      className="w-32 h-34 object-cover"
                      src={resturant.image}
                      alt="/"
                    />
                    <div className="p-4 flex flex-col justify-between float-right">
                      <div>
                        <div className="flex mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold mr-2 ${
                              resturant.status === "مرخص"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {resturant.status}
                          </span>
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
                          <span className="text-yellow-500">
                            {resturant.rating}
                          </span>
                        </div>
                        <div className="">
                          <h3 className="text-lg font-semibold ml-[220px]">
                            {resturant.name}
                          </h3>
                          <p className="text-gray-500 text-md p-2 ml-[220px]">
                            {resturant.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="shadow sm:rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
            {t('about_b_address')}
            </h3>
            <img
              src="link_to_map_image.jpg"
              alt="Map"
              className="w-full h-64 object-cover mt-2"
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="shadow sm:rounded-lg p-6">
            <h3 className="text-2xl leading-6 font-bold text-gray-900">
              {t('des_vehicle_contact')}
            </h3>
            <div className="flex items-center mt-[-30px]">
              <img
                className="h-10 w-10 rounded-full"
                src={Person}
                alt="Profile"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-500">+966 435 426 763</p>
              </div>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                className="ml-[60px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.862 26.9962C17.9147 26.9245 12.3961 26.162 6.61639 20.3848C0.838069 14.6064 0.0767314 9.09016 0.00370796 7.14191C-0.104475 4.1729 2.17007 1.28906 4.79756 0.162841C5.11397 0.0262438 5.46045 -0.0257631 5.80303 0.0119242C6.1456 0.0496114 6.47249 0.175698 6.75161 0.377811C8.91527 1.95425 10.4082 4.3392 11.6902 6.21443C11.9722 6.62643 12.0928 7.12778 12.029 7.62295C11.9651 8.11812 11.7213 8.57251 11.344 8.89952L8.70567 10.8586C8.5782 10.9506 8.48848 11.0858 8.45316 11.2389C8.41785 11.3921 8.43934 11.5529 8.51364 11.6914C9.11135 12.7771 10.1743 14.3941 11.3913 15.6109C12.6097 16.8277 14.3028 17.9607 15.4644 18.6259C15.61 18.7076 15.7815 18.7305 15.9434 18.6897C16.1054 18.649 16.2456 18.5478 16.3353 18.4068L18.0527 15.7934C18.3684 15.3741 18.8342 15.0932 19.3525 15.0095C19.8707 14.9258 20.4013 15.0459 20.833 15.3445C22.7356 16.6614 24.9561 18.1283 26.5815 20.2091C26.8001 20.4902 26.9391 20.8248 26.9841 21.178C27.0291 21.5312 26.9783 21.8899 26.8371 22.2168C25.7053 24.8573 22.8411 27.1057 19.862 26.9962Z"
                  fill="#800080"
                />
              </svg>
            </div>
          </div>
        </section>
       
          

          <div className="flex grid-cols-1 sm:grid-cols-2 justify-center items-center">
          <span className=" font-bold">
             {t('des_proprty_price')}
            <span className="text-2xl">
              <span className="text-blue-600 tex">{t('details_travel_des_price')}</span>
            </span>
          </span>
            <Link to="/choose_categories">
              <button className="bg-[#C70000] py-5 px-8 ml-6 mb-4 hover:bg-red-700 text-[#fff] w-[120px] rounded-full font-medium my-6 md:py-3 text-[23px]">
              {t('details_travel_des_delete')}
              </button>
            </Link>
            <Link to="">
              <button className="bg-[#FFA500] py-5 px-8 ml-6 mb-4 hover:bg-amber-500 text-[#fff] w-[120px] rounded-full font-medium my-6 md:py-3 text-[23px]">
              {t('details_travel_des_edit')}
              </button>
            </Link>
          </div>

      </main>
    </div>
  );
};

export default DescriptionTravelOrder;
