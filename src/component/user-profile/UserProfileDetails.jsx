import { useNavigate } from "react-router-dom";
import Arrow from "../../svg/Arrow";


const UserProfileDetails = () => {

  const navigate = useNavigate();

    return ( 
       <section className="h-max bg-[#E5E5E5] non-italic">
        <section className="">
        <div 
            onClick={() => navigate("/dashboard")}
            className="ml-6 gap-2 non italic flex lg:ml-72 lg:pt-20 lg:px-1 lg:gap-4 cursor-pointer pt-6">
            <span className="lg:pt-20">
                <Arrow />
            </span>
            <span className="text-base font-medium text-[#012A4A] leading-5 lg:pt-20">Go back</span>
        </div>
        <div className='flex justify-center pt-6'>
            <div className='w-[860px] h-[54px] bg-[#C4C4C4] flex justify-center items-center'>
                <span className='ml-2 text-base font-bold leading-5 text-[#012A4A] items-center non-italic'>PROFILE</span>
            </div>
        </div> 
        <section className="flex justify-center items-center pt-8 non-italic">
                <form action="" className="w-[860px] lg:h-[622px] h-[480px] bg-[#FFFFFF]">
                    <div className="pt-6">
                        <label htmlFor="firstname" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            First Name
                        </label>
                        <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First name"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none 
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#000000]"
                        required 
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="lastname" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Last Name
                        </label>
                        <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last name"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#000000]"
                        required 
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="phoneNumber" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Phone Number
                        </label>
                        <input 
                        type="number" 
                        name="phoneNumber" 
                        placeholder="Phone number"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#000000]" 
                        required
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="bvn" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            BVN
                        </label>
                        <input 
                        type="number" 
                        name="bvn" 
                        placeholder="BVN"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#000000]" 
                        required
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="email" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Email
                        </label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#000000]" 
                        required
                        />
                    </div>
                    <div className="non-italic ml-6 lg:pt-10 pt-6">
                        <button 
                            type="button"
                            className="w-[330px] h-[35px] text-sm cursor-not-allowed
                            lg:text-base text-gray-600 leading-4 lg:w-[810px] lg:h-[3rem] bg-[#d7d3d3] rounded-none py-2 px-2"
                            
                        >
                                Done
                        </button>
                    </div>
                </form>
            </section>
        </section>
       </section>
     );
}
 
export default UserProfileDetails;