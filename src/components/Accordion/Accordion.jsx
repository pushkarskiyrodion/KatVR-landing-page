import React, { useState } from "react";

const answers = [
  {id: 1,
  text: "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
  title: 'What makes KAT loco different from other systems?'
  },
  {id: 2,
    text: "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    title: 'Will it decrease my motion sickness?'
  }, 
  {id: 3,
    text: "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    title: 'Which VR headsets is it compatible with?'
  }, 
  {id: 4,
    text: "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    title: 'Is it compatible with Oculus Quest?'
  }, 
]

const Accordion = () => {
  const [items] = useState(answers);
  const [opened, setOpened] = useState(0);

  const handleClick = (id) => {
    const value = id !== opened ? id : 0;

    setOpened(value);
  }

  return (
  <>
    <h2 className="page__title">
      Frequently asked
      <br />
      <span className="page__title--secondary"> questions</span>
    </h2>

    <div className="faq">
      {items.map(({ title, text, id}, index) => (
        <div
          className="faq__content"
          key={id}
          onClick={() => handleClick(id)}
          aria-expanded={opened !== id}
        >
          <h1 className="page__subtitle">{title}</h1>
          <svg
            className="faq__icon"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: opened === id ? "rotate(90deg)" : "rotate(0)",
            }}
          >
            <path d="M4.5 5L0.602885 0.5L8.39711 0.500001L4.5 5Z" fill="#05C2DF" />
          </svg>
          <p className="page__text">{text}</p>
          <div className="faq__updated">Last updated: Wed, June 12 2019 7:07 PM UTC +03:00</div>
        </div>
      ))}
    </div>
  </>
  )
};

export default Accordion;
