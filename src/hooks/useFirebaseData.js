import { useEffect, useState } from 'react';

import { useFirebaseContext } from '../contexts/firebase_context';
import { useProductsContext } from '../contexts/products_context';

const useFirebaseData = category => {
  const [data, setData] = useState([]);
  const { firebase } = useFirebaseContext();

  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection(category)
        .get()
        .then(snapshot => {
          const allData = snapshot.docs.map(doc => ({
            ...doc.data(),
            docId: doc.id,
          }));

          setData(allData);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // console.log(data);

  return { [category]: data };
};

export default useFirebaseData;
