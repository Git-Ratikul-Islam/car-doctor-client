import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
      return (
            <div className="hero min-h-screen ">
                  <div className="hero-content flex-col lg:flex-row md:flex-col sm:flex-col">
                        <div className='lg:w-1/2 relative'>
                              <img src={person} className="w-[460px] h-[473px] object-left-top object-cover shadow-2xl" />
                              <img src={parts} className="w-[327px] h-[332px] object-cover rounded-lg border-white border-8 absolute top-1/2 right-[80px] shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2 mt-28 md:mt-0 lg:mt-0 p-5 md:p-0 lg:p-0'>
                              <p className='text-orange-400 font-bold mb-7'>About Us</p>
                              <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                              <p className="py-6">WThere are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which dont <br /> look even slightly believable. </p>
                              <p className="py-6">the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. </p>
                              <button className="btn btn-primary bg-red-400 border-none text-white">Get Started</button>
                        </div>
                  </div>
            </div>
      );
};

export default About;