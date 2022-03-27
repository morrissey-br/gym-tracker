import {
  addDoc,
  collection,
  FirestoreDataConverter,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { WeightMesure } from "./WeightMesure";
import { WeightMesureRepository } from "./WeightMesureRepository";

export const WeightMesureFirestoreRepo = (): WeightMesureRepository => {
  const converter: FirestoreDataConverter<WeightMesure> = {
    toFirestore: (data: WeightMesure): any => {
      return {
        date: data.date.toISOString(),
        weight: data.weight,
      };
    },
    fromFirestore: (snapshot: any): WeightMesure => {
      return {
        date: new Date(snapshot.data().date),
        weight: snapshot.data().weight,
      };
    },
  };
  const firestore = getFirestore();
  const weightMesureCollection = collection(
    firestore,
    "weightMesures"
  ).withConverter(converter);

  const getLast = async (): Promise<WeightMesure | null> => {
    const q = query(weightMesureCollection, orderBy("date", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    return querySnapshot.docs[0].data();
  };

  const save = async (weightMesure: WeightMesure): Promise<void> => {
    await addDoc(weightMesureCollection, weightMesure);
  };
  return {
    getLast,
    save,
  };
};
