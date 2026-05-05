---
id: variables
title: Variables
sidebar_position: 4
---

# 📦 Variables

Learn to store and name your data

---

## 🧠 What are Variables?

A variable is like a **labeled box** where you store information.

👉 You give it a name  
👉 You put a value inside  

Later, you can use that name to get the value back.

### Real-life examples:
- Your name → stores what people call you  
- Your age → stores a number  
- Your favorite color → stores text  

---

## ✨ Creating Your First Variable

```python
name = "Alice"
age = 25
is_student = True
```

### Breakdown:
- `name` → variable name  
- `=` → assignment operator  
- `"Alice"` → value stored  

---

## 📌 Naming Rules

### ✅ Allowed

```python
user_name = "Dhanika"      # Python style
userName = "Dhanika"       # Works, but not recommended
age2 = 30
_private = "secret"
```

---

### ❌ Not Allowed

```python
2age = 30              # Cannot start with number
my-name = "Dhanika"       # Hyphen not allowed
my name = "Dhanika"       # No spaces
class = "Python"       # Reserved keyword
```

---

## 🐍 Python Naming Convention (snake_case)

Python uses **snake_case**:

```python
first_name = "Alice"
user_age = 25
is_logged_in = True
shopping_cart_total = 49.99
```

### ❌ Avoid (not Python style)

```python
firstName = "Alice"
userAge = 25
isLoggedIn = True
```

💡 Use meaningful names like:
- `user_score`
- `file_path`

---

## 🔄 Changing Variables

Variables can change over time:

```python
score = 0
print(score)  # 0

score = 10
print(score)  # 10

score = score + 5
print(score)  # 15
```

---

## ⚠️ Common Mistakes

### 1. Forgetting quotes

```python
# Wrong
name = Alice  # Python looks for a variable called Alice

# Right
name = "Alice"  # This creates text
```

---

### 2. Using undefined variables

```python
# Wrong
print(score)  # Error: score doesn't exist yet
score = 10

# Right
score = 10
print(score)  # Now it works
```

---

### 3. Confusing `=` and `==`

```python
# = means "store"
age = 25

# == means "compare" (we'll learn this later)
if age == 25:
    print("Quarter century!")
```

---

## 🧾 Quick Summary

- Variables store data  
- Use meaningful names  
- Follow naming rules  
- Python uses snake_case  

---

## 🚀 What’s Next?

👉 Next: [Data Types](./data-types)