import { StyleSheet, Text, View, StatusBar } from "react-native";

/*************************************
             Exercise 3A
*************************************/
// export default function App() {
//   return (
//     <View style={styles.Parent}>
//       <View style={[styles.Child, { backgroundColor: "powderblue" }]}>
//         <Text style={styles.Child}>Child One</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "skyblue" }]}>
//         <Text style={styles.Child}>Child Two</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "steelblue" }]}>
//         <Text style={styles.Child}>Child Three</Text>
//       </View>
//       <StatusBar barStyle="default" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: "row",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24,
//   },
// });
/*************************************
             Exercise 3B
*************************************/
// export default function App() {
//   return (
//     <View style={styles.Parent}>
//       <View style={[styles.Child, { backgroundColor: "powderblue" }]}>
//         <Text style={styles.Child}>Child One</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "skyblue" }]}>
//         <Text style={styles.Child}>Child Two</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "steelblue" }]}>
//         <Text style={styles.Child}>Child Three</Text>
//       </View>
//       <StatusBar barStyle="default" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: "column",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//     height: "100%",
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24,
//     flex: 1,
//   },
// });

/*************************************
             Exercise 3C
*************************************/
// export default function App() {
//   return (
//     <View style={styles.Parent}>
//       <View
//         style={[styles.Child, { backgroundColor: "powderblue", maxWidth: 90 }]}
//       >
//         <Text style={styles.Child}>Child One</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "skyblue" }]}>
//         <Text style={styles.Child}>Child Two</Text>
//       </View>
//       <View
//         style={[styles.Child, { backgroundColor: "steelblue", maxHeight: 120 }]}
//       >
//         <Text style={styles.Child}>Child Three</Text>
//       </View>
//       <StatusBar barStyle="default" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: "column",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//     height: "100%",
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24,
//     flex: 1,
//   },
// });
/*************************************
             Exercise 3D
*************************************/
// export default function App() {
//   return (
//     <View style={styles.Parent}>
//       <View style={[styles.Child, { backgroundColor: "powderblue", flex: 1 }]}>
//         <Text style={[styles.Child]}>Child One</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "skyblue", flex: 2 }]}>
//         <Text style={[styles.Child, { flex: 1 }]}>Child Two</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: "steelblue", flex: 3 }]}>
//         <Text style={[styles.Child, { flex: 1 }]}>Child Three</Text>
//       </View>
//       <StatusBar barStyle="default" />
//     </View>
//   );
// }
// //Qn: Why for child 1 Text, if assign flex: 1, the phrase does not wrap?
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: "row",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24,
//   },
// });
/*************************************
             Exercise 3E
*************************************/
export default function App() {
  return (
    <View style={styles.Parent}>
      <View style={[styles.Child, { backgroundColor: "powderblue" }]}>
        <Text style={styles.Child}>Child One</Text>
      </View>
      <View style={[styles.Child, { backgroundColor: "skyblue" }]}>
        <Text style={styles.Child}>Child Two</Text>
      </View>
      <View style={[styles.Child, { backgroundColor: "steelblue" }]}>
        <Text style={styles.Child}>Child Three</Text>
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
}
//what is the difference between space around and space evenly? does space around not force equal distribution of space.
//Space around adds half the space between the last and the first element, i.e. before the first element you have half a space and same goes for after the last element.

const styles = StyleSheet.create({
  Parent: {
    flexDirection: "column",
    backgroundColor: "#F5fcff",
    borderColor: "#0099AA",
    borderWidth: 5,
    height: "100%",
    // justifyContent: "flex-start",
    //justifyContent: "flex-end",
    justifyContent: "space-around",
    //justifyContent: "space-between",
    //justifyContent: "space-evenly",
  },
  Child: {
    borderWidth: 2,
    textAlign: "center",
    fontSize: 24,
  },
});
