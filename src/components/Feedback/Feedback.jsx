import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeedbackItems from '../Feedback/FeedbackItems'
import { responsive } from '../../assets/carousel';
import { feedbackData } from '../../assets/feedbackData';

const feedback = feedbackData.map((item) => 
<FeedbackItems 
  key={item.id}
  feedback={item.feedback}
  image={item.image}
  name={item.name}
/>
);

const Feedback = () => {
  return (
    <section className='bg-yellow-800/35 w-full h-full top-0'>
    <div className='container py-14 space-y-4'>
        {/* Feedback Section */}
        <div className='text-center p-4'>
            <h1 className='text-3xl font-bold text-white text-wrap'>Apa kata mereka tentang Shizucha?</h1>
        </div>
        {/* Feedback Card Section */}
    <div className="container lg:max-w-fit">
      <Carousel
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={5000}
      responsive={responsive}
      >
        {feedback}
      </Carousel>
    </div>
    </div>
    </section>
  )
}

export default Feedback