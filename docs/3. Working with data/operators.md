---
id: operators
title: Operators
sidebar_position: 9
---

# ⚙️ Operators

Math, comparisons, and logic in Python


---

## 🧠 What are Operators?

Operators are symbols that perform operations on values.

👉 Think of them as the **“verbs” of programming** — they make things happen.

You already know many of them:

- ➕ Calculate → `+`, `-`, `*`, `/`  
- 🔍 Compare → `>`, `<`, `==`  
- 🔗 Combine → `and`, `or`, `not`  

---

## 🧮 Arithmetic Operators

```python
# Basic math
print(10 + 3)   # 13
print(10 - 3)   # 7
print(10 * 3)   # 30
print(10 / 3)   # 3.333... (always float)
```

---

### ✨ Special operators

```python
print(10 // 3)  # 3   (floor division)
print(10 % 3)   # 1   (remainder)
print(10 ** 3)  # 1000 (power)
```

---

## 📊 Order of Operations

Python follows **PEMDAS**:

```python
result = 2 + 3 * 4      # 14
result = (2 + 3) * 4    # 20
```

---

## 🔍 Comparison Operators

These return **True or False**:

```python
age = 18

print(age == 18)   # True
print(age != 21)   # True
print(age > 17)    # True
print(age < 20)    # True
print(age >= 18)   # True
print(age <= 18)   # True
```

---

### ⚠️ Important

```python
age = 18   # assignment
age == 18  # comparison
```

👉 This is a **very common mistake**

---

## 🔗 Logical Operators

```python
age = 25
has_license = True

# AND → both must be true
can_drive = age >= 16 and has_license
print(can_drive)   # True

# OR → at least one true
day = "Saturday"
is_weekend = day == "Saturday" or day == "Sunday"
print(is_weekend)  # True

# NOT → reverses value
is_adult = age >= 18
is_child = not is_adult
print(is_child)    # False
```

---

## 📋 Truth Tables

```python
# AND
print(True and True)    # True
print(True and False)   # False

# OR
print(True or False)    # True
print(False or False)   # False

# NOT
print(not True)         # False
print(not False)        # True
```

---

## 🔄 Assignment Shortcuts

```python
# Instead of:
score = score + 10

# Use:
score += 10
```

---

### Works with others too:

```python
x = 10
x += 5   # 15
x *= 2   # 30
```

---

## ⚠️ Common Mistakes

- Division always returns float  
- Ignoring order of operations  
- Confusing `=` and `==`  

---

## 🧾 Quick Summary

- Operators perform actions  
- Arithmetic → math  
- Comparison → True/False  
- Logical → combine conditions  
- Use shortcuts like `+=`  

---

## 🚀 What’s Next?

👉 **Next:** [String Manipulation](./string-manipulation)  
Advanced text operations  

👉 **Previous:** [Booleans](./booleans)