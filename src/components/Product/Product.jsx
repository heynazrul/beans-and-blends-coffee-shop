/* eslint-disable react/prop-types */
import { AiFillEye } from 'react-icons/ai';
import { MdModeEdit, MdDelete } from 'react-icons/md';

const Product = ({ product }) => {
  const { photo, name, category, quantity } = product;
  return (
    <div className=" justify-between items-center rounded-xl bg-[#F5F4F1] bg-opacity-80 p-8 flex flex-col sm:flex-row space-y-4">
      <div className="">
        <img
          src={photo}
          className="h-full w-full rounded-xl object-cover object-center"
          alt=""
        />
      </div>
      <div className="text-center sm:text-start">
        <p className="text-lg font-semibold text-gray-900">
          Name: <span className="font-normal text-gray-700">{name}</span>
        </p>
        <p className="text-lg font-semibold text-gray-900">
          Category: <span className="font-normal text-gray-700">{category}</span>
        </p>
        <p className="text-lg font-semibold text-gray-900">
          Quantity: <span className="font-normal text-gray-700">{quantity}</span>
        </p>
      </div>
      {/* Button group */}
      <div className="mt-3 flex sm:flex-col gap-4 text-gray-400">
        <AiFillEye className="rounded-md bg-[#D2B48C] p-2 text-4xl text-white"></AiFillEye>
        <MdModeEdit className="rounded-md bg-gray-900 p-2 text-4xl text-white"></MdModeEdit>

        <MdDelete className="rounded-md bg-red-600 p-2 text-4xl text-white"></MdDelete>
      </div>
    </div>
  );
};

export default Product;
