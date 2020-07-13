import firebase from "react-native-firebase";

export function addDog(dog, addComplete) {
  firebase
    .firestore()
    .collection("Dogs")
    .add({
      breed: dog.breed,
      color: dog.size,
      createdAt: firebase.firestore.FieldValue.serverTimesstamp(),
    })
    .then((snapshot) => snapshot.get())
    .then((dogData) => addComplete(dogData.data())
    .catch((error) => console.log(error));
}

export async function getDogs(dogsRetreived) {
  var dogList = [];
  var snapshot = await firebase
    .firestore()
    .collection("Dogs")
    .orderBy("createdAt")
    .get();

  snapshot.forEach((doc) => {
    dogList.push(doc.data());
  });

  dogssRetreived(dogList);
}
