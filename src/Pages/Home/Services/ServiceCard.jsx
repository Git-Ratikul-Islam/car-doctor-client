// AiOutlineArrowRight
import { AiOutlineArrowRight } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
      // eslint-disable-next-line react/prop-types
      const { title, img, price } = service;
      return (
            <>
                  <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="">
                              <img src={img} alt="Shoes" className="rounded-xl h-[208px] w-[314px]" />
                        </figure>
                        <div className="card-body ml-3">
                              <h2 className="card-title text-[25px] font-bold">{title}</h2>
                              <div className='flex'>
                                    <p className='mt-5 text-[#FF3811] text-[20px] font-semibold'>Price: ${price}</p>
                                    <AiOutlineArrowRight className='mr-3 mt-7 text-[#FF3811]'></AiOutlineArrowRight>
                              </div>

                        </div>
                  </div>
            </>
      );
};

export default ServiceCard;