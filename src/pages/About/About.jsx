import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:w-1/2 relative">
        <img  
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            className="w-4/5 rounded-lg shadow-2xl"
          />
           <img 
            src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2"
          />
        </div>
          <div>
          <div className="mb-40"><h2 className="text-1xl font-bold">About Us</h2></div>
            <div>
            <h1 className="text-5xl font-bold w-1/2">We Are Qualified and Excellent in this field</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-6 mb-40">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            </div>
            <button className="btn btn-primary">Get A Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
