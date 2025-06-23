import React, {useState} from "react";

const Confirm = ({ username, profilePic, onConfirm, onCancel }) => {
  const styles = {
    container: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: "90%",
      maxWidth: "400px",
      margin: "40px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "gray"
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    profileSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    },
    profilePic: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
      border: "2px solid #ccc",
    },
    username: {
      fontSize: "16px",
      fontWeight: "500",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
      marginTop: "20px",
    },
    button: {
      flex: 1,
      padding: "10px",
      fontSize: "15px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    },
    confirmButton: {
      backgroundColor: "#1877f2",
      color: "#fff",
    },
    cancelButton: {
      backgroundColor: "#ddd",
      color: "#333",
    },
  };

  const [confirm, setConfirm] = useState(false)

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        You are about to log in to a new account
      </div>

      <div style={styles.profileSection}>
        <img
          src='/ones.jpg'
          alt="Profile"
          style={styles.profilePic}
        />
        <div style={styles.username}>Onemas Muchina</div>
      </div>

      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, ...styles.confirmButton }}
          onClick={() => setConfirm(true)}
        >
          Confirm
        </button>
        <button
          style={{ ...styles.button, ...styles.cancelButton }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>

      {confirm && <p style={{color: "red"}}>A message has been sent to your inbox, please accept the access confirmation to enter the account</p>}
    </div>
  );
};

export default Confirm;
