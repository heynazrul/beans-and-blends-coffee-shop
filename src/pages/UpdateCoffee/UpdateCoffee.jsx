import { HiArrowLeft } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
    console.log(updatedCoffee);

    // send data to server

    fetch(`https://beans-and-blends-server-heynazrul.vercel.app/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#795548',
          });
        }
      });
  };
  return (
    <section className=" bg-[url('/more/bg-update-coffee.png')] bg-cover">
      <Link
        to={'/'}
        className="mx-auto block max-w-7xl">
        <button className="py-14 font-title text-2xl text-brown-700">
          <HiArrowLeft className="mr-2 inline-block"></HiArrowLeft>
          <span> Back to home</span>
        </button>
      </Link>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-[#F4F3F0] px-4 py-16 md:px-16 lg:px-28">
        <div className="w-full space-y-4 text-center md:w-3/4 md:space-y-8 ">
          <h1 className="font-title text-3xl text-[#374151] md:text-5xl">Update {name} Details</h1>
          <p className="text-gray-800">
            It is a long established fact that a reader will be distraceted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>
        </div>
        <form
          onSubmit={handleUpdateCoffee}
          className="grid-row mt-8 grid gap-4 md:min-w-full md:grid-cols-2">
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter coffee name"
              name="name"
              defaultValue={name}
              required
              className="mt-2 w-full rounded-lg border px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div>
            <label className="font-semibold">Quantity</label>
            <input
              type="number"
              placeholder="Enter coffee quantity"
              defaultValue={quantity}
              name="quantity"
              required
              className="mt-2 w-full rounded-lg border  px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div>
            <label className="font-semibold">Supplier</label>
            <input
              type="text"
              placeholder="Enter coffee supplier"
              defaultValue={supplier}
              name="supplier"
              required
              className="mt-2 w-full rounded-lg border  px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div>
            <label className="font-semibold">Taste</label>
            <input
              type="text"
              placeholder="Enter coffee taste"
              defaultValue={taste}
              name="taste"
              required
              className="mt-2 w-full rounded-lg border  px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div>
            <label className="font-semibold">Category</label>
            <input
              type="text"
              placeholder="Enter coffee chef"
              defaultValue={category}
              name="category"
              required
              className="mt-2 w-full rounded-lg border  px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div>
            <label className="font-semibold">Details</label>
            <input
              type="text"
              placeholder="Enter coffee details"
              defaultValue={details}
              name="details"
              required
              className="mt-2 w-full rounded-lg border  px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div className=" md:col-span-2">
            <label className="font-semibold">Photo</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              defaultValue={photo}
              name="photo"
              required
              className="mt-2 w-full rounded-lg border  px-3 py-2  text-gray-800 shadow-sm outline-none focus:border-brown-300"
            />
          </div>
          <div className="mt-2 md:col-span-2">
            <input
              type="submit"
              value="Update Coffee Details"
              className="w-full rounded-md border-2 border-brown-600 bg-[#D2B48C] px-2 py-2 font-title text-2xl  shadow-sm hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateCoffee;
