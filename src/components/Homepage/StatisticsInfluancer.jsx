import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

import image from "../../assets/ImagesInfluancers/Azza.png";
import { useTranslation } from "react-i18next";

const data = [
  { name: "23 Nov", value: 15000 },
  { name: "24", value: 20000 },
  { name: "25", value: 25000 },
  { name: "26", value: 30000 },
  { name: "27", value: 35000 },
  { name: "28", value: 40000 },
  { name: "29", value: 45000 },
  { name: "30", value: 60000 },
];



const StatisticsBroker = () => {

  const {t} = useTranslation();

  const orders = [
    {
      id: 1,
      source: t('statis_i_source'),
      price: 4321,
      profit: "+84%",
      profitColor: "text-green-500",
      image: image,
    },
    {
      id: 2,
      source: "محمد خليل",
      price: 4033,
      profit: "-8%",
      profitColor: "text-red-500",
      image: image,
    },
    {
      id: 3,
      source: "محمد خليل",
      price: 3128,
      profit: "+12%",
      profitColor: "text-green-500",
      image: image,
    },
    {
      id: 4,
      source: "محمد خليل",
      price: 2104,
      profit: "+2%",
      profitColor: "text-green-500",
      image: image,
    },
    {
      id: 5,
      source: "محمد خليل",
      price: 2003,
      profit: "+30%",
      profitColor: "text-green-500",
      image: image,
    },
    {
      id: 6,
      source: "محمد خليل",
      price: 1804,
      profit: "+19%",
      profitColor: "text-green-500",
      image: image,
    },
  ];


  return (
    <div className="p-4 bg-[#EBEAFA]">
      <div className="grid grid-cols-1 sm:grid-cols-3 p-12 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-gray-700 text-xl font-medium text-right">
            {t('statis_b_total')}
          </h2>
          <p className="text-gray-900 text-3xl pb-2 font-bold text-left">
            $45,678.90
          </p>
          <p className="text-gray-500 text-left">{t('statis_b_month')}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-gray-700 text-xl font-medium text-right">
            {t('statis_b_profit')}
          </h2>
          <p className="text-gray-900 text-3xl pb-2 font-bold text-left">
            2,405
          </p>
          <p className="text-gray-500 text-left">{t('statis_b_month')}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-gray-700 text-xl font-medium text-right">
            {t('statis_b_conve')}
          </h2>
          <p className="text-gray-900 text-3xl pb-2 font-bold text-left">
            10,353
          </p>
          <p className="text-gray-500 text-left">{t('statis_b_month')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
        <div className="h-[400px] mt-[45px] p-4 bg-white">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[15000, 60000]} tickCount={10} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#800080"
                strokeWidth={4}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          {" "}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4 text-right">
            {t('statis_b_compl')}
            </h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">{t('statis_b_det')}</th>
                  <th className="px-4 py-2">{t('statis_b_profit2')}</th>
                  <th className="px-4 py-2">{t('statis_b_price2')}</th>
                  <th className="px-4 py-2">{t('statis_b_source2')}</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="text-center border-t">
                    <td className="px-4 py-2">
                      <button className="text-white px-2 py-1">
                        <svg
                          width="35"
                          height="36"
                          viewBox="0 0 35 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.19219 5.01C5.56906 5.01 4.30469 6.27219 4.30469 7.8975V28.5103C4.30469 30.1334 5.56906 31.3978 7.19219 31.3978H27.8072C29.4303 31.3978 30.6947 30.1334 30.6947 28.5103V7.89531C30.6947 6.27219 29.4303 5.00781 27.8072 5.00781L7.19219 5.01ZM15.3122 9.45281H19.6872V13.8278H15.3122V9.45281ZM15.3122 16.0153H19.6872V26.9528H15.3122V16.0153Z"
                            fill="#800080"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className={`px-4 py-2 ${order.profitColor}`}>
                      {order.profit}
                    </td>
                    <td className="px-4 py-2">{order.price}</td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      {order.source}
                      <img
                        src={order.image}
                        alt="source"
                        className="rounded-full mr-2 w-[30px] h-[30px]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4 text-right">
            {t('statis_b_pending')}
          </h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">{t('statis_b_det')}</th>
                <th className="px-4 py-2">{t('statis_b_refuse')}</th>
                <th className="px-4 py-2">{t('statis_b_accept')}</th>
                <th className="px-4 py-2">{t('statis_b_source2')}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="text-center border-t">
                  <td className="px-4 py-2">
                    <button className="text-white px-2 py-1">
                      <svg
                        width="35"
                        height="36"
                        viewBox="0 0 35 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.19219 5.01C5.56906 5.01 4.30469 6.27219 4.30469 7.8975V28.5103C4.30469 30.1334 5.56906 31.3978 7.19219 31.3978H27.8072C29.4303 31.3978 30.6947 30.1334 30.6947 28.5103V7.89531C30.6947 6.27219 29.4303 5.00781 27.8072 5.00781L7.19219 5.01ZM15.3122 9.45281H19.6872V13.8278H15.3122V9.45281ZM15.3122 16.0153H19.6872V26.9528H15.3122V16.0153Z"
                          fill="#800080"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-white px-2 py-1">
                      <svg
                        width="30"
                        height="31"
                        viewBox="0 0 83 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M82.4165 41.6067C82.4165 64.3652 63.9668 82.815 41.2083 82.815C18.4496 82.815 0 64.3652 0 41.6067C0 18.848 18.4496 0.398438 41.2083 0.398438C63.9668 0.398438 82.4165 18.848 82.4165 41.6067ZM28.7206 29.1192C29.9276 27.9122 31.8844 27.9122 33.0915 29.1192L41.2083 37.2357L49.3246 29.1192C50.5316 27.9123 52.4886 27.9123 53.6956 29.1192C54.9026 30.3262 54.9026 32.2831 53.6956 33.4899L45.5788 41.6067L53.6956 49.7231C54.9026 50.9301 54.9026 52.8871 53.6956 54.094C52.4886 55.301 50.5316 55.301 49.3246 54.094L41.2083 45.9777L33.0915 54.094C31.8846 55.301 29.9277 55.301 28.7207 54.094C27.5138 52.8871 27.5138 50.9301 28.7207 49.7235L36.8373 41.6067L28.7206 33.4899C27.5136 32.283 27.5136 30.3261 28.7206 29.1192Z"
                          fill="#990033"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-white px-2 py-1">
                      <svg
                        width="30"
                        height="31"
                        viewBox="0 0 30 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 30.7031C12.0333 30.7031 9.13319 29.8234 6.66646 28.1752C4.19972 26.527 2.27714 24.1843 1.14183 21.4434C0.00651479 18.7025 -0.290556 15.6865 0.288222 12.7768C0.867 9.86706 2.29563 7.19432 4.39342 5.09653C6.4912 2.99875 9.16394 1.57013 12.0737 0.991355C14.9834 0.412577 17.9994 0.709617 20.7403 1.84493C23.4812 2.98025 25.8238 4.90284 27.4721 7.36957C29.1203 9.83631 30 12.7364 30 15.7031C30 19.6814 28.4197 23.4967 25.6066 26.3097C22.7936 29.1228 18.9783 30.7031 15 30.7031ZM6.507 19.0856C6.18444 18.7595 6.00352 18.3193 6.00352 17.8606C6.00352 17.4019 6.18444 16.9617 6.507 16.6356L7.39003 15.7576C7.54019 15.6061 7.71925 15.4863 7.91661 15.4053C8.11397 15.3243 8.32561 15.2838 8.53892 15.2862C8.75224 15.2886 8.96289 15.3338 9.1584 15.4192C9.35391 15.5045 9.53027 15.6283 9.67702 15.7831L11.237 17.4016C11.3114 17.4801 11.401 17.5426 11.5003 17.5853C11.5997 17.628 11.7066 17.6501 11.8148 17.6501C11.9229 17.6501 12.0299 17.628 12.1292 17.5853C12.2286 17.5426 12.3181 17.4801 12.3925 17.4016L20.3425 9.20663C20.4903 9.0507 20.6681 8.92627 20.8653 8.84083C21.0624 8.75538 21.2748 8.71069 21.4896 8.70943C21.7045 8.70817 21.9174 8.75036 22.1155 8.83349C22.3136 8.91661 22.4929 9.03895 22.6425 9.19314L23.5 10.0601C23.8147 10.3849 23.9907 10.8194 23.9907 11.2716C23.9907 11.7239 23.8147 12.1583 23.5 12.4831L12.9455 23.2086C12.7982 23.3611 12.622 23.4826 12.4271 23.5661C12.2322 23.6495 12.0226 23.6932 11.8107 23.6946C11.5987 23.696 11.3885 23.6551 11.1926 23.5742C10.9966 23.4933 10.8188 23.3741 10.6695 23.2236L6.507 19.0856Z"
                          fill="#699F4C"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    {order.source}
                    <img
                      src={order.image}
                      alt="source"
                      className="rounded-full mr-2 w-[30px] h-[30px]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4 text-right">
            {t('statis_b_reject')}
          </h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">{t('statis_b_det')}</th>
                <th className="px-4 py-2">{t('statis_b_accept')}</th>
                <th className="px-4 py-2">{t('statis_b_refuse')}</th>
                <th className="px-4 py-2">{t('statis_b_source2')}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="text-center border-t">
                  <td className="px-4 py-2">
                    <button className="text-white px-2 py-1">
                      <svg
                        width="35"
                        height="36"
                        viewBox="0 0 35 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.19219 5.01C5.56906 5.01 4.30469 6.27219 4.30469 7.8975V28.5103C4.30469 30.1334 5.56906 31.3978 7.19219 31.3978H27.8072C29.4303 31.3978 30.6947 30.1334 30.6947 28.5103V7.89531C30.6947 6.27219 29.4303 5.00781 27.8072 5.00781L7.19219 5.01ZM15.3122 9.45281H19.6872V13.8278H15.3122V9.45281ZM15.3122 16.0153H19.6872V26.9528H15.3122V16.0153Z"
                          fill="#800080"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 py-2">_</td>
                  <td className="px-4 py-2">_</td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    {order.source}
                    <img
                      src={order.image}
                      alt="source"
                      className="rounded-full mr-2 w-[30px] h-[30px]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBroker;
