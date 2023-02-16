const SectionOne = ({ btn, img, good, verify, transfer }) => {
    return ( 
        <main>
                 <section className=" md:flex">
                    <div className="md:flex-1">
                        <div className="non-italic bg-[#e5efe6] lg:h-[742px] h-[300px] lg:w-[742px]">
                            <h1 className="pt-12 font-normal text-2xl leading-7 ml-6 mb-4 md:text-3xl
                            lg:font-bold lg:text-5xl lg:leading-[3.813rem] lg:ml-24 
                            text-[#3A0CA3] lg:w-[90%] lg:pt-60 lg:pl-4"
                            >
                                Quick and easy payment platform for all your transactions
                            </h1>

                            <p className="ml-6 mb-4
                            lg:w-[70%] lg:font-normal lg:text-base lg:leading-6 text-[#012A4A] lg:ml-28 lg:mb-6">
                                Save and manage all your transaction in one place, easy payment 
                                anytime & anyday.
                            </p>
                            
                            <div className="ml-6 lg:ml-28">
                                {btn}
                            </div>
                           
                        </div>
                    </div>
                    <div className="md:flex-2 bg-[#d5c3b1]"></div>
                    <div className="sm:max-md:h-[450px] md:flex-1 
                        lg:pl-44 lg:w-[742px] lg:h-[742px] bg-[#cbb7e9] lg:pt-32"
                        >
                        
                        <img src={img} alt="image" 
                            className="h-[300px] ml-6 md:ml-16 rounded-[50%] bg-[#9981b7] 
                            lg:mt-20 lg:h-[455px]" 
                        />
                        <div 
                            className="hidden lg:block w-[178px] h-[145px] bg-[#FFFFFF] md:max-xl:hidden
                            lg:absolute lg:bottom-[18rem]"
                        >
                            <div className="flex pt-4 ml-2 gap-1">
                                <span>{transfer}</span>
                                <span className="font-normal text-sm leading-4 text-[#012A4A] mt-1">Easy Transfer.</span>   
                            </div>

                            <div className="flex pt-4 ml-2 gap-1">
                                <span>{verify}</span>
                                <span className="font-normal text-sm leading-4 text-[#012A4A] mt-1">Verified Payment.</span>   
                            </div>

                            <div className="flex pt-4 ml-2 gap-1">
                                <span>{transfer}</span>
                                <span className="font-normal text-sm leading-4 text-[#012A4A] mt-1">Pay on the go.</span>   
                            </div>      

                        </div>
                         <div 
                            className="hidden lg:flex gap-1 justify-center items-center absolute right-6
                            md:top-40 md:right-8 w-[207px] h-[64px] bg-[#FFFFFF] lg:rounded-lg">
                                <span>{good}</span>
                                <span className="font-semibold text-base leading-5 text-[#0b161f]">
                                    Payment Successful
                                </span>
                        </div>
                       
                    </div>
                </section>

        </main>
     );
}
 
export default SectionOne;