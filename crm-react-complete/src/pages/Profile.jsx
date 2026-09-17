import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  const [photo, setPhoto] = useState(() => localStorage.getItem("crm_profile_photo") || "");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem("crm_profile_photo");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;
      localStorage.setItem("crm_profile_photo", imageData);
      setPhoto(imageData);
      window.dispatchEvent(new Event("crm-profile-photo-updated"));
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    localStorage.removeItem("crm_profile_photo");
    setPhoto("");
    window.dispatchEvent(new Event("crm-profile-photo-updated"));
  };

  return (
    <div>
      <div className="page-title">
        <div>
          <h1>Profile</h1>
          <p>Your CRM account information.</p>
        </div>
      </div>

      <div className="card profile-card">
        <div
          className="avatar huge"
          style={{
            overflow: "hidden",
            position: "relative",
            cursor: "pointer"
          }}
          onClick={() => fileInputRef.current?.click()}
          title="Click to upload profile photo"
        >
          {photo ? (
            <img
              src={photo}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          ) : (
            user?.fullName?.charAt(0)?.toUpperCase() || "U"
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: "none" }}
        />

        <button
          type="button"
          className="btn primary"
          onClick={() => fileInputRef.current?.click()}
          style={{ marginTop: "16px" }}
        >
          {photo ? "Change Photo" : "Add Photo"}
        </button>

        {photo && (
          <button
            type="button"
            className="btn"
            onClick={removePhoto}
            style={{ marginTop: "8px" }}
          >
            Remove Photo
          </button>
        )}

        <h2>{user?.fullName}</h2>
        <p>{user?.email}</p>
        <span className="badge">{user?.role || "USER"}</span>
      </div>
    </div>
  );
}
