import { doc, GeoPoint, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { roomsList } from "../data";

export async function CreateCinemaDocs() {
  const generalLocation = new GeoPoint(36.7753606, 3.0601882);
  const cinemasList = roomsList.map((room) => {
    return {
      id: room.id,
      name: room.title,
      location: generalLocation,
    };
  });

  const docData = {
    list: cinemasList,
  };
  await setDoc(doc(db, "cinemas", "cinemasList"), docData);
}
