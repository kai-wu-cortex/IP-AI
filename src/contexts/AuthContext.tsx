import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp, 
  Timestamp 
} from 'firebase/firestore';
import { auth, db } from '../firebase';

// Define User Profile Interface
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  slaLevel: 'free' | 'pro' | 'enterprise';
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithMockUser: (slaLevel: 'free' | 'pro' | 'enterprise') => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Fetch user profile from Firestore
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          // User exists, update last login and set profile
          const data = userSnap.data() as UserProfile;
          setUserProfile(data);
          // Update last login timestamp
          await setDoc(userRef, { lastLoginAt: serverTimestamp() }, { merge: true });
        } else {
          // New user, create profile with default 'free' SLA
          const newProfile: UserProfile = {
            uid: currentUser.uid,
            email: currentUser.email || '',
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            slaLevel: 'free',
            createdAt: serverTimestamp() as Timestamp,
            lastLoginAt: serverTimestamp() as Timestamp,
          };
          
          await setDoc(userRef, newProfile);
          setUserProfile(newProfile);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
      throw error;
    }
  };

  const signInWithMockUser = async (slaLevel: 'free' | 'pro' | 'enterprise') => {
    // This is for development only
    const mockUser = {
      uid: `mock-${slaLevel}-${Date.now()}`,
      email: `mock-${slaLevel}@example.com`,
      displayName: `Mock ${slaLevel.toUpperCase()} User`,
      photoURL: null,
    } as User;

    setUser(mockUser);
    
    const newProfile: UserProfile = {
      uid: mockUser.uid,
      email: mockUser.email || '',
      displayName: mockUser.displayName,
      photoURL: mockUser.photoURL,
      slaLevel: slaLevel,
      createdAt: serverTimestamp() as Timestamp,
      lastLoginAt: serverTimestamp() as Timestamp,
    };
    
    setUserProfile(newProfile);
    setLoading(false);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserProfile(null);
    } catch (error) {
      console.error("Error signing out", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, signInWithGoogle, signInWithMockUser, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
