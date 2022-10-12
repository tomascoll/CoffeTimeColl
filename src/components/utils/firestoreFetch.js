import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import  {db}  from './fireBaseConfig';
import NotFound from '../pages/NotFound';

export const firestoreFetch = async (idCategory) => {
    let firesFetch;
    if (idCategory) {
        firesFetch = query(collection(db, "productos"), where('categoria', '==', idCategory));
    } else {
        firesFetch = query(collection(db, "productos"));
    }
    const querySnapshot = await getDocs(firesFetch);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        // doc.data() will be undefined in this case
    }
}