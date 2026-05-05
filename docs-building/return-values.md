---
id: return-values
title: Return Values
---

# ⬇️ Return Values

Get results back from your functions

---

## 🧠 Getting Results from Functions

So far, functions were printing output.  
But often, you want functions to **calculate and return results**.

---

### 🔍 Example

```python
# Only prints
def add_print(a, b):
    print(a + b)

# Returns a value
def add_return(a, b):
    return a + b

result = add_return(5, 3)
print(f"The result is {result}")
```

👉 `return` lets you reuse the result anywhere

---

## 🔁 The Return Statement

Use `return` to send data back:

```python
def calculate_area(width, height):
    area = width * height
    return area

room_area = calculate_area(10, 12)
print(room_area)
```

⚠️ Once `return` is reached → function stops immediately  

---

## ⚙️ Using Returned Values

Returned values can be used in different ways:

```python
def double(number):
    return number * 2

# Store
result = double(5)

# Use in expressions
total = double(5) + double(3)

# Pass into other functions
print(double(10))

# Use in conditions
if double(7) > 10:
    print("Big number!")
```

---

## 🔢 Returning Multiple Values

Python can return multiple values:

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([5, 2, 8, 1, 9])
print(minimum, maximum)
```

👉 Returned as a tuple automatically

---

## ⚖️ Return vs Print

```python
def greet_print(name):
    print(f"Hello, {name}!")

def greet_return(name):
    return f"Hello, {name}!"
```

```python
msg = greet_print("Alice")
print(msg)  # None ❌

msg = greet_return("Alice")
print(msg.upper())  # HELLO, ALICE! ✅
```

👉 Use:
- `print` → display  
- `return` → reuse  

---

## ❗ Functions Without Return

```python
def greet(name):
    print(f"Hello, {name}!")

result = greet("Alice")
print(result)  # None
```

👉 Default return value = `None`

---

## ⚠️ Common Mistakes

### ❌ Forgetting return

```python
def total(items):
    sum(items)   # no return ❌
```

```python
def total(items):
    return sum(items)  # ✅
```

---

### ❌ Code after return

```python
def status():
    return "Done"
    print("Never runs")  # ❌
```

---

### ❌ Using print instead of return

```python
def multiply(a, b):
    print(a * b)

result = multiply(3, 4)
```

👉 `result` becomes `None` ❌  

```python
def multiply(a, b):
    return a * b
```

---

## 🚀 What’s Next?

Now that you understand functions, let’s extend your skills.

👉 **Next:** External Tools  
Use libraries and APIs