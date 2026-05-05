---
id: data-types
title: Data Types
sidebar_position: 1
---

# 🧩 Data Types

Different kinds of information in Python


---

## 🧠 What are Data Types?

Just like in real life, Python works with different kinds of information.

👉 You can’t add someone’s **name** to their **age** — they’re different types of data.

Python mainly works with:

- **Numbers** → for calculations  
- **Strings** → for text  
- **Booleans** → for True/False decisions  

Each type has its own rules and behavior.

---

## 🔑 The Main Types

### 🔢 Numbers
Used for counting and calculations  
Examples: `10`, `3.14`

---

### 🔤 Strings
Used for text and words  
Examples: `"Hello"`, `"Python"`

---

### ✅ Booleans
Used for decisions  
Values: `True`, `False`

---

## ⚡ Why Data Types Matter

Python behaves differently depending on the type:

```python
# Numbers → math operations
total = 10 + 5
print(total)   # 15

# Strings → combine text
name = "Hello" + "World"
print(name)    # HelloWorld
```

---

### ❌ Mixing types causes errors

```python
# age = "25" + 5   ❌ Error
```

---

### ✅ Fix using conversion

```python
age = int("25") + 5
print(age)   # 30
```

---

## 🔍 Checking Data Types

You can check any type using `type()`:

```python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("Hello"))   # <class 'str'>
print(type(True))      # <class 'bool'>
```

---

### Checking variables

```python
age = 25
name = "Alice"

print(type(age))    # <class 'int'>
print(type(name))   # <class 'str'>
```

---

## 🧾 Quick Summary

- Python has different data types  
- Main ones: Numbers, Strings, Booleans  
- Types affect how operations work  
- Use `type()` to check  

---

## 🚀 What’s Next?

👉 Next: [Numbers](./numbers)