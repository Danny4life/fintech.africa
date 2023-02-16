const SectionThree = ({ transactionOne }) => {
    return ( 
        <main>
                 <section className="bg-[#E5E5E5] h-[420px]">
                    <div className="lg:flex">
                        <div className="lg:flex-1 lg:flex justify-center items-center lg:mt-20">
                            <img src={transactionOne} alt="transaction-image" className="" />
                        </div>
                        <div className="lg:flex-1 non-italic lg:flex flex-col justify-center items-center">
                            <h1 className="text-2xl leading-7 font-normal ml-6 pt-12 w-[80%]
                            lg:w-[25rem] text-[#3A0CA3] lg:font-bold lg:leading-10 lg:text-4xl mb-4">
                                Choose how you want to make transfers
                            </h1>
                            <p className="ml-6 text-base lg:w-[25rem] font-normal text-[#012A4A] leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, 
                                sed praesent.
                            </p>
                        </div>
                    </div>
                </section>

        </main>
     );
}
 
export default SectionThree;