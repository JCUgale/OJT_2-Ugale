import "../styles/hobbies.css"

export default function Hobbies() {
  return (
    <section>
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./src/images/carousel.png" className="d-block w-100" alt="image-1"></img>
          <div className="carousel-caption">
              <h5>Simple Photo Editing</h5>
              <p>Honed my skills in attention to details</p> 
          </div>
        </div>
        <div className="carousel-item">
          <img src="./src/images/carousel.png" className="d-block w-100" alt="image-2"></img>
          <div className="carousel-caption">
              <h5>Coding</h5>
              <p>Learned to enjoy this love-hate relationship</p> 
          </div>
        </div>
        <div className="carousel-item">
          <img src="./src/images/carousel.png" className="d-block w-100" alt="image2"></img>
          <div className="carousel-caption">
              <h5>Play the guitar</h5>
              <p>Stress reliever after coding</p> 
          </div>
        </div>
        <div className="carousel-item">
          <img src="./src/images/carousel.png" className="d-block w-100" alt="image2"></img>
          <div className="carousel-caption">
              <h5>Buy and Sell</h5>
              <p>Due to my expensive lifestyle</p> 
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  );
}