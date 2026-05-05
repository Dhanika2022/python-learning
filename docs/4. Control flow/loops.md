---
id: loops
title: Loops
sidebar_position: 13
---

# 🔁 Loops

Repeat code multiple times

---

## 🧠 What are Loops?

Loops allow you to **repeat code without rewriting it**.

👉 Instead of copying the same code multiple times,  
👉 you tell Python to run it again automatically.

---

## ❌ Without Loops

```python
print("Hello!")
print("Hello!")
print("Hello!")
print("Hello!")
print("Hello!")
```

---

## ✅ With Loops

```python
for i in range(5):
    print("Hello!")
```

👉 Cleaner and easier to maintain!

---

## 🔄 For Loops

The **for loop** is the most commonly used loop in Python.

---

### 🔢 Repeat a specific number of times

```python
for i in range(5):
    print(i)
```

**Output:**
```
0
1
2
3
4
```

💡 Python uses **zero-indexing** → starts from 0

---

### 🔁 Custom ranges

```python
# From 1 to 5
for i in range(1, 6):
    print(i)

# Step by 2
for i in range(0, 10, 2):
    print(i)
```

---

### 🔤 Loop through text

```python
name = "Python"

for letter in name:
    print(letter)
```

---

### 📦 Loop through a list (preview)

```python
colors = ["red", "blue", "green"]

for color in colors:
    print(f"I like {color}")
```

---

## 🔁 While Loops

A **while loop** runs as long as a condition is True:

```python
count = 0

while count < 5:
    print(f"Count is {count}")
    count = count + 1
```

---

### ⚠️ Important

👉 Always update the condition  
Otherwise → infinite loop 😅

---
---

## ⛔ Break Statement

`break` is used to **stop the loop completely**.

```python
for i in range(5):
    if i == 3:
        break
    print(i)
```

**Output:**
```
0
1
2
```

👉 Loop stops as soon as condition is met

---

## 🔄 Continue Statement

`continue` is used to **skip the current iteration** and move to the next one.

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

**Output:**
```
0
1
3
4
```

👉 Only skips that one value, loop continues

---

## 🧠 When to Use

- Use **break** → when you want to stop the loop early  
- Use **continue** → when you want to skip some cases  

---
## ⚠️ Common Mistakes

- Forgetting `:`  
- Wrong indentation  
- Off-by-one errors (`range`)  
- Infinite loops in `while`  

---

## 🧾 Quick Summary

- Loops repeat code  
- `for` → fixed number of times  
- `while` → based on condition  
- Use `range()` for counting  

---

## 🚀 What’s Next?

👉 **Next:** Data Structures  
Learn about lists, dictionaries, and more  

👉 **Previous:** [If Statements](./if-statements)