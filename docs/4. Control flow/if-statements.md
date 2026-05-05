---
id: if-statements
title: If Statements
sidebar_position: 12
---

# 🔀 If Statements

Make decisions in your code

---


## 🧠 What are If Statements?

If statements allow your program to **make decisions**.

👉 They check a condition (True/False)  
👉 Then run code based on the result  

---

## 🌍 Real-Life Logic

- IF it’s raining → take umbrella  
- IF battery < 20% → charge phone  
- IF password correct → allow access  

---

## ⚡ Basic If Statement

```python
age = 18

if age >= 18:
    print("You can vote!")
    print("You're an adult")
```

---

### 🔍 How it works

1. Check condition → `age >= 18`  
2. If **True** → run indented code  
3. If **False** → skip  

⚠️ Important:
- `:` is required  
- Indentation defines the block  

---

## 🔁 If-Else Statement

```python
temperature = 25

if temperature > 30:
    print("It's hot!")
else:
    print("Nice weather!")
```

👉 Handles both True and False cases

---

## 🔗 If-Elif-Else Chain

```python
score = 85

if score >= 90:
    print("A - Excellent!")
elif score >= 80:
    print("B - Good job!")
elif score >= 70:
    print("C - Keep it up!")
else:
    print("F - Need improvement")
```

---

### 💡 Why use `elif`?

- Stops after first True condition  
- Prevents multiple outputs  
- More efficient  

👉 Order matters (specific → general)

---

## 🔗 Multiple Conditions

```python
age = 25
has_license = True

# AND → both must be true
if age >= 18 and has_license:
    print("You can drive!")

# OR → at least one true
weekend = True
holiday = False

if weekend or holiday:
    print("No work today!")

# NOT → reverse condition
raining = False

if not raining:
    print("Let's go outside!")
```

---

## 🧩 Nested If Statements

```python
has_ticket = True
age = 15

if has_ticket:
    if age >= 18:
        print("Enjoy the movie!")
    else:
        print("Need adult supervision")
else:
    print("Buy a ticket first")
```

---

## ⚠️ Common Mistakes

- Forgetting `:`  
- Using `=` instead of `==`  
- Incorrect indentation  

---

## 🧾 Quick Summary

- If statements control decisions  
- Use `if`, `elif`, `else`  
- Conditions return True/False  
- Indentation is critical  

---

## 🚀 What’s Next?

👉 **Next:** [Loops](./loops)  
Repeat code efficiently  

👉 **Previous:** [Control Flow](./control-flow)