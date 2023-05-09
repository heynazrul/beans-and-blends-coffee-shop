/* eslint-disable react/prop-types */
import { AiFillEye } from 'react-icons/ai';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = ({ product, products, setProducts }) => {
  const { _id, photo, name, category, quantity } = product;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D2B48C',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://beans-and-blends-server-heynazrul.vercel.app/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            if (response.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your coffee has been deleted.', 'success');
              const remaining = products.filter((pd) => pd._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className=" flex flex-col items-center justify-between space-y-4 rounded-xl bg-[#F5F4F1] bg-opacity-80 p-8 sm:flex-row">
      <div className="h-60">
        <img
          src={photo}
          className="h-full w-full rounded-xl object-cover object-center"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:ml-8 sm:flex-row ">
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
        <div className="mt-3 flex gap-4 text-gray-400 sm:flex-col">
          <button className="rounded-md bg-[#D2B48C] p-2 text-xl text-white">
            <AiFillEye></AiFillEye>
          </button>
          <button className="rounded-md bg-gray-900 p-2 text-xl text-white">
            <Link to={`/updateCoffee/${_id}`}>
              <MdModeEdit></MdModeEdit>
            </Link>
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="rounded-md bg-red-600 p-2 text-xl text-white">
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
