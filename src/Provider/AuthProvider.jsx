import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, GithubAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    const createUser = (email, password, name) => {
        SetLoading(true);
        const defaultPhotoURL = 'https://www.paralysistreatments.com/wp-content/uploads/2018/02/no_profile_img.png';
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                return updateProfile(user, {
                    displayName: name,
                    photoURL: defaultPhotoURL
                }).then(() => {
                    SetUser({ ...user, displayName: name });
                    return true;
                });
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                throw error;
            });
    };
    const loginWithEmail = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    };
    const logout = () => {
        SetLoading(true);
        auth.signOut()
            .then(() => {
                SetUser(null);
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };
    const resetPassword = (email) => {
        SetLoading(true);
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                SetLoading(false);
                return true; // Success
            })
            .catch((error) => {
                SetLoading(false);
                console.error('Error sending reset password email:', error);
                throw error;
            });
    };
    const updateUserProfile = (name, photoURL) => {
        SetLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                // Update local user state too
                const updatedUser = {
                    ...auth.currentUser,
                    displayName: name,
                    photoURL: photoURL
                };
                SetUser(updatedUser);
                SetLoading(false);
                return true;
            })
            .catch((error) => {
                SetLoading(false);
                console.error('Error updating profile:', error);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                SetUser(user);
                SetLoading(false);
            } else {
                SetUser(null);
                SetLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const GitHubProvider = new GithubAuthProvider();
    const handleGitHubLogin = () => {
        return signInWithPopup(auth, GitHubProvider);

    }

    const authData = {
        user,
        loading,
        SetUser,
        handleGoogleLogin,
        logout,
        createUser,
        loginWithEmail,
        resetPassword,
        updateUserProfile,
        handleGitHubLogin,
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;