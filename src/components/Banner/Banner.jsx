const Banner = () => {
  return (
    <>
      <div style={{ height: "80vh" }} className="carousel w-100%">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            className="w-full"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle me-6">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex flex-col gap-7 transform -translate-y-1/2 left-5 right-5 top-1/2 bg-gradient-to-r from-[#151515] rounded-md">
            <div>
              <h3 className="text-5xl font-bold">Affordable Price For Car Servicing</h3>
            </div>
            <div>
              <p className="text-3xl w-2/3">Solemani talowar Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum excepturi deserunt explicabo itaque, fuga praesentium velit nulla natus obcaecati incidunt aut dignissimos laborum blanditiis officia maxime nihil tempora harum!</p>
            </div>
            <div>
              <button className="btn btn-primary">Discover</button>
              <button className="btn btn-accent">Last Project</button>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            className="w-full"
          />
          <div className="absolute flex flex-col gap-7 transform -translate-y-1/2 left-5 right-5 top-1/2 bg-gradient-to-r from-[#151515] rounded-md">
            <div>
              <h3 className="text-5xl font-bold">Affordable Price For Car Servicing</h3>
            </div>
            <div>
              <p className="text-3xl w-2/3">Solemani talowar Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum excepturi deserunt explicabo itaque, fuga praesentium velit nulla natus obcaecati incidunt aut dignissimos laborum blanditiis officia maxime nihil tempora harum!</p>
            </div>
            <div>
              <button className="btn btn-primary">Discover</button>
              <button className="btn btn-accent">Last Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle me-7">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80"
            className="w-full"
          />
          <div className="absolute flex flex-col gap-7 transform -translate-y-1/2 left-5 right-5 top-1/2 bg-gradient-to-r from-[#151515] rounded-md ">
            <div style={{width: '50%'}} className="w-1/2">
              <h3  className="text-5xl font-bold ">Affordable Price For Car Servicing</h3>
            </div>
            <div>
              <p className="text-3xl w-1/2">Solemani talowar Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum excepturi deserunt explicabo itaque, fuga praesentium velit nulla natus obcaecati incidunt aut dignissimos laborum blanditiis officia maxime nihil tempora harum!</p>
            </div>
            <div>
              <button className="btn btn-primary">Discover</button>
              <button className="btn btn-accent">Last Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="w-full"
          />
          <div className="absolute flex flex-col gap-7 transform -translate-y-1/2 left-5 right-5 top-1/2 bg-gradient-to-r from-[#151515] rounded-md">
            <div>
              <h3 className="text-5xl font-bold">Affordable Price For Car Servicing</h3>
            </div>
            <div>
              <p className="text-3xl w-2/3">Solemani talowar Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum excepturi deserunt explicabo itaque, fuga praesentium velit nulla natus obcaecati incidunt aut dignissimos laborum blanditiis officia maxime nihil tempora harum!</p>
            </div>
            <div>
              <button className="btn btn-primary">Discover</button>
              <button className="btn btn-accent">Last Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
