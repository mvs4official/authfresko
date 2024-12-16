"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/page.module.css'


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const serviceData = [
    { id: 'box1', image: '/imags/assessment.png', title: 'Assessment' },
    { id: 'box2', image: '/imags/Training-removebg-preview.jpg', title: 'Personal Mentoring' },
    { id: 'box3', image: '/imags/Innovation.png', title: 'Islamic Solutions' },
    { id: 'box4', image: '/imags/Reading.png', title: 'Research Pool' },
    { id: 'box5', image: '/imags/RFID Signal.png', title: 'Live Mentoring' },
  ];

  const mentors = [
    { image: '/anime1.png', name: 'Javad Koppam', title: 'Personal Trainer' },
    { image: '/anime2.png', name: 'Suhail Mukkanam', title: 'Personal Trainer' },
    { image: '/anime3.png', name: 'Jalal Orakkakundil', title: 'Personal Trainer' },
    { image: '/anime4.png', name: 'Hashim Kallidumbil', title: 'Personal Trainer' },
    { image: '/anime5.png', name: 'Roshan Mattra', title: 'Personal Trainer' },
    { image: '/anime6.png', name: 'Mikdad Poozhikuth', title: 'Personal Trainer' },
  ];

  const testimonials = [
    {
      image: '/placeholder.png', // Replace with actual image path
      quote:
        '"I Was Struggling With Issues I Thought No One Could Understand—Addiction, Self-Doubt, And A Constant Feeling Of Being Lost. Fresko Changed Everything For Me.The Problem Assessment Helped Me Realize The Root Cause Of My Struggles, And The Personal Mentoring Gave Me The Guidance I Desperately Needed, All Grounded In Islamic For The First Time In Years, I Feel At Peace And Connected To My Faith. This Platform Has Been A Blessing In My Journey Toward Healing And Self-Discovery."',
      name: 'Anees',
      title: 'Research Scholar, Campridge',
    },
    // ... other testimonials
  ];


  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
    <header className={styles.header}>
{/* ... header content ... */}
</header>

      <main>
        {/* ... other sections ... */}

        <div className={styles.midlajContainer}>
          <div className="container text-center">
            <section className={styles.productSection}>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cd39ecf4fdcadac5c7b8b61e63c4b463fd217712f4c92da66a4fd073da2cf8"
                alt="Product showcase"
                width={500}
                height={300}
                className={styles.imgFluidOpacity25}
              />
            </section>

            <div className={styles.heading}> {/* ... heading content ... */} </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {serviceData.map((service) => (
                <div key={service.id} className="col">
                  <div className={styles.serviceBox}>
                    <Image src={service.image} alt={service.title} width={50} height={50} />
                    <p>{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.minhajContainer}>
          {/* ... minhajContainer content ... */}
        </div>

        <div className={styles.testimonials}>
          <div className={styles.clientLine}>{/* ... clientLine content ... */}</div>

          <div className={styles.slides}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                <div className={styles.img100}>
                  <Image src={testimonial.image} alt="Testimonial" width={100} height={100} /> {/* Adjust size as needed */}
                </div>
                <div className={styles.quot}>{/* ... quote content ... */}</div>
              </div>
            ))}
          </div>

          <div className={styles.arrows}>
            <button className={`${styles.arrow} ${styles.left}`} onClick={() => showSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}></button>
            <button className={`${styles.arrow} ${styles.right}`} onClick={() => showSlide((currentSlide + 1) % testimonials.length)}></button>
          </div>
        </div>


        <div className={styles.mentorsSection}>
          {/* ... mentorsSection content ... */}
          <div className={styles.mentorsGrid}>
            {mentors.map((mentor, index) => (
              <div key={index} className={styles.mentorCard}>
                <Image src={mentor.image} alt={mentor.name} width={200} height={200} />
                <h3>{mentor.name}</h3>
                <p>{mentor.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          {/* ... footer content ... */}
        </div>
      </main>
    </>
  );
}

