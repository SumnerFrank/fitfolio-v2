import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/fitshop">← Back to Products</Link>

        {user ? (
          <>
            
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>

      <section className="py-20 bg-orange-200">
  <div className="container mx-auto px-4">
    <h2 className="mb-8 text-5xl font-bold font-heading text-gray-700"></h2>
    <p className="mb-14 text-lg text-gray-500">Recent Orders</p>
    <div className="mb-12 py-8 px-8 md:px-20 bg-white">
      <div className="flex flex-wrap mb-8 pb-4 border-b">
        <div className="mr-20">
          <h3 className="text-gray-600">Order Number</h3>
          <p className="text-blue-300 font-bold font-heading">XYZ0864395</p>
        </div>
        <div className="mr-auto">
          <h3 className="text-gray-600">Date</h3>
          <p className="text-blue-300 font-bold font-heading">June 05, 2021</p>
        </div>
        <a className="inline-flex mt-6 md:mt-0 w-full lg:w-auto justify-center items-center py-4 px-6 border hover:border-gray-500 rounded-md font-bold font-heading" href="#">
          <svg width="16" height="20" viewbox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V0.25C0.585786 0.25 0.25 0.585786 0.25 1L1 1ZM15 19V19.75C15.4142 19.75 15.75 19.4142 15.75 19H15ZM1 19H0.25C0.25 19.4142 0.585786 19.75 1 19.75L1 19ZM10 1L10.5303 0.46967C10.3897 0.329018 10.1989 0.25 10 0.25V1ZM15 6H15.75C15.75 5.80109 15.671 5.61032 15.5303 5.46967L15 6ZM15 18.25H1V19.75H15V18.25ZM1.75 19V1H0.25V19H1.75ZM1 1.75H10V0.25H1V1.75ZM14.25 6V19H15.75V6H14.25ZM9.46967 1.53033L14.4697 6.53033L15.5303 5.46967L10.5303 0.46967L9.46967 1.53033ZM8.25 1V5H9.75V1H8.25ZM11 7.75H15V6.25H11V7.75ZM8.25 5C8.25 6.51878 9.48122 7.75 11 7.75V6.25C10.3096 6.25 9.75 5.69036 9.75 5H8.25Z" fill="black"></path>
          </svg>
          <span className="ml-4">View Invoice</span>
        </a>
      </div>
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
          <div className="flex items-center justify-center h-72 bg-gray-100">
            <img className="h-64 object-cover" src="../images/SMbottle.png" alt=""/>
          </div>
        </div>
        <div className="w-full lg:w-5/6 px-4">
          <div className="flex mb-16">
            <div className="mr-auto">
              <h3 className="text-xl font-bold font-heading text-gray-700">24oz Water Bottle</h3>
              <p className="text-gray-500">Simple Modern</p>
            </div>
            <span className="text-2xl font-bold font-heading text-red-500">$29.89</span>
          </div>
          <div className="flex flex-wrap -mx-10">
            <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
              <h4 className="mb-6 font-bold font-heading text-gray-700">Ordered on</h4>
              <p className="text-gray-500">07/17/2021</p>
            </div>
            <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
              <h4 className="mb-6 font-bold font-heading text-gray-700">Delivered</h4>
              <p className="text-gray-500">07/23/2021</p>
            </div>
            <div className="w-full lg:w-auto ml-auto px-10"><a className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" href="#">View summary</a><a className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" href="#">Buy again</a></div>
          </div>
        </div>
      </div>
     </div>
        </div>
    </section>
    
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="mb-8 text-sm font-bold font-heading text-gray-500">TRUSTED BY BRANDS ALL OVER THE WORLD</h2>
    <div className="flex flex-wrap -mx-4 justify-between">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="/UnderArmourLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="/AdidasLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="PumaLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 md:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="NikeLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 md:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="NorthFaceLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="EAlogo.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  );
}



export default OrderHistory;
