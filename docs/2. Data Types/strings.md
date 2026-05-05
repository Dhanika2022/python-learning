---
id: strings
title: Strings
sidebar_position: 7
---

# 🔤 Strings

Working with text in Python

---


## 🧠 What are Strings?

Strings are **text** — any characters inside quotes.

Python allows both:

```python
name = "Alice"
message = 'Hello, World!'
```

👉 Just be consistent when using quotes.

---

## ✨ Creating Strings

There are three ways to create strings:

```python
# Single quotes
first = 'Python'

# Double quotes
second = "Python"

# Triple quotes (multi-line)
paragraph = """This is
a multi-line
string"""
```

💡 Use double quotes when your text has an apostrophe:

```python
text = "It's Python!"
```

---

## 🔗 Combining Strings

```python
first_name = "John"
last_name = "Doe"

# Concatenation
full_name = first_name + " " + last_name
print(full_name)   # John Doe

# Repetition
stars = "*" * 5
print(stars)       # *****
```

---

## 📏 String Length

Use `len()` to count characters:

```python
message = "Hello"
print(len(message))   # 5

empty = ""
print(len(empty))     # 0
```

---

## 🔄 Converting to String

```python
age = 25

# Using str()
message = "I am " + str(age) + " years old"
print(message)
```

---

### ✨ Better way (f-strings)

```python
message = f"I am {age} years old"
```

---

## ⚠️ Common Mistakes

- Mixing quotes incorrectly  
- Trying to add string + number  
- Forgetting quotes  

---

## 🧾 Quick Summary

- Strings store text  
- Use `' '` or `" "`  
- Combine using `+`  
- Use `len()` for length  
- Use `str()` or f-strings for conversion  

---

## 🚀 What’s Next?

👉 **Next:** [Booleans](./booleans)  
True and False values  

👉 **Previous:** [Numbers](./numbers)