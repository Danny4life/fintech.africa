const SectionFour = ({ dot, hr, img2 }) => {
    return ( 
        <main>
            <section className="bg-[#FFFFFF]">
                    <div className="lg:flex">
                        <div className="lg:flex-1 non-italic">
                            <h1 className="text-2xl leading-7 font-normal ml-6 pt-12
                            lg:font-bold lg:text-4xl lg:leading-10 text-[#3A0CA3] lg:pt-12 lg:ml-28 mb-8">
                                How it works
                            </h1>
                            <p className="ml-6
                            lg:w-[26rem] font-normal lg:text-[#012A4A] text-base lg:ml-28 leading-6 mb-12">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.
                            </p>
                            <div className="flex">
                                <div>
                                    <div className="ml-6
                                    flex justify-center items-center w-[32px] h-[32px] bg-[#FFFFFFF] border border-[#012A4A] rounded-2xl lg:ml-24"
                                    >   
                                        <span className="flex justify-center items-center">
                                            {dot}
                                        </span> 
                                    </div>
                                    <div className="lg:ml-28 pt-1 ml-9">
                                        {hr}
                                    </div>
                                </div>
                                

                                <div className="non-italic ml-8">
                                    <span className="text-sm font-light text-[#012A4A] leading-6">STEP ONE</span> 
                                    <h2 className="lg:text-2xl font-semibold text-[#012A4A] leading-7 mb-6 pt-4">Sign in or Sign up your account</h2>   
                                    <p className="lg:w-[26rem] lg:text-base font-normal text-[#012A4A] leading-6 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Feugiat eget ipsum, sed praesent.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div>
                                    <div className="ml-6
                                    flex justify-center items-center w-[32px] h-[32px] bg-[#FFFFFFF] border border-[#012A4A] rounded-2xl lg:ml-24"
                                    >   
                                        <span className="flex justify-center items-center">
                                            {dot}
                                        </span> 
                                    </div>
                                    <div className="lg:ml-28 pt-1 ml-9">
                                             {hr}    
                                    </div>
                                </div>
                                

                                <div className="non-italic ml-8">
                                    <span className="text-sm font-light text-[#012A4A] leading-6 mb-4">STEP TWO</span> 
                                    <h2 className="lg:text-2xl font-semibold text-[#012A4A] leading-7 pt-4 mb-6">Click transfer on your dashboard</h2>   
                                    <p className="lg:w-[26rem] text-base font-normal text-[#012A4A] leading-6 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Feugiat eget ipsum, sed praesent.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div>
                                    <div className="ml-6
                                    flex justify-center items-center w-[32px] h-[32px] bg-[#FFFFFFF] border border-[#012A4A] rounded-2xl lg:ml-24"
                                    >   
                                        <span className="flex justify-center items-center">
                                            {dot}
                                        </span> 
                                    </div>
                                    <div className="lg:ml-28 pt-1 ml-9">
                                            {hr}
                                    </div>
                                </div>
                                

                                <div className="non-italic ml-8">
                                    <span className="text-sm font-light text-[#012A4A] leading-6 mb-6">STEP THREE</span> 
                                    <h2 className="lg:text-2xl font-semibold text-[#012A4A] leading-7 pt-4 mb-6">Select your desire bank and send</h2>   
                                    <p className="lg:w-[26rem] text-base font-normal text-[#012A4A] leading-6 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Feugiat eget ipsum, sed praesent.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex-1 lg:py-16 lg:ml-44 lg:block flex justify-center">
                            <div className="
                            lg:w-[476px] w-[350px] lg:h-[577px] h-[400px] bg-[#cbb7e9] rounded-2xl flex justify-center">
                                <img src={img2} alt="image" className="h-[400px] lg:h-[577px]" />

                            </div>                       
                        </div>                    
                    </div>

                    <div className="non-italic text-center lg:flex lg:flex-col lg:justify-center lg:items-center">
                        <h1 className="text-2xl leading-7 font-normal pt-12 mb-6
                        lg:text-4xl lg:font-bold lg:leading-10 text-[#3A0CA3]">
                            Hear from our customers
                        </h1>
                        <p className="text-base font-normal leading-6 text-[#012A4A] mb-16 lg:w-[416px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.

                        </p>
                    </div>

                    <div className="lg:flex lg:gap-6 lg:justify-center lg:flex-row non-italic flex flex-col gap-4 items-center lg:mb-12 mb-4">
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                       <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnsonss</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center mb-20
                    lg:flex lg:gap-6 lg:justify-center non-italic lg:flex-row">
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                       <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                </section>
        </main>
     );
}
 
export default SectionFour;