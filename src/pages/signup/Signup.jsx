import { Link } from "react-router-dom";
import img from "../../assets/signup-image.jpg";



const Signup = () => {
    return ( 
        <section>
            <section className="lg:flex">
                <div className="lg:flex-1 non-italic]">
                    <div className="">
                        <h1 className="pt-6 ml-6 mb-20
                            text-2xl font-bold lg:leading-7 text-[#012A4A] lg:pt-20 lg:ml-48"
                        >
                            Fintech.africa
                        </h1>
                        <h1 className="ml-6 mb-8
                            text-2xl font-bold text-[#000000] lg:leading-7 lg:ml-48"
                        >
                            Get Started with Fintech
                        </h1>
                    </div>
                    <form action="/" method="/">
                        <div className="non-italic">
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="firstname" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    First Name
                                </label>
                                <input 
                                type="text" 
                                name="firstname"    
                                placeholder="Enter your first name" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="lastname" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Last Name
                                </label>
                                <input 
                                type="text" 
                                name="lastname"    
                                placeholder="Enter your last name" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="email" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Email
                                </label>
                                <input 
                                type="email" 
                                name="email"    
                                placeholder="Enter your email" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="phone" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Phone Number
                                </label>
                                <input 
                                type="number" 
                                name="phone"    
                                placeholder="Enter your number" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="bvn" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    BVN
                                </label>
                                <input 
                                type="number" 
                                name="bvn"    
                                placeholder="Enter your bvn" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="password" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Password
                                </label>
                                <input 
                                type="password" 
                                name="password"    
                                placeholder="Enter your password" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="confirmPassword" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Confirm Password
                                </label>
                                <input 
                                type="password" 
                                name="password"    
                                placeholder="Confirm your password" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                            <div className="lg:ml-48 ml-6">
                                <label htmlFor="pin" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Pin
                                </label>
                                <input 
                                type="number" 
                                name="pin"    
                                placeholder="Enter transaction pin" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-8
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div>
                           <div className="lg:ml-48 non-italic ml-6">
                            <button className="w-[18rem] mb-8 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2">
                                Sign Up
                            </button>
                           </div>
                           <div className="lg:ml-48 ml-6">
                             <Link to="/" className="text-base font-normal text-[#000000] leading-6 cursor-pointer">Already have an account? Login</Link>
                           </div>
                        </div>
                    </form>
                </div>
                <div className="lg:flex-1">
                    <div className="hidden lg:flex">
                        <img src={img} alt="image" className="lg:h-[1284px] object-cover" />
                    </div>
                </div>

            </section>
        </section>
     );
}
 
export default Signup;