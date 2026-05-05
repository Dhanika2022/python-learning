---
id: sets
title: Sets
sidebar_position: 18
---

# 🔗 Sets

Work with unique collections

---

## 🧠 What are Sets?

Sets are collections that store **only unique values**.

👉 Duplicate values are automatically removed

---

### 📌 Think of sets like:

- 🟢 A bag of unique marbles  
- 📋 Guest list (no duplicates)  
- 🏷 Unique tags or categories  

---

## 🛠 Creating Sets

```python
# Empty set (important!)
empty_set = set()   # NOT {} → that's a dictionary

# With values
numbers = {1, 2, 3, 4, 5}
fruits = set(["apple", "banana", "orange"])
```

---

### 🔄 Remove duplicates automatically

```python
scores = [85, 90, 85, 92, 90]

unique_scores = set(scores)
print(unique_scores)   # {85, 90, 92}
```

---

## ⚙️ Basic Operations

```python
colors = {"red", "blue"}

# Add
colors.add("green")

# Remove
colors.remove("blue")     # Error if not found
colors.discard("yellow")  # No error

# Check
if "red" in colors:
    print("Red is available")
```

---

## 🎯 Common Uses

### 🔁 Remove duplicates

```python
names = ["Alice", "Bob", "Alice", "Charlie"]

unique_names = list(set(names))
print(unique_names)
```

---

### ⚡ Fast membership check

```python
allowed_users = {"alice", "bob", "charlie"}

if "alice" in allowed_users:
    print("Access granted")
```

👉 Sets are very fast for checking existence

---

## ⚠️ Common Mistakes

- Using `{}` for empty set (creates dict)  
- Expecting order (sets are unordered)  

---

## 🧾 Quick Summary

- Sets store unique values  
- Automatically remove duplicates  
- Unordered collection  
- Very fast membership checks  

---

## 🎉 What’s Next?

👉 **Next:** Building Programs  
Start creating real Python projects  

👉 **Previous:** [Tuples](./tuples)