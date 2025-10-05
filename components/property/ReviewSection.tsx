import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[470px_470px] gap-10">
        {reviews.map((review, index) => (
            <div key={index} className="pb-4 mb-4">
                <div className="flex items-center">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-yellow-500">{Array.from({length: review.rating}, (_, i) => i).map((star) =>  <FaStar className="mr-1 inline mb-1.5" /> )}</p>
                    </div>
                </div>
               <div className="mt-5">
                 <p className="max-w-[470px]">{review.comment}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;