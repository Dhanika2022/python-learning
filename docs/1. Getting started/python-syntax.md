---
id: python-syntax
title: Python Syntax
sidebar_position: 2
---

# 🧾 Python Syntax

How to write Python code properly

---

## 🧠 What is Syntax?

Every programming language has its own rules — its **syntax**.

It’s like grammar in human languages. You can’t just write words in any order and expect people to understand.

👉 Python is known for being **clean and readable**  
👉 But it still has rules you must follow  

---

## ⚡ Why Syntax Matters

Think about these two sentences:

- ✅ “The cat sat on the mat”  
- ❌ “Cat the on mat sat the”  

Same words — wrong order.

Programming works the same way:

```python
# ✅ Correct
if age > 18:
    print("Adult")

# ❌ Wrong
age > 18 print("Adult")
```

---

## ✨ Python’s Unique Feature: Indentation

Most programming languages use `{}` brackets.  
Python uses indentation (spaces).

```python
# Python
if temperature > 30:
    print("It's hot!")
    print("Turn on AC")
```

```csharp
// C#
if (temperature > 30)
{
    Console.WriteLine("It's hot!");
    Console.WriteLine("Turn on AC");
}
```

---

## 📌 Indentation Rules

```python
# ✅ CORRECT (4 spaces)
if score > 90:
    print("A grade")
    if score == 100:
        print("Perfect!")
```

```python
# ❌ WRONG (inconsistent spacing)
if score > 90:
  print("A grade")
    if score == 100:
      print("Perfect!")
```

⚠️ Python will throw an error if indentation is wrong  
👉 This is the **#1 beginner mistake**

---

## 🧑‍💻 Python Style Guide (PEP8)

Python has style rules called **PEP8**.

### Key guidelines:
- Use 4 spaces (not tabs)  
- Keep lines under 79 characters  
- Use `snake_case` → `user_name`  
- Add spacing around operators  

👉 Not required, but makes code professional  

---

## 🧾 Quick Summary

- Syntax = rules of writing Python  
- Python cares about:
  - Order  
  - Spelling  
  - **Indentation (very important)**  

---

## 🚀 What’s Next?

👉 Next: [Python Errors](./python-errors)