---
id: dictionaries
title: Dictionaries
sidebar_position: 16
---

# 📘 Dictionaries

Store data with key-value pairs

---

## 🧠 What are Dictionaries?

Dictionaries store data as **key → value pairs**.

👉 Think of them like a real dictionary:

- 📞 Phone book → name → number  
- 🍽 Menu → dish → price  
- 👤 User profile → username → details  

---

## 🛠 Creating Dictionaries

```python
# Empty dictionary
my_dict = {}

# With data
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Another way
scores = dict(math=95, english=87, science=92)
```

💡 Dictionaries use `{}` and `key: value` format  
👉 Keys must be **unique**

---

## 🔍 Accessing Values

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

print(person["name"])   # Alice
print(person["age"])    # 30
```

---

### ✅ Safer access

```python
print(person.get("job"))                 # None
print(person.get("job", "Unknown"))     # Default value
```

👉 `get()` avoids errors if key is missing

---

## 🔄 Changing Dictionaries

```python
person = {"name": "Alice", "age": 30}

# Add / update
person["email"] = "alice@email.com"
person["age"] = 31

# Remove
del person["email"]
age = person.pop("age")
person.clear()
```

---

## ⚙️ Useful Methods

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

print(person.keys())
print(person.values())
print(person.items())
```

---

### 🔎 Check key

```python
if "name" in person:
    print("Name found!")
```

---

### 🔄 Update multiple

```python
person.update({"age": 31, "job": "Engineer"})
```

---

## 🧩 Nested Dictionaries

```python
students = {
    "alice": {"age": 20, "grade": "A"},
    "bob": {"age": 21, "grade": "B"}
}

print(students["alice"]["grade"])  # A
```

---

## ⚠️ Common Mistakes

- Accessing missing keys → `KeyError`  
- Using mutable types as keys  
- Confusing `.get()` vs `[]`  

---

## 🧾 Quick Summary

- Dictionaries store key-value pairs  
- Keys must be unique  
- Fast lookup using keys  
- Use `.get()` for safety  

---

## 🚀 What’s Next?

👉 **Next:** [Tuples](./tuples)  
Immutable sequences  

👉 **Previous:** [Lists](./lists)