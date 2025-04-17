import React from 'react'
import Header from '../components/header'
import PaymentDetails from '../components/PaymentDetails'
import Submitbutton from '../components/submitbutton'
import ReviewPhotoUpload from '../components/ReviewPhotoUpload'

const Review = () => {
  return (
    <div className='min-h-screen w-full bg-gray-300'>
      <Header title="REVIEW"/>
      <div className="sm:flex  flex-col justify-center items-center sm:p-0 p-3">
        <PaymentDetails/>
        <ReviewPhotoUpload/>
         {/* Review Section */}
      <div>
        <h2 className="text-lg font-bold text-[#202244] mt-2 mb-2 ">Write you Review</h2>
        <div className=" sm:w-[450px] relative ">
          <textarea
            placeholder="Would you like to write anything about this Product?"
            // value={review}
            // onChange={(e) => setReview(e.target.value)}
            className="w-full h-[150px] p-4 text-sm bg-white rounded-2xl mt-1 shadow text-gray-800 placeholder-gray-400 resize-none focus:outline-none"
          />
          <p className="text-xs text-[#B4BDC4] absolute bottom-4 right-4">*250 Characters Remaining</p>
        </div>
      </div>
        <Submitbutton title="Submit Review"/>
      </div>
    </div>
  )
}

export default Review
