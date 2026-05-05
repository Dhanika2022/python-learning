---
id: booleans
title: Booleans
sidebar_position: 8
---

# ✅ Booleans

True and False values for decisions

---

## 🧠 What are Booleans?

Booleans are the **simplest data type** — they can only be:

- **True**
- **False**

Think of them as **yes/no answers**.

```python
is_logged_in = True
is_admin = False
has_permission = True
```

⚠️ Booleans must start with capital letters:

```python
True   # ✅ correct
False  # ✅ correct

true   # ❌ error
false  # ❌ error
```

---

## ⚙️ Creating Booleans

Booleans can be created directly or from comparisons:

```python
# Direct assignment
is_ready = True

# From comparisons
age = 18
can_vote = age >= 18   # True

score = 75
passed = score > 60    # True
```

---

## 🔍 Comparison Operators

These operators return **True or False**:

```python
age = 25

# Equality
print(age == 25)   # True
print(age != 30)   # True

# Greater / Less
print(age > 20)    # True
print(age < 30)    # True
print(age >= 25)   # True
print(age <= 25)   # True
```

---

### ⚠️ Important

```python
=   # assignment
==  # comparison
```

👉 This is one of the **most common beginner mistakes**

---

## ⚠️ Common Mistakes

- Using `true` / `false` instead of `True` / `False`  
- Using `=` instead of `==`  
- Confusing comparison operators  

---

## 🧾 Quick Summary

- Booleans → True or False  
- Used for decisions  
- Created using comparisons  
- Operators return boolean values  

---

## 🚀 What’s Next?

👉 **Next:** [Operators](./operators)  
Math, comparisons, and more  

👉 **Previous:** [Strings](./strings)