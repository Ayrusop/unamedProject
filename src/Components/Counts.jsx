import React, { useEffect, useState, useRef } from 'react';

const CountCircle = ({ targetNumber, label, delay, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const end = targetNumber;
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(2000 / end));
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(interval);
      }, incrementTime);
    }, delay); // Delay for staggered animation

    return () => clearTimeout(timer);
  }, [targetNumber, delay, animate]);

  return (
    <div style={styles.countCircle}>
      <div style={styles.shadow}></div>
      <div style={styles.content}>
        <span style={styles.number}>{count}+</span>
        <span style={styles.label}>{label}</span>
      </div>
    </div>
  );
};

const Counts = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} style={styles.container}>
      <CountCircle targetNumber={50} label="Clients" delay={0} animate={animate} />
      <CountCircle targetNumber={30} label="Projects" delay={500} animate={animate} />
      <CountCircle targetNumber={25} label="Satisfied customers" delay={1000} animate={animate} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'auto', // Let the height adjust automatically
    width: '100%',
    flexWrap: 'wrap', // Ensure wrapping on smaller screens
    marginBottom: '50px', // Adds space below the component to prevent overlap
  },
  countCircle: {
    position: 'relative',
    width: '200px',
    height: '200px',
    backgroundColor: '#1F2042',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
  shadow: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    top: '10px',
    left: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: '-1',
  },
  content: {
    textAlign: 'center',
  },
  number: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  label: {
    fontSize: '24px',
    marginTop: '5px',
    fontWeight: 'bolder',
    display: 'block',
  },
};


// Media queries for responsive styling
const responsiveStyles = {
  '@media(max-width: 600px)': {
    container: {
      flexDirection: 'column',
      // marginBottom:'10%',
      position:'relative'
    },
    countCircle: {
      width: '150px',
      height: '150px',
    },
  },
};

export default Counts;
