import { useEffect, useState } from "react";

import firebase from 'firebase'
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

/*
  eslint-disable react-hooks/rules-of-hooks
*/
export const firestoreQueryHook = collection => {
  const [state, setState] = useState({
    error: null,
    loading: false,
    data: null
  });

  useEffect(() => {
    setState({
      ...state,
      loading: true
    });
    firebase
      .firestore()
      .collection(collection)
      .orderBy("timestamp", "desc")
      .onSnapshot(querySnapshot => {
        let documents = [];
        querySnapshot.forEach(function(doc) {
          documents.push({
            id: doc.id,
            ...doc.data()
          });

          setState({
            ...state,
            loading: false,
            data: documents
          });
        });
      });
  }, []);

  return state;
};

export const firestoreMutationHook = (collection) => {
  const [state, setState] = useState({
    error: null,
    loading: false
  });

  const postDocument = (data) => {
    setState({
      loading: true
    })

    firebase.firestore().collection(collection).add({
      ...data,
      timestamp: new Date().getTime()
    }).then(() => {
      setState({
        loading: false
      })
    })
  }

  return {
    ...state,
    postDocument
  }
}
