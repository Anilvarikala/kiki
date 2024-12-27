// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useUser } from "./UserContext";
// import { auth, db, storage } from "./firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { updateEmail } from "firebase/auth";

// const Profile = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   const { user, setUser } = useUser(); // Assuming setUser is available from the context
//   const [isEditing, setIsEditing] = useState(false);
//   const [editUser, setEditUser] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     address: user?.address || "",
//     photoURL: user?.photoURL || "default-profile.jpg", // Default photo URL if none is provided
//   });

//   const [newImage, setNewImage] = useState(null); // State to hold new image file

//   const handleEditToggle = () => setIsEditing(!isEditing);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setNewImage(e.target.files[0]);
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       if (auth.currentUser) {
//         const userRef = doc(db, "users", auth.currentUser.uid);

//         // Check if a new image is uploaded
//         if (newImage) {
//           const imageRef = ref(
//             storage,
//             `profileImages/${auth.currentUser.uid}`
//           );
//           await uploadBytes(imageRef, newImage);
//           const imageUrl = await getDownloadURL(imageRef);
//           editUser.photoURL = imageUrl; // Update photoURL in editUser object
//         }

//         // Update email in Firebase Authentication if it was changed
//         if (editUser.email !== user.email) {
//           await updateEmail(auth.currentUser, editUser.email);
//         }

//         // Update Firestore document with edited user data
//         await updateDoc(userRef, editUser);

//         // Update the user context to reflect changes immediately
//         setUser((prevUser) => ({
//           ...prevUser,
//           ...editUser,
//         }));

//         setIsEditing(false); // Exit edit mode
//         alert("Profile updated successfully!");
//       } else {
//         console.error("User not authenticated");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to save changes.");
//     }
//   };

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="profile-div">
//         <img className="img1" src="img-user.jpg" alt="Profile" />
//         {isEditing && (
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="form-control mb-2"
//           />
//         )}
//         <p>
//           <b>Name:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editUser.name}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             <h3>{user.name}</h3>
//           )}
//         </p>
//         <hr />
//         {/* <p>
//           <b>Email:</b>{" "}
//           {isEditing ? (
//             <input
//               type="email"
//               name="email"
//               value={editUser.email}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.email
//           )}
//         </p> */}
//         <p>
//           <b>Phone:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="phone"
//               value={editUser.phone}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.phone
//           )}
//         </p>
//         <p>
//           <b>Address:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="address"
//               value={editUser.address}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.address
//           )}
//         </p>
//         {isEditing ? (
//           <button onClick={handleSaveChanges} className="btn btn-success">
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={handleEditToggle}
//             className="btn btn-danger btn-size"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useUser } from "./UserContext";
// import { auth, db, storage } from "./firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { updateEmail } from "firebase/auth";

// const Profile = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   const { user, setUser } = useUser();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editUser, setEditUser] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     address: user?.address || "",
//     photoURL: user?.photoURL || "default-profile.jpg",
//   });

//   const [newImage, setNewImage] = useState(null);

//   const handleEditToggle = () => setIsEditing(!isEditing);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       const file = e.target.files[0];
//       setNewImage(file);

//       // Preview the selected image
//       const reader = new FileReader();
//       reader.onload = () => {
//         setEditUser((prevUser) => ({ ...prevUser, photoURL: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       if (auth.currentUser) {
//         const userRef = doc(db, "users", auth.currentUser.uid);

//         // Check if a new image is uploaded
//         if (newImage) {
//           const imageRef = ref(
//             storage,
//             `profileImages/${auth.currentUser.uid}`
//           );
//           await uploadBytes(imageRef, newImage);
//           const imageUrl = await getDownloadURL(imageRef);
//           editUser.photoURL = imageUrl;
//         }

//         // Update email in Firebase Authentication if changed
//         if (editUser.email !== user.email) {
//           await updateEmail(auth.currentUser, editUser.email);
//         }

//         // Update Firestore document with edited user data
//         await updateDoc(userRef, editUser);

//         // Update the user context to reflect changes immediately
//         setUser((prevUser) => ({
//           ...prevUser,
//           ...editUser,
//         }));

//         setIsEditing(false);
//         alert("Profile updated successfully!");
//       } else {
//         console.error("User not authenticated");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to save changes.");
//     }
//   };

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="profile-div">
//         <div className="profile-image-container" style={{ position: "relative" }}>
//           <img
//             src={editUser.photoURL}
//             alt="Profile"
//             className="img-fluid rounded-circle"
//             style={{ width: "150px", height: "150px", objectFit: "cover", cursor: "pointer" }}
//             onClick={() => document.getElementById("imageUpload").click()}
//           />
//           {isEditing && (
//             <input
//               type="file"
//               id="imageUpload"
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//             />
//           )}
//         </div>
//         <p>
//           <b>Name:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editUser.name}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             <h3>{user.name}</h3>
//           )}
//         </p>
//         <hr />
//         <p>
//           <b>Email:</b>{" "}
//           {isEditing ? (
//             <input
//               type="email"
//               name="email"
//               value={editUser.email}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.email
//           )}
//         </p>
//         <p>
//           <b>Phone:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="phone"
//               value={editUser.phone}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.phone
//           )}
//         </p>
//         <p>
//           <b>Address:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="address"
//               value={editUser.address}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.address
//           )}
//         </p>
//         {isEditing ? (
//           <button onClick={handleSaveChanges} className="btn btn-success">
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={handleEditToggle}
//             className="btn btn-danger"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

// import img from "../../img-user.jpg"
// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useUser } from "./UserContext";
// import { auth, db, storage } from "./firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { updateEmail } from "firebase/auth";

// const Profile = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   const { user, setUser } = useUser();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editUser, setEditUser] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     address: user?.address || "",
//     photoURL: user?.photoURL ||img,
//   });

//   const [newImage, setNewImage] = useState(null);

//   const handleEditToggle = () => setIsEditing(!isEditing);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       const file = e.target.files[0];
//       setNewImage(file);

//       // Preview the selected image
//       const reader = new FileReader();
//       reader.onload = () => {
//         setEditUser((prevUser) => ({ ...prevUser, photoURL: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       console.log("Save Changes Clicked"); // Debugging log

//       if (auth.currentUser) {
//         console.log("User authenticated"); // Debugging log

//         const userRef = doc(db, "users", auth.currentUser.uid);

//         // Check if a new image is uploaded
//         let updatedPhotoURL = editUser.photoURL;
//         if (newImage) {
//           const imageRef = ref(storage, `profileImages/${auth.currentUser.uid}`);
//           console.log("Uploading new image..."); // Debugging log
//           await uploadBytes(imageRef, newImage);
//           updatedPhotoURL = await getDownloadURL(imageRef); // Get the new image URL
//           console.log("Image uploaded and URL fetched: ", updatedPhotoURL); // Debugging log
//         }

//         // If email is updated, update email in Firebase Authentication
//         if (editUser.email !== user.email) {
//           await updateEmail(auth.currentUser, editUser.email);
//           console.log("Email updated in Firebase Authentication"); // Debugging log
//         }

//         // Update the Firestore document with the new user data
//         console.log("Updating Firestore..."); // Debugging log
//         await updateDoc(userRef, {
//           name: editUser.name,
//           email: editUser.email,
//           phone: editUser.phone,
//           address: editUser.address,
//           photoURL: updatedPhotoURL, // Updated image URL
//         });

//         // Update the context user immediately
//         setUser((prevUser) => ({
//           ...prevUser,
//           name: editUser.name,
//           email: editUser.email,
//           phone: editUser.phone,
//           address: editUser.address,
//           photoURL: updatedPhotoURL, // Update profile picture
//         }));

//         setIsEditing(false); // Exit editing mode
//         alert("Profile updated successfully!");
//         console.log("Profile update complete"); // Debugging log
//       } else {
//         console.error("User not authenticated");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to save changes.");
//     }
//   };

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="profile-div">
//         <div className="profile-image-container" style={{ position: "relative" }}>
//           <img
//             src={editUser.photoURL}
//             alt="Profile"
//             className="img-fluid rounded-circle"
//             style={{ width: "150px", height: "150px", objectFit: "cover", cursor: "pointer" }}
//             onClick={() => document.getElementById("imageUpload").click()}
//           />
//           {isEditing && (
//             <input
//               type="file"
//               id="imageUpload"
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//             />
//           )}
//         </div>
//         <p>
//           <b>Name:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editUser.name}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             <h3>{user.name}</h3>
//           )}
//         </p>
//         <hr />
//         <p>
//           <b>Email:</b>{" "}
//           {isEditing ? (
//             <input
//               type="email"
//               name="email"
//               value={editUser.email}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.email
//           )}
//         </p>
//         <p>
//           <b>Phone:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="phone"
//               value={editUser.phone}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.phone
//           )}
//         </p>
//         <p>
//           <b>Address:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="address"
//               value={editUser.address}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.address
//           )}
//         </p>
//         {isEditing ? (
//           <button onClick={handleSaveChanges} className="btn btn-success">
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={handleEditToggle}
//             className="btn btn-danger"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useUser } from "./UserContext";
// import { auth, db, storage } from "./firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { updateEmail } from "firebase/auth";

// const Profile = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   const { user, setUser } = useUser();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editUser, setEditUser] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     address: user?.address || "",
//     photoURL: user?.photoURL || "default-profile.jpg",
//   });

//   const [newImage, setNewImage] = useState(null);

//   const handleEditToggle = () => setIsEditing(!isEditing);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       const file = e.target.files[0];
//       setNewImage(file);

//       // Preview the selected image
//       const reader = new FileReader();
//       reader.onload = () => {
//         setEditUser((prevUser) => ({ ...prevUser, photoURL: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       if (auth.currentUser) {
//         const userRef = doc(db, "users", auth.currentUser.uid);

//         // Check if a new image is uploaded
//         let updatedPhotoURL = editUser.photoURL;
//         if (newImage) {
//           const imageRef = ref(storage, `profileImages/${auth.currentUser.uid}`);
//           await uploadBytes(imageRef, newImage);
//           updatedPhotoURL = await getDownloadURL(imageRef); // Get the new image URL
//         }

//         // If email is updated, update email in Firebase Authentication
//         if (editUser.email !== user.email) {
//           await updateEmail(auth.currentUser, editUser.email);
//         }

//         // Update the Firestore document with the new user data
//         await updateDoc(userRef, {
//           name: editUser.name,
//           email: editUser.email,
//           phone: editUser.phone,
//           address: editUser.address,
//           photoURL: updatedPhotoURL, // Updated image URL
//         });

//         // Update the user context to reflect changes immediately
//         setUser((prevUser) => ({
//           ...prevUser,
//           name: editUser.name,
//           email: editUser.email,
//           phone: editUser.phone,
//           address: editUser.address,
//           photoURL: updatedPhotoURL, // Update profile picture
//         }));

//         setIsEditing(false); // Exit editing mode
//         alert("Profile updated successfully!");
//       } else {
//         console.error("User not authenticated");
//         alert("User is not authenticated. Please log in again.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to save changes. Please try again.");
//     }
//   };

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="profile-container" >
//         <div className="profile-card shadow" style={{ position: "relative" }}>
//           <div className="profile-image-container">

//           </div>
//           <img
//             // src={editUser.photoURL}
//             src="img-user.jpg"
//             alt="Profile"
//             className="img-fluid rounded-circle"
//             style={{ width: "150px", height: "150px", objectFit: "cover", cursor: "pointer" }}
//             onClick={() => document.getElementById("imageUpload").click()}
//           />
//           {isEditing && (
//             <input
//               type="file"
//               id="imageUpload"
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//             />
//           )}
//         </div>
//         <p>
//           <b>Name:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editUser.name}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             <h3>{user.name}</h3>
//           )}
//         </p>

//         <p>
//           <b>Email:</b>{" "}
//           {isEditing ? (
//             <input
//               type="email"
//               name="email"
//               value={editUser.email}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.email
//           )}
//         </p>
//         <p>
//           <b>Phone:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="phone"
//               value={editUser.phone}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.phone
//           )}
//         </p>
//         <p>
//           <b>Address:</b>{" "}
//           {isEditing ? (
//             <input
//               type="text"
//               name="address"
//               value={editUser.address}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//           ) : (
//             user.address
//           )}
//         </p>
//         {isEditing ? (
//           <button onClick={handleSaveChanges} className="btn btn-success">
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={handleEditToggle}
//             className="btn btn-danger"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "./UserContext";
import { auth, db, storage } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateEmail } from "firebase/auth";
import "./Profile.css"; // Custom CSS for styling

const Profile = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    photoURL: user?.photoURL || "default-profile.jpg",
  });

  const [newImage, setNewImage] = useState(null);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setNewImage(file);

      // Preview the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setEditUser((prevUser) => ({ ...prevUser, photoURL: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    try {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);

        let updatedPhotoURL = editUser.photoURL;
        if (newImage) {
          const imageRef = ref(
            storage,
            `profileImages/${auth.currentUser.uid}`
          );
          await uploadBytes(imageRef, newImage);
          updatedPhotoURL = await getDownloadURL(imageRef);
        }

        if (editUser.email !== user.email) {
          await updateEmail(auth.currentUser, editUser.email);
        }

        await updateDoc(userRef, {
          name: editUser.name,
          email: editUser.email,
          phone: editUser.phone,
          address: editUser.address,
          photoURL: updatedPhotoURL,
        });

        setUser((prevUser) => ({
          ...prevUser,
          name: editUser.name,
          email: editUser.email,
          phone: editUser.phone,
          address: editUser.address,
          photoURL: updatedPhotoURL,
        }));

        setIsEditing(false);
        alert("Profile updated successfully!");
      } else {
        console.error("User not authenticated");
        alert("User is not authenticated. Please log in again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to save changes. Please try again.");
    }
  };

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <>
      <Navbar />
      <br />
      <div className="make-down">
        <div className="profile-container">
          <div className="profile-card shadow">
            <div className="profile-image-container">
              <img
                
                src="img-user.jpg"
                alt="Profile"
                className="profile-image"
                onClick={() => document.getElementById("imageUpload").click()}
              />
              {isEditing && (
                <input
                  type="file"
                  id="imageUpload"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              )}
            </div>
            <div className="profile-details d-flex" style = {{flexDirection:"column"}}>
              <p>
                <b>Name:</b>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editUser.name}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <span>{user.name}</span>
                )}
              </p>
              <p>
                <b>Email:</b>{" "}
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editUser.email}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </p>
              <p>
                <b>Phone:</b>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={editUser.phone}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <span>{user.phone}</span>
                )}
              </p>
              <p>
                <b>Address:</b>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editUser.address}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <span>{user.address}</span>
                )}
              </p>
            </div>
            <div className="profile-buttons">
              {isEditing ? (
                <button onClick={handleSaveChanges} className="btn btn-success">
                  Save Changes
                </button>
              ) : (
                <button onClick={handleEditToggle} className="btn btn-warning" style={{color:"black",borderRadius:"2rem",width:"100px"}}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
