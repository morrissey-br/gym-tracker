import {
  addDoc,
  collection,
  FirestoreDataConverter,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { WeightMeasurement } from "../../models/WeightMeasurement";
import { WeightMeasurementRepository } from "../../models/WeightMeasurementRepository";

export const WeightMeasurementFirestoreRepository =
  (): WeightMeasurementRepository => {
    const converter: FirestoreDataConverter<WeightMeasurement> = {
      toFirestore: (data: WeightMeasurement): any => {
        return {
          date: data.date.toISOString(),
          weight: data.weight,
        };
      },
      fromFirestore: (snapshot: any): WeightMeasurement => {
        return {
          date: new Date(snapshot.data().date),
          weight: snapshot.data().weight,
        };
      },
    };
    const firestore = getFirestore();
    const WeightMeasurementCollection = collection(
      firestore,
      "WeightMeasurements"
    ).withConverter(converter);

    const getLast = async (): Promise<WeightMeasurement | null> => {
      const q = query(
        WeightMeasurementCollection,
        orderBy("date", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return null;
      }
      return querySnapshot.docs[0].data();
    };

    const save = async (
      WeightMeasurement: WeightMeasurement
    ): Promise<void> => {
      await addDoc(WeightMeasurementCollection, WeightMeasurement);
    };

    const getAll = async (
      limitParam: number,
      page: number
    ): Promise<WeightMeasurement[]> => {
      const q = query(
        WeightMeasurementCollection,
        orderBy("date", "desc"),
        limit(limitParam),
        startAt((page - 1) * limitParam + 1)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => doc.data());
    };

    return {
      getLast,
      save,
      getAll,
    };
  };
