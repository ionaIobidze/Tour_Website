import React from 'react';
import './AboutUs.css';

function AboutUs({ language }) {
  return (
    <div className="about-us">
      <h1>{language === 'en' ? 'About Us' : 'ჩვენს შესახებ'}</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/assets/iona_iobidze.jpeg`} alt="Iona Iobidze" className="team-member-image" />
          <h2>Iona Iobidze</h2>
          <h3>{language === 'en' ? 'Founder & CEO' : 'დამფუძნებელი და აღმასრულებელი დირექტორი'}</h3>
          <p>
            {language === 'en' 
              ? "Iona here! I'm a computer science student with a passion for building things, including awesome tour experiences in Georgia! I'm a detail-oriented team player and love learning new things. My skills in project management and coding will help us craft the perfect Georgian adventure for you. Let's explore!" 
              : "გამარჯობა, იონა ვარ! კომპიუტერული მეცნიერების სტუდენტი, ვაკეთებ მრავალფეროვან პროექტებს, მათ შორის საინტერესო ტურებს საქართველოში! დეტალებზე ორიენტირებული და გუნდური მოთამაშე ვარ, მიყვარს ახალი ცოდნის შეძენა. ჩემი პროექტების მართვის და კოდის უნარებით დაგეხმარებით იდეალური ქართული თავგადასავლის შექმნაში. წავიდეთ, დავლაშქროთ საქართველო!"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

