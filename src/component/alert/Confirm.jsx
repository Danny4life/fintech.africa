import GoodIcon from "../../svg/GoodIcon";


const Confirm = () => {


   



    return ( 
        <div className="relative flex justify-center">
             <div className="text-sm font-bold leading-4 text-[#21334F] gap-2 shadow flex absolute
                    bottom-5 w-[360px] h-[49px] bg-[#FFFFFF] text-center items-center justify-center">  
                        <GoodIcon />   
                       <span>Your email has been confirmed</span>
                       
            </div> 
                  
        </div>
     );
}
 
export default Confirm;