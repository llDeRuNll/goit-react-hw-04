import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: "12px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalImage = ({ image, modalIsOpen, closeModal }) => {
  if (!image) return null;

  console.log("Modal data:", image); // 🐞 Діагностика

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Picture modal"
    >
      <button
        onClick={closeModal}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>

      <img
        src={image.src}
        alt={image.alt || "Image"}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
      />

      <div style={{ fontSize: "14px", color: "#333" }}>
        {image.description && (
          <p>
            <strong>Description:</strong> {image.description}
          </p>
        )}
        {image.user && (
          <p>
            <strong>Author:</strong>{" "}
            <a
              href={image.user.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0073e6" }}
            >
              {image.user.name}
            </a>
          </p>
        )}
        {typeof image.likes === "number" && (
          <p>
            <strong>Likes:</strong> {image.likes}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default ModalImage;
