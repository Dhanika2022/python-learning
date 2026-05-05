---
id: defining-functions
title: Defining Functions
---

# 🛠 Defining Functions

Create your own reusable functions

---

## 🧠 Your First Function

A function is a **named block of code** that performs a specific task.

👉 Define it once  
👉 Use it whenever needed  

```python
def greet():
    print("Hello, world!")
    print("Welcome to Python!")

# Call the function
greet()
```

---

## 🧩 Function Syntax

Every function follows this pattern:

```python
def function_name():
    # Code goes here
    pass
```

### 🔍 Key Parts

- `def` → creates a function  
- Function name → what it does  
- `()` → required parentheses  
- `:` → starts function body  
- Indentation → defines function code  

---

## ✍️ Naming Functions

Follow clean naming rules:

### ✅ Good Examples

```python
def calculate_total():
    pass

def send_email():
    pass

def validate_password():
    pass
```

### ❌ Avoid

```python
def func1():        # Not descriptive
    pass

def Calculate():    # Not Python style
    pass
```

👉 Use **snake_case + meaningful names**

---

## ▶️ Calling Functions

Call a function using its name + parentheses:

```python
def say_goodbye():
    print("Goodbye!")
    print("See you later!")

say_goodbye()
say_goodbye()
say_goodbye()
```

💡 Write once → reuse many times

---

## ⚙️ Functions with Logic

Functions can include conditions and logic:

```python
def check_weather():
    temperature = 25
    if temperature > 30:
        print("It's hot!")
    else:
        print("Nice weather!")

check_weather()
```

---

## 🌍 Variable Scope

Variables exist in different scopes.

---

### 📍 Local Variables

Only exist inside the function:

```python
def calculate_price():
    price = 100
    tax = price * 0.1
    print(price + tax)

calculate_price()

# ❌ Error
print(price)
```

---

### 🌐 Global Variables

Defined outside functions:

```python
discount_rate = 0.15

def apply_discount(price):
    return price - (price * discount_rate)

print(apply_discount(100))
```

---

### ⚠️ Modifying Global Variables

```python
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)
```

👉 Avoid this when possible

---

## ✅ Best Practice

Use parameters and return values instead:

```python
def add_amounts(current_total, amount):
    return current_total + amount

total = 0
total = add_amounts(total, 10)
total = add_amounts(total, 20)

print(total)
```

👉 Cleaner and easier to maintain

---

## ⚠️ Common Mistakes

### Missing parentheses

```python
greet    # ❌
greet()  # ✅
```

---

### Missing colon

```python
def greet()   # ❌
```

```python
def greet():  # ✅
```

---

### Wrong indentation

```python
def greet():
print("Hello")  # ❌
```

```python
def greet():
    print("Hello")  # ✅
```

---

## 🚀 What’s Next?

Functions become powerful when they can accept input.

👉 Let’s learn about parameters.

👉 Next: [Parameters](./parameters)  
Pass data to functions