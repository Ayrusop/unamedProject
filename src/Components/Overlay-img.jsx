import React from 'react';
import ourTeam from '../assets/about-page/ourTeam.png'
const CircleWithText = ({ imageSrc, text }) => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <div style={styles.whiteCircle}>
          <img src={ourTeam} alt="Decorative" style={styles.image} />
        </div>
      </div>
      <div style={styles.rightSection}>
        <p>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '250px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  leftSection: {
    position: 'relative',
    width: '150px',
    height: '150px',
  },
  whiteCircle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    position: 'absolute',
    left: '0',
    top: '50px',
    zIndex: '1',
  },
  image: {
    position: 'absolute',
    top: '0',
    left: '-30px',
    zIndex: '2',
    width: '80px',
    height: '80px',
  },
  rightSection: {
    width: '60%',
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
  },
};

export default CircleWithText;
