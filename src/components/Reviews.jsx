import right from "../assets/right.png"
import STAR from "../assets/providerprofile/STAR.png"
// import imagebg from "../assets/providerprofile/imagebg.png"
import imagebg1 from "../assets/providerprofile/imagebg1.png"
import like from "../assets/providerprofile/like.png"
const reviews = [
    {
      
      name: "William S. Cunningham",
      text: "The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitias dixit parab les esse, quod parvo",
      time: "2 weeks ago",
    },
    {
      
      name: "Martha E. Thompson",
      text: "The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitias dixit parab les esse, quod parvo",
      time: "2 weeks ago",
    },
  ];
  
  export default function Reviews() {
    return (
      <div className="md:max-w-3x1 bg-white p-4 rounded-xl shadow-3xl ">
        <div className=" flex justify-between items-center gap-2 ">
            <h2 className="font-semibold font-Jost">Reviews</h2>
                <div class="flex items-center space-x-2 cursor-pointer ">
                        <button classname="text-[#1D1F2A] text-sm font-medium">SEE ALL</button>
                        <img src={right} alt="Arrow" class="w-2 h-3" />
                </div>
        </div>
            {reviews.map((review, idx) => (
                
                <div key={idx} className="border-b last:border-b-0 pb-4 mb-4 last:mb-0">
                <div className="flex items-start gap-4">
                  <img
                    src={imagebg1}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-md text-gray-800">{review.name}</h3>
                      <div className="flex items-center gap-1   px-2 py-0.5 rounded-full">
                        
                        <img className="w-18 h-7 "src={STAR}/>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{review.text}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
                      <div className="flex items-center gap-2">
                      <img src={like}/><p>578</p>
                        
                      </div>
                      <span>{review.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
  }
  