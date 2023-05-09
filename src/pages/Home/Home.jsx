import { Button } from '@material-tailwind/react';
import Hero from '../../components/Hero/Hero';
import { TbCoffee } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../../components/Product/Product';

const Home = () => {
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  return (
    <div>
      <Hero></Hero>
      <section className="relative my-32 max-w-full">
        <div className="mx-auto w-fit space-y-3 text-center">
          <p className="text-xl text-[#1B1A1A]">--- Sip & Savor ---</p>
          <h2 className="font-title text-3xl md:text-5xl">Our Popular Products</h2>
          <Link
            to={'/addCoffee'}
            className="block">
            <Button
              color="brown"
              className="mx-auto flex items-center gap-2 font-body">
              Add Coffee
              <TbCoffee className="h-5 w-5"></TbCoffee>
            </Button>
          </Link>
        </div>
        {/* bg image left */}
        <div className="absolute  hidden md:block -z-10">
          <img src="/more/1.png" />
        </div>
        {/* Products */}
        <section className='max-w-7xl mx-auto z-10 mt-12'>
          <div className="grid gap-8 lg:grid-cols-2">
            {loadedProduct.map((product) => (
              <Product
                key={product._id}
                product={product}></Product>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
