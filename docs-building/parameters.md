---
id: parameters
title: Parameters
---

# ⚙️ Parameters

Pass data into your functions

---

## 🧠 What are Parameters?

Parameters allow functions to accept input.

👉 Instead of hardcoding values  
👉 You make functions flexible and reusable  

---

### 🔍 Example

```python
# Without parameters (inflexible)
def greet_alice():
    print("Hello, Alice!")

# With parameters (flexible)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
greet("Bob")
greet("Charlie")
```

---

## 🧩 Basic Parameters

Add parameters inside parentheses:

```python
def introduce(name, age):
    print(f"My name is {name}")
    print(f"I am {age} years old")

introduce("Alice", 25)
introduce("Bob", 30)
```

💡 Values passed → **arguments**  
💡 Variables defined → **parameters**

---

## 🔢 Multiple Parameters

```python
def calculate_total(price, tax_rate, discount):
    tax = price * tax_rate
    final_price = price + tax - discount
    print(f"Total: ${final_price}")

calculate_total(100, 0.08, 10)
```

⚠️ Order matters!

---

## 🎯 Default Values

Make parameters optional:

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")
greet("Bob", "Hi")
```

👉 Required → first  
👉 Default → last  

---

## 🏷 Keyword Arguments

Use parameter names for clarity:

```python
def create_profile(name, age, city):
    print(f"{name}, {age}, from {city}")

# Positional
create_profile("Alice", 25, "NYC")

# Keyword
create_profile(city="NYC", age=25, name="Alice")
```

👉 Order doesn’t matter with keywords

---

## ⚠️ Common Mistakes

### ❌ Wrong number of arguments

```python
def greet(name, age):
    print(f"Hi {name}, you're {age}")

greet("Alice")            # ❌ too few
greet("Alice", 25, "NYC") # ❌ too many
```

```python
greet("Alice", 25)        # ✅ correct
```

---

### ❌ Mutable default values

```python
def add_item(item, list=[]):  # ❌ wrong
    list.append(item)
    return list
```

```python
def add_item(item, list=None):  # ✅ correct
    if list is None:
        list = []
    list.append(item)
    return list
```

---

## 🚀 What’s Next?

Functions become powerful when they return results.

👉 **Next:** [Return Values](./return-values)  
Get results from functions