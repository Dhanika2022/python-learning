---
id: string-manipulation
title: String Manipulation
sidebar_position: 10
---

# ✂️ String Manipulation

Advanced text operations


---

## 🧠 Working with Text

Now that you understand strings, let’s learn how to **manipulate text**.

👉 Python provides powerful tools to:
- Combine text  
- Modify text  
- Search and replace  
- Clean data  

---

## 🔗 Concatenation (Joining)

```python
first_name = "Jane"
last_name = "Doe"

# Using +
full_name = first_name + " " + last_name
```

---

### ✨ Using f-strings (Recommended)

```python
greeting = f"Hello, {first_name}!"

age = 25
intro = f"I'm {first_name} and I'm {age} years old"
```

---

## 🔁 Repetition

```python
star = "*"
stars = star * 10

separator = "-" * 20
```

---

## 🧰 String Methods

Python strings come with many built-in methods.

👉 You can often guess what they do:

- `upper()` → uppercase  
- `lower()` → lowercase  
- `replace()` → replaces text  

---

## 🔤 Changing Case

```python
text = "Python Programming"

print(text.lower())   # python programming
print(text.upper())   # PYTHON PROGRAMMING
print(text.title())   # Python Programming
```

---

## 🧹 Cleaning Strings

```python
messy = "  hello world  "
print(messy.strip())   # removes spaces

price = "$19.99"
print(price.strip("$"))
```

---

## 🔍 Finding and Replacing

```python
message = "I love Python programming with Python"

# Check existence
print("Python" in message)       # True
print(message.startswith("I"))  # True
print(message.endswith("Python")) # True
```

---

### 📌 Searching

```python
print(message.find("Python"))   # first position
print(message.count("Python"))  # number of occurrences
```

---

### 🔄 Replacing

```python
new_message = message.replace("Python", "JavaScript")
print(new_message)
```

---

💡 Python has many more string methods —  
you’ll naturally learn them as needed.

---

## ⚠️ Common Mistakes

- Forgetting `f` in f-strings  
- Mixing quotes incorrectly  
- Using wrong method names  

---

## 🧾 Quick Summary

- Use `+` or f-strings to combine text  
- Use `*` to repeat  
- Use methods like `upper()`, `strip()`, `replace()`  
- Strings are very powerful in Python  

---

## 🚀 What’s Next?

👉 **Next:** [Control Flow](./if-statements)  
Learn decisions and loops  

👉 **Previous:** [Operators](./operators)