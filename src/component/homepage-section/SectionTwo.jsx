const SectionTwo = ({ briefcase, transaction, transfer, security}) => {
    return (
        <main>
                <section>
                    <div className="h-[453px] bg-[#FFFFFF] lg:flex">
                        <div className="lg:flex-1 non-italic lg:flex lg:flex-col justify-center items-center">
                            <h1 className="text-2xl leading-7 ml-6 w-[80%] pt-12 font-normal
                            lg:text-4xl lg:w-[23rem] text-[#3A0CA3] lg:font-bold lg:ml-[-8rem] lg:leading-10 mb-4">
                                Get the convenience of transacting with our services
                            </h1>

                            <p className="ml-6 text-base font-normal lg:w-[26rem] text-[#012A4A] leading-6 lg:ml-[-5rem]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, 
                                sed praesent.
                            </p>
                        </div>
                        <div className="hidden lg:flex-1 lg:block">
                            <div className="lg:flex">
                                <div className="lg:pt-20 lg:pl-28">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">  
                                            {briefcase}
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Keeping secrecy
                                        </p>
                                    </div>                             
                                </div>

                                <div className="lg:pt-20 lg:pl-36">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">
                                            {transaction}
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Convenient transaction
                                        </p>
                                    </div>                              
                                </div>

                            </div>

                            <div className="lg:flex">
                                <div className="lg:pt-2 lg:pl-28">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">
                                            {transfer}
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Free transaction
                                        </p>
                                    </div>
                                   
                                </div>

                                <div className="lg:pl-36">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">
                                            {security}
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Security gauranteed
                                        </p>
                                    </div>
                                   
                                </div>

                            </div>                    
                        </div>
                    </div>
                </section>
        </main>
      );
}
 
export default SectionTwo;