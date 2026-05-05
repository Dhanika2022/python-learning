---
id: lists
title: Lists
sidebar_position: 15
---

# 📋 Lists

Work with ordered collections


---

## 🧠 What are Lists?

Lists are Python’s **most flexible data structure**.

👉 They store multiple items in a specific order.

Think of a list like:

- 🛒 Shopping list → milk, eggs, bread  
- ✅ To-do list → tasks in order  
- 🎵 Playlist → songs in sequence  

---

## 🛠 Creating Lists

```python
# Empty list
my_list = []

# List with items
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

# Mixed types
mixed = ["hello", 42, True, 3.14]
```

💡 Lists use `[]` and items are separated by commas  
👉 You can mix different data types

---

## 🔍 Accessing Items

```python
fruits = ["apple", "banana", "orange"]

print(fruits[0])    # apple
print(fruits[1])    # banana
print(fruits[-1])   # orange (last item)
print(fruits[-2])   # banana
```

---

### ✂️ Slicing

```python
print(fruits[0:2])  # ["apple", "banana"]
print(fruits[1:])   # ["banana", "orange"]
```

💡 Index starts from **0** (zero-based indexing)

---

## 🔄 Changing Lists

Lists are **mutable** (can be changed):

```python
fruits = ["apple", "banana", "orange"]

# Update item
fruits[0] = "mango"

# Add items
fruits.append("grape")
fruits.insert(1, "kiwi")

# Remove items
fruits.remove("banana")
last = fruits.pop()
del fruits[0]
```

---

## ⚙️ Useful List Methods

```python
numbers = [3, 1, 4, 1, 5, 9]

# Info
print(len(numbers))       # length
print(numbers.count(1))   # count occurrences
print(numbers.index(4))   # find position

# Sorting
numbers.sort()
numbers.reverse()

# Copy
new_list = numbers.copy()
```

---

## ✅ Checking Lists

```python
fruits = ["apple", "banana", "orange"]

# Check item
if "apple" in fruits:
    print("Found apple!")

# Check empty
if fruits:
    print("List has items")
else:
    print("List is empty")
```

---

## ⚠️ Common Mistakes

- Index out of range  
- Modifying list while looping  
- Confusing copy vs reference  

---

## 🧾 Quick Summary

- Lists store multiple values  
- Ordered and changeable  
- Use indexing and slicing  
- Many useful built-in methods  

---

## 🚀 What’s Next?

👉 **Next:** [Dictionaries](./dictionaries)  
Key-value pairs  

👉 **Previous:** [Data Structures](./data-structures)