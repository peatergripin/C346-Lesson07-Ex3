# 🌙 C346 Week03 Lesson07 (Exercise 3)

[![Module](https://img.shields.io/badge/Module-C346%20Mobile%20App%20Development-6A5ACD?logo=android&logoColor=white)](#)
[![Platform](https://img.shields.io/badge/Platform-Android-2E8B57?logo=android&logoColor=white)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20React%20Native-61DAFB?logo=react&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Completed-success)](#)

---

## 📝 Overview

Lessons 7 taught us on the fundamental layout style in React Native - Flexbox. We were taught on how we can manipulate the layout of child components by manipulating the parent's flex properties (e.g. flexDirection, justifyContent and alignItems).

> ✨ _Example:_ Arranging 3 view components horizontally or centralise it on a screen.

---

## 🎬 Demo / Media

![App Demo](./media/demo.gif)

<p align="center">
  <img src="./assets/img/screenshot1.png" width="180" alt="Screenshot1" />

</p>

---

## 🚀 Features

- ✅ Inline Style & StyleSheet
- ✅ Flex Properties

---

## 💡 Key Concepts

| Concept            | Description                                                         |
| :----------------- | :------------------------------------------------------------------ |
| **FlexDirection**  | Contorls the direction in which the children of a node are laid out |
| **JustifyContent** | Aligns children in the main direction                               |
| **AlignItems**     | Align children along the cross axis of their container              |

---

## 🧱 Code Snippet

```jsx
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
```
