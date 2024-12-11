import React from "react";
import "./Carousel.css"; // Import CSS

function HotelCarousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/m1.jpg" className="d-block w-100" alt="Hotel 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Luxury Hotel A</h5>
            <p>ตั้งอยู่ในใจกลางเมือง ให้บริการห้องพักหรูหราพร้อมวิวทะเล</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/m2.jpg" className="d-block w-100" alt="Hotel 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Modern Hotel B</h5>
            <p>โรงแรมที่ทันสมัย มีสิ่งอำนวยความสะดวกครบครัน ใกล้แหล่งช้อปปิ้ง</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/m3.jpg" className="d-block w-100" alt="Hotel 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Resort Hotel C</h5>
            <p>รีสอร์ทติดชายหาด พร้อมกิจกรรมกลางแจ้งและวิวธรรมชาติ</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HotelCarousel;
