---
id: tuples
title: Tuples
sidebar_position: 17
---

# 🔒 Tuples

Work with immutable sequences

---


## 🧠 What are Tuples?

Tuples are like lists, but they **cannot be changed after creation**.

👉 They are **immutable** (unchangeable)

---

### 📌 When to use tuples

Use tuples for data that should not change:

- 📍 Coordinates → `(x, y)`  
- 🎨 Colors → `(255, 0, 0)`  
- 🗄 Database records  
- 🔁 Function return values  

---

## 🛠 Creating Tuples

```python
# Empty tuple
empty = ()

# With items
point = (3, 5)
colors = ("red", "green", "blue")
```

---

### ⚠️ Single-item tuple

```python
single = (42,)    # ✅ correct
not_tuple = (42)  # ❌ just a number
```

👉 A comma is required for single-item tuples

---

### ✨ Without parentheses

```python
coordinates = 10, 20
```

---

## 🔍 Accessing Items

```python
point = (3, 5)
colors = ("red", "green", "blue")

print(point[0])     # 3
print(colors[-1])   # blue
```

---

### ✂️ Slicing

```python
print(colors[0:2])   # ("red", "green")
```

👉 Same behavior as lists

---

## 🎯 Tuple Unpacking

One of the most useful features:

```python
point = (3, 5)

x, y = point   # unpacking
```

---

### 🔁 Multiple assignment

```python
a, b, c = 1, 2, 3
```

---

### 🔄 Swap variables

```python
x, y = y, x
```

👉 Clean and Pythonic ✨

---

## ⚠️ Common Mistakes

- Forgetting comma in single-item tuple  
- Trying to modify tuples (not allowed)  

---

## 🧾 Quick Summary

- Tuples are ordered and immutable  
- Similar to lists but cannot change  
- Useful for fixed data  
- Support indexing and unpacking  

---

## 🚀 What’s Next?

👉 **Next:** [Sets](./sets)  
Unique collections  

👉 **Previous:** [Dictionaries](./dictionaries)