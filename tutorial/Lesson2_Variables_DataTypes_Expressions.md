# Lesson 2: Variables, Primitive Data Types, and Expressions

Welcome to Lesson 2! In Lesson 1, you learned how to create simple programs that print messages. Now we'll make your programs much more powerful by learning how to store and work with information!

---

## What Are Variables?

Imagine your computer's memory as a giant warehouse with millions of storage boxes. A **variable** is like putting a label on one of those boxes so you can store something in it and find it later!

### Real-Life Example

Think about your school locker:
- The **locker number** is like a **variable name**
- The **stuff inside** your locker is like the **value** stored in the variable
- You can put new things in your locker or take things out - just like you can change the value of a variable!

### Why Do We Need Variables?

Without variables, every time your program needed to remember something, you'd have to type it all over again. With variables, you can:
- Store information (like a player's score in a game)
- Remember user input (like someone's name)
- Perform calculations (like adding numbers together)
- Make your programs flexible and reusable

---

## Part 1: Creating and Using Variables

Let's start by creating a simple program that uses variables!

### Example 1: Your First Variable

Create a new file called `MyFirstVariables.java` in the `lesson2` folder:

```java
package al.istep.javacourse.lesson2;

public class MyFirstVariables {
    public static void main(String[] args) {
        // Create a variable
        int age;
        
        // Put a value in the variable
        age = 14;
        
        // Use the variable
        System.out.println("I am " + age + " years old!");
    }
}
```

**Let's break this down:**

1. `int age;` - This is **variable declaration**
   - `int` tells Java this variable will store whole numbers (integers)
   - `age` is the name we chose for our variable
   - The semicolon `;` ends the statement

2. `age = 14;` - This is **variable assignment**
   - We're putting the value `14` into the variable named `age`
   - The `=` symbol means "assign" or "store"

3. `System.out.println("I am " + age + " years old!");`
   - The `+` symbol joins (concatenates) text and the variable
   - Java replaces `age` with its value: `14`

**Output:**
```
I am 14 years old!
```

### Example 2: Declaration and Assignment Together

You can declare and assign a value at the same time:

```java
package al.istep.javacourse.lesson2;

public class MyFirstVariables {
    public static void main(String[] args) {
        int age = 14;
        String name = "Alex";
        
        System.out.println("Hello! My name is " + name);
        System.out.println("I am " + age + " years old!");
    }
}
```

**Output:**
```
Hello! My name is Alex
I am 14 years old!
```

### Example 3: Changing Variable Values

Variables can change - that's why they're called _variables_!

```java
package al.istep.javacourse.lesson2;

public class ChangingVariables {
    public static void main(String[] args) {
        int score = 0;
        System.out.println("Starting score: " + score);
        
        score = 10;
        System.out.println("After level 1: " + score);
        
        score = 25;
        System.out.println("After level 2: " + score);
        
        score = 50;
        System.out.println("Final score: " + score);
    }
}
```

**Output:**
```
Starting score: 0
After level 1: 10
After level 2: 25
Final score: 50
```

### Variable Naming Rules

Java has specific rules for naming variables:

**MUST follow these rules:**
1. Names can contain letters, digits, underscores `_`, and dollar signs `$`
2. Names must start with a letter, `_`, or `$` (not a digit)
3. Names are case-sensitive (`age` and `Age` are different!)
4. Names cannot be Java keywords (like `int`, `class`, `public`)

**Good variable names:**
```java
int age;           // ✅ Simple and clear
int studentAge;    // ✅ Descriptive
int student_age;   // ✅ Using underscore
int age2;          // ✅ Contains number
```

**Bad variable names:**
```java
int 2age;          // ❌ Starts with number
int student-age;   // ❌ Contains hyphen
int class;         // ❌ Java keyword
```

**Best Practices** (not required, but recommended):
- Use meaningful names: `age` is better than `a`
- Use camelCase: `studentAge` (first word lowercase, then capitalize each new word)
- Make names descriptive: `highScore` is better than `hs`

---

## Part 2: Primitive Data Types

Java has different **types** of data, just like you have different types of containers in real life (bottles for liquids, boxes for solid items, envelopes for papers).

There are **8 primitive data types** in Java. Let's learn about them!

### 1. Integer Data Types

These store whole numbers (no decimals).

#### `byte` - Very Small Numbers

```java
byte age = 12;
byte temperature = -5;
```

- **Size**: 8 bits (1 byte)
- **Range**: -128 to 127
- **Use when**: You need to save memory with small numbers
- **Real-world examples**: Person's age, small counts, temperature in Celsius

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class ByteExample {
    public static void main(String[] args) {
        byte players = 4;
        byte maxLevel = 100;
        byte temperature = -10;
        
        System.out.println("Number of players: " + players);
        System.out.println("Maximum level: " + maxLevel);
        System.out.println("Temperature: " + temperature + "°C");
    }
}
```

#### `short` - Small Numbers

```java
short year = 2024;
short elevation = 1500;
```

- **Size**: 16 bits (2 bytes)
- **Range**: -32,768 to 32,767
- **Use when**: You need numbers larger than byte but want to save memory
- **Real-world examples**: Years, altitudes, small measurements

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class ShortExample {
    public static void main(String[] args) {
        short currentYear = 2024;
        short buildingHeight = 3200;  // in centimeters
        
        System.out.println("Current year: " + currentYear);
        System.out.println("Building height: " + buildingHeight + " cm");
    }
}
```

#### `int` - Regular Numbers (Most Common!)

```java
int population = 8000000;
int score = 12450;
```

- **Size**: 32 bits (4 bytes)
- **Range**: -2,147,483,648 to 2,147,483,647 (about -2 billion to 2 billion)
- **Use when**: This is the default choice for whole numbers!
- **Real-world examples**: Prices in cents, populations, game scores, distances

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class IntExample {
    public static void main(String[] args) {
        int population = 8500000;
        int distanceToMoon = 384400;  // in kilometers
        int bankBalance = 1250;       // in cents ($12.50)
        
        System.out.println("City population: " + population);
        System.out.println("Distance to moon: " + distanceToMoon + " km");
        System.out.println("Bank balance: $" + (bankBalance / 100.0));
    }
}
```

#### `long` - Really Big Numbers

```java
long worldPopulation = 8000000000L;
long distanceToSun = 149600000L;
```

- **Size**: 64 bits (8 bytes)
- **Range**: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (huge!)
- **Use when**: int is too small
- **Important**: Add `L` at the end of long numbers
- **Real-world examples**: World population, astronomical distances, big data

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class LongExample {
    public static void main(String[] args) {
        long worldPopulation = 8000000000L;
        long secondsInYear = 31536000L;
        long distanceToSun = 149600000L;  // in kilometers
        
        System.out.println("World population: " + worldPopulation);
        System.out.println("Seconds in a year: " + secondsInYear);
        System.out.println("Distance to sun: " + distanceToSun + " km");
    }
}
```

**Quick Comparison:**

| Type | Size | Range | Example Use |
|------|------|-------|-------------|
| `byte` | 1 byte | -128 to 127 | Small counts, ages |
| `short` | 2 bytes | -32,768 to 32,767 | Years, small distances |
| `int` | 4 bytes | -2 billion to 2 billion | Most whole numbers |
| `long` | 8 bytes | Very large numbers | Population, space distances |

### 2. Floating-Point Number Data Types

These store numbers with decimal points.

#### `float` - Decimal Numbers (Less Precise)

```java
float price = 19.99f;
float temperature = 36.6f;
```

- **Size**: 32 bits (4 bytes)
- **Precision**: About 6-7 decimal digits
- **Important**: Add `f` at the end of float numbers
- **Use when**: You need decimals but don't need high precision
- **Real-world examples**: Prices, temperatures, percentages

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class FloatExample {
    public static void main(String[] args) {
        float price = 19.99f;
        float temperature = 36.6f;
        float piApprox = 3.14f;
        float percentage = 87.5f;
        
        System.out.println("Price: $" + price);
        System.out.println("Body temperature: " + temperature + "°C");
        System.out.println("Pi approximation: " + piApprox);
        System.out.println("Test score: " + percentage + "%");
    }
}
```

#### `double` - Decimal Numbers (More Precise!)

```java
double pi = 3.14159265359;
double distance = 123.456789;
```

- **Size**: 64 bits (8 bytes)
- **Precision**: About 15 decimal digits
- **Use when**: This is the default choice for decimal numbers!
- **Real-world examples**: Scientific calculations, precise measurements, coordinates

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class DoubleExample {
    public static void main(String[] args) {
        double pi = 3.14159265359;
        double gravity = 9.81;
        double latitude = 48.8566;
        double longitude = 2.3522;
        
        System.out.println("Pi: " + pi);
        System.out.println("Gravity: " + gravity + " m/s²");
        System.out.println("Paris coordinates:");
        System.out.println("  Latitude: " + latitude);
        System.out.println("  Longitude: " + longitude);
    }
}
```

**Float vs Double:**

| Type | Size | Precision | Memory Needed |
|------|------|-----------|---------------|
| `float` | 4 bytes | ~6-7 digits | Less |
| `double` | 8 bytes | ~15 digits | More (but usually worth it!) |

**Tip:** Use `double` unless memory is very limited. It's more precise and easier to work with!

### 3. Character Data Type

#### `char` - A Single Character

```java
char grade = 'A';
char initial = 'J';
char symbol = '$';
```

- **Size**: 16 bits (2 bytes)
- **Stores**: A single character
- **Important**: Use single quotes `'` not double quotes `"`
- **Real-world examples**: Grades, initials, single symbols

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class CharExample {
    public static void main(String[] args) {
        char grade = 'A';
        char firstInitial = 'J';
        char lastInitial = 'S';
        char currency = '$';
        char letter = 'Z';
        
        System.out.println("Grade: " + grade);
        System.out.println("Initials: " + firstInitial + "." + lastInitial + ".");
        System.out.println("Currency symbol: " + currency);
        System.out.println("Last letter of alphabet: " + letter);
    }
}
```

**Special Characters:**

```java
char newline = '\n';     // New line
char tab = '\t';         // Tab
char backslash = '\\';   // Backslash
char quote = '\'';       // Single quote
```

**Example with Special Characters:**
```java
package al.istep.javacourse.lesson2;

public class SpecialChars {
    public static void main(String[] args) {
        char tab = '\t';
        char newline = '\n';
        
        System.out.print("Name:" + tab + "Alex");
        System.out.print(newline);
        System.out.print("Age:" + tab + "14");
    }
}
```

### 4. Boolean Data Type

#### `boolean` - True or False

```java
boolean isRaining = true;
boolean gameOver = false;
```

- **Size**: 1 bit (but usually stored in 1 byte)
- **Values**: Only `true` or `false`
- **Use when**: You need yes/no, on/off, true/false answers
- **Real-world examples**: Light switches, game states, conditions

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class BooleanExample {
    public static void main(String[] args) {
        boolean isRaining = true;
        boolean isSunny = false;
        boolean hasHomework = true;
        boolean isWeekend = false;
        boolean isHungry = true;
        
        System.out.println("Is it raining? " + isRaining);
        System.out.println("Is it sunny? " + isSunny);
        System.out.println("Do I have homework? " + hasHomework);
        System.out.println("Is it the weekend? " + isWeekend);
        System.out.println("Am I hungry? " + isHungry);
    }
}
```

**Fun Example - Game Status:**
```java
package al.istep.javacourse.lesson2;

public class GameStatus {
    public static void main(String[] args) {
        boolean playerAlive = true;
        boolean hasKey = false;
        boolean doorLocked = true;
        boolean gameWon = false;
        
        System.out.println("=== GAME STATUS ===");
        System.out.println("Player alive: " + playerAlive);
        System.out.println("Has key: " + hasKey);
        System.out.println("Door locked: " + doorLocked);
        System.out.println("Game won: " + gameWon);
        
        // Find the key!
        hasKey = true;
        System.out.println("\n*You found a key!*");
        System.out.println("Has key: " + hasKey);
        
        // Unlock the door!
        doorLocked = false;
        System.out.println("\n*You unlocked the door!*");
        System.out.println("Door locked: " + doorLocked);
        
        // Win the game!
        gameWon = true;
        System.out.println("\n*You escaped and won!*");
        System.out.println("Game won: " + gameWon);
    }
}
```

---

## Part 3: Constants

Sometimes you want a variable that never changes - that's called a **constant**!

### Using the `final` Keyword

```java
final double PI = 3.14159265359;
final int DAYS_IN_WEEK = 7;
final String SCHOOL_NAME = "Lincoln Middle School";
```

- Use the `final` keyword before the type
- Convention: Use ALL_CAPS for constant names
- Once assigned, the value can never change!

**Example Program:**
```java
package al.istep.javacourse.lesson2;

public class ConstantsExample {
    public static void main(String[] args) {
        final double PI = 3.14159265359;
        final int DAYS_IN_WEEK = 7;
        final int HOURS_IN_DAY = 24;
        final int SPEED_OF_LIGHT = 299792458;  // in meters per second
        
        System.out.println("Mathematical constants:");
        System.out.println("Pi = " + PI);
        
        System.out.println("\nTime constants:");
        System.out.println("Days in a week: " + DAYS_IN_WEEK);
        System.out.println("Hours in a day: " + HOURS_IN_DAY);
        
        System.out.println("\nPhysics constants:");
        System.out.println("Speed of light: " + SPEED_OF_LIGHT + " m/s");
        
        // This would cause an error:
        // PI = 3.14;  // ❌ Cannot assign a value to final variable
    }
}
```

**Why use constants?**
- Makes code more readable: `DAYS_IN_WEEK` is clearer than `7`
- Prevents accidental changes: Compiler stops you from changing values
- Easy to update: Change in one place, applies everywhere
- Documents intent: Shows that a value is meant to never change

---

## Part 4: Expressions and Operators

An **expression** is a combination of values, variables, and operators that produces a result.

Think of it like a math problem: `5 + 3` is an expression that equals `8`.

### Arithmetic Operators

Just like in math class, Java can do calculations!

#### Basic Operations

```java
package al.istep.javacourse.lesson2;

public class BasicMath {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        int sum = a + b;           // Addition
        int difference = a - b;    // Subtraction
        int product = a * b;       // Multiplication
        int quotient = a / b;      // Division
        int remainder = a % b;     // Modulus (remainder)
        
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println();
        System.out.println("a + b = " + sum);           // 13
        System.out.println("a - b = " + difference);    // 7
        System.out.println("a * b = " + product);       // 30
        System.out.println("a / b = " + quotient);      // 3 (not 3.33!)
        System.out.println("a % b = " + remainder);     // 1
    }
}
```

**Output:**
```
a = 10
b = 3

a + b = 13
a - b = 7
a * b = 30
a / b = 3
a % b = 1
```

#### Understanding the Modulus Operator `%`

The modulus operator `%` gives you the **remainder** after division.

```java
package al.istep.javacourse.lesson2;

public class ModulusExamples {
    public static void main(String[] args) {
        System.out.println("Understanding Modulus (%):");
        System.out.println();
        
        System.out.println("10 % 3 = " + (10 % 3));  // 1 (10 ÷ 3 = 3 remainder 1)
        System.out.println("15 % 4 = " + (15 % 4));  // 3 (15 ÷ 4 = 3 remainder 3)
        System.out.println("20 % 5 = " + (20 % 5));  // 0 (20 ÷ 5 = 4 remainder 0)
        System.out.println("7 % 2 = " + (7 % 2));    // 1 (odd number!)
        System.out.println("8 % 2 = " + (8 % 2));    // 0 (even number!)
        
        System.out.println();
        System.out.println("Practical use - checking if even or odd:");
        int number = 17;
        int remainder = number % 2;
        if (remainder == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
    }
}
```

#### Integer Division vs. Decimal Division

**Important concept!** When you divide two integers, Java gives you an integer result (it drops the decimal part).

```java
package al.istep.javacourse.lesson2;

public class DivisionTypes {
    public static void main(String[] args) {
        // Integer division
        int a = 10;
        int b = 3;
        int result1 = a / b;
        System.out.println("Integer division: 10 / 3 = " + result1);  // 3 (not 3.33!)
        
        // Decimal division
        double c = 10.0;
        double d = 3.0;
        double result2 = c / d;
        System.out.println("Decimal division: 10.0 / 3.0 = " + result2);  // 3.333...
        
        // Mixed division (one is double)
        double result3 = a / 3.0;  // 3.0 makes it decimal division
        System.out.println("Mixed division: 10 / 3.0 = " + result3);  // 3.333...
        
        // Another way: casting
        double result4 = (double) a / b;
        System.out.println("With casting: (double) 10 / 3 = " + result4);  // 3.333...
    }
}
```

### Unary Operators

**Unary** means it works on just one value.

```java
package al.istep.javacourse.lesson2;

public class UnaryOperators {
    public static void main(String[] args) {
        int a = 5;
        int b = -3;
        
        System.out.println("Original values:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println();
        
        // Unary plus (doesn't really do anything)
        int result1 = +a;
        System.out.println("+a = " + result1);  // 5
        
        // Unary minus (changes sign)
        int result2 = -a;
        System.out.println("-a = " + result2);  // -5
        
        int result3 = -b;
        System.out.println("-b = " + result3);  // 3 (negative of -3)
        
        System.out.println();
        System.out.println("Note: Original variables don't change:");
        System.out.println("a = " + a);  // still 5
        System.out.println("b = " + b);  // still -3
    }
}
```

### Increment and Decrement Operators

These are shortcuts for adding or subtracting 1!

```java
package al.istep.javacourse.lesson2;

public class IncrementDecrement {
    public static void main(String[] args) {
        int score = 10;
        
        System.out.println("Starting score: " + score);
        
        // Increment (add 1)
        score++;  // Same as: score = score + 1;
        System.out.println("After score++: " + score);  // 11
        
        // Increment again
        score++;
        System.out.println("After score++: " + score);  // 12
        
        // Decrement (subtract 1)
        score--;  // Same as: score = score - 1;
        System.out.println("After score--: " + score);  // 11
        
        // You can also use ++score and --score
        ++score;
        System.out.println("After ++score: " + score);  // 12
        
        --score;
        System.out.println("After --score: " + score);  // 11
    }
}
```

#### Pre-increment vs Post-increment

There's a subtle difference between `++score` and `score++`:

```java
package al.istep.javacourse.lesson2;

public class PrePostIncrement {
    public static void main(String[] args) {
        // Post-increment (score++)
        int a = 5;
        int b = a++;  // b gets the OLD value of a, THEN a is incremented
        System.out.println("Post-increment:");
        System.out.println("a = " + a);  // 6
        System.out.println("b = " + b);  // 5
        
        System.out.println();
        
        // Pre-increment (++score)
        int c = 5;
        int d = ++c;  // c is incremented FIRST, THEN d gets the new value
        System.out.println("Pre-increment:");
        System.out.println("c = " + c);  // 6
        System.out.println("d = " + d);  // 6
    }
}
```

**When to use which?**
- In most cases, it doesn't matter! Use `score++` or `++score` on its own line
- Only matters when using the value in the same expression
- For beginners: Just use `score++` on its own line until you understand the difference

### Compound Assignment Operators

These are shortcuts for common operations!

```java
package al.istep.javacourse.lesson2;

public class CompoundAssignment {
    public static void main(String[] args) {
        int score = 100;
        
        System.out.println("Starting score: " + score);
        
        // Add and assign
        score += 50;  // Same as: score = score + 50;
        System.out.println("After score += 50: " + score);  // 150
        
        // Subtract and assign
        score -= 30;  // Same as: score = score - 30;
        System.out.println("After score -= 30: " + score);  // 120
        
        // Multiply and assign
        score *= 2;   // Same as: score = score * 2;
        System.out.println("After score *= 2: " + score);  // 240
        
        // Divide and assign
        score /= 4;   // Same as: score = score / 4;
        System.out.println("After score /= 4: " + score);  // 60
        
        // Modulus and assign
        score %= 7;   // Same as: score = score % 7;
        System.out.println("After score %= 7: " + score);  // 4
    }
}
```

**All Compound Operators:**
- `+=` (add and assign)
- `-=` (subtract and assign)
- `*=` (multiply and assign)
- `/=` (divide and assign)
- `%=` (modulus and assign)

### Operator Precedence

Just like in math, Java follows an order of operations!

**Remember PEMDAS from math class?**
- **P**arentheses
- **E**xponents (not covered yet)
- **M**ultiplication and **D**ivision (left to right)
- **A**ddition and **S**ubtraction (left to right)

```java
package al.istep.javacourse.lesson2;

public class OperatorPrecedence {
    public static void main(String[] args) {
        // Without parentheses
        int result1 = 5 + 3 * 2;
        System.out.println("5 + 3 * 2 = " + result1);  // 11 (not 16!)
        // Explanation: 3 * 2 = 6, then 5 + 6 = 11
        
        // With parentheses
        int result2 = (5 + 3) * 2;
        System.out.println("(5 + 3) * 2 = " + result2);  // 16
        // Explanation: 5 + 3 = 8, then 8 * 2 = 16
        
        // More examples
        int result3 = 10 - 4 + 2;
        System.out.println("10 - 4 + 2 = " + result3);  // 8 (left to right)
        
        int result4 = 10 / 2 * 3;
        System.out.println("10 / 2 * 3 = " + result4);  // 15 (left to right)
        
        int result5 = 10 - (4 + 2);
        System.out.println("10 - (4 + 2) = " + result5);  // 4
    }
}
```

**Precedence Table** (highest to lowest):

| Priority | Operators | Description |
|----------|-----------|-------------|
| 1 | `()` | Parentheses (highest) |
| 2 | `++`, `--`, `-` (unary) | Increment, decrement, negation |
| 3 | `*`, `/`, `%` | Multiplication, division, modulus |
| 4 | `+`, `-` | Addition, subtraction |
| 5 | `=`, `+=`, `-=`, etc. | Assignment (lowest) |

**Pro Tip:** When in doubt, use parentheses! They make your code clearer even when not strictly needed.

---

## Part 5: Putting It All Together

Let's create some complete programs that use everything we learned!

### Example 1: Circle Calculator

```java
package al.istep.javacourse.lesson2;

public class CircleCalculator {
    public static void main(String[] args) {
        final double PI = 3.14159265359;
        
        double radius = 5.0;
        
        // Calculate circumference: C = 2 * π * r
        double circumference = 2 * PI * radius;
        
        // Calculate area: A = π * r²
        double area = PI * radius * radius;
        
        System.out.println("=== CIRCLE CALCULATOR ===");
        System.out.println("Radius: " + radius + " units");
        System.out.println("Circumference: " + circumference + " units");
        System.out.println("Area: " + area + " square units");
    }
}
```

### Example 2: Temperature Converter

```java
package al.istep.javacourse.lesson2;

public class TemperatureConverter {
    public static void main(String[] args) {
        double celsius = 25.0;
        
        // Convert to Fahrenheit: F = (C × 9/5) + 32
        double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
        
        // Convert to Kelvin: K = C + 273.15
        double kelvin = celsius + 273.15;
        
        System.out.println("=== TEMPERATURE CONVERTER ===");
        System.out.println(celsius + "°C is equal to:");
        System.out.println("  " + fahrenheit + "°F");
        System.out.println("  " + kelvin + " K");
    }
}
```

### Example 3: Time Calculator

```java
package al.istep.javacourse.lesson2;

public class TimeCalculator {
    public static void main(String[] args) {
        int totalSeconds = 3725;  // Some number of seconds
        
        // Calculate hours
        int hours = totalSeconds / 3600;
        int remainingSeconds = totalSeconds % 3600;
        
        // Calculate minutes
        int minutes = remainingSeconds / 60;
        
        // Calculate remaining seconds
        int seconds = remainingSeconds % 60;
        
        System.out.println("=== TIME CALCULATOR ===");
        System.out.println(totalSeconds + " seconds is equal to:");
        System.out.println(hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");
    }
}
```

**Output:**
```
=== TIME CALCULATOR ===
3725 seconds is equal to:
1 hours, 2 minutes, and 5 seconds
```

### Example 4: Shopping Receipt

```java
package al.istep.javacourse.lesson2;

public class ShoppingReceipt {
    public static void main(String[] args) {
        // Item prices
        double bookPrice = 12.99;
        double penPrice = 1.50;
        double notebookPrice = 3.75;
        
        // Quantities
        int bookQty = 2;
        int penQty = 5;
        int notebookQty = 3;
        
        // Calculate totals
        double bookTotal = bookPrice * bookQty;
        double penTotal = penPrice * penQty;
        double notebookTotal = notebookPrice * notebookQty;
        
        // Calculate subtotal
        double subtotal = bookTotal + penTotal + notebookTotal;
        
        // Calculate tax (8%)
        double taxRate = 0.08;
        double tax = subtotal * taxRate;
        
        // Calculate final total
        double total = subtotal + tax;
        
        // Print receipt
        System.out.println("=============================");
        System.out.println("      SCHOOL SUPPLIES        ");
        System.out.println("=============================");
        System.out.println("Books      x" + bookQty + "  $" + bookTotal);
        System.out.println("Pens       x" + penQty + "  $" + penTotal);
        System.out.println("Notebooks  x" + notebookQty + "  $" + notebookTotal);
        System.out.println("-----------------------------");
        System.out.println("Subtotal:        $" + subtotal);
        System.out.println("Tax (8%):        $" + tax);
        System.out.println("-----------------------------");
        System.out.println("TOTAL:           $" + total);
        System.out.println("=============================");
    }
}
```

### Example 5: Game Score Tracker

```java
package al.istep.javacourse.lesson2;

public class GameScoreTracker {
    public static void main(String[] args) {
        String playerName = "Alex";
        int level = 1;
        int baseScore = 0;
        
        System.out.println("=== GAME SCORE TRACKER ===");
        System.out.println("Player: " + playerName);
        System.out.println("Starting Level " + level);
        System.out.println("Score: " + baseScore);
        System.out.println();
        
        // Level 1
        System.out.println("--- Level 1 ---");
        int enemiesDefeated = 5;
        int pointsPerEnemy = 10;
        int bonus = 50;
        
        baseScore += enemiesDefeated * pointsPerEnemy;
        baseScore += bonus;
        level++;
        
        System.out.println("Defeated " + enemiesDefeated + " enemies");
        System.out.println("Level complete bonus: +" + bonus);
        System.out.println("Current score: " + baseScore);
        System.out.println();
        
        // Level 2
        System.out.println("--- Level 2 ---");
        enemiesDefeated = 8;
        pointsPerEnemy = 15;
        bonus = 100;
        
        baseScore += enemiesDefeated * pointsPerEnemy;
        baseScore += bonus;
        level++;
        
        System.out.println("Defeated " + enemiesDefeated + " enemies");
        System.out.println("Level complete bonus: +" + bonus);
        System.out.println("Current score: " + baseScore);
        System.out.println();
        
        // Final stats
        System.out.println("=== FINAL STATS ===");
        System.out.println("Player: " + playerName);
        System.out.println("Final Level: " + level);
        System.out.println("Final Score: " + baseScore);
    }
}
```

---

## Common Mistakes and How to Fix Them

### 1. Using a variable before declaring it

**Wrong:**
```java
age = 14;  // ❌ Error: age not declared
int age;
```

**Correct:**
```java
int age;   // ✅ Declare first
age = 14;  // Then assign
```

### 2. Assigning the wrong type

**Wrong:**
```java
int age = 14.5;  // ❌ Error: can't put decimal in int
```

**Correct:**
```java
double age = 14.5;  // ✅ Use double for decimals
```

### 3. Forgot semicolon

**Wrong:**
```java
int age = 14  // ❌ Error: missing semicolon
```

**Correct:**
```java
int age = 14;  // ✅ Don't forget the semicolon!
```

### 4. Integer division surprise

**Problem:**
```java
int result = 10 / 3;  // result is 3, not 3.333...
```

**Solution:**
```java
double result = 10.0 / 3.0;  // result is 3.333...
```

### 5. Trying to change a constant

**Wrong:**
```java
final int DAYS = 7;
DAYS = 8;  // ❌ Error: cannot assign to final variable
```

**Correct:**
```java
int days = 7;
days = 8;  // ✅ Remove 'final' if you need to change it
```

---

## Practice Exercises

### Exercise 1: Personal Info
Create a program that stores and displays:
- Your name (String)
- Your age (int)
- Your height in meters (double)
- Your favorite subject (String)
- Whether you like programming (boolean)

### Exercise 2: Rectangle Calculator
Write a program that:
- Stores the length and width of a rectangle
- Calculates and displays the perimeter (2 × length + 2 × width)
- Calculates and displays the area (length × width)

### Exercise 3: Money Calculator
Create a program that:
- Starts with $100
- Subtracts $25 for a game
- Adds $15 for helping with chores
- Subtracts $30 for a book
- Displays the remaining money

### Exercise 4: Age Calculator
Write a program that:
- Stores your age in years
- Calculates and displays your age in:
  - Months (years × 12)
  - Days (years × 365)
  - Hours (days × 24)

### Exercise 5: Grade Calculator
Create a program that:
- Stores three test scores (e.g., 85, 92, 78)
- Calculates the average
- Displays each score and the average

### Exercise 6: Pizza Party
Write a program that:
- Stores the number of people at a party
- Stores the number of pizzas
- Each pizza has 8 slices
- Calculate and display:
  - Total slices
  - Slices per person (use integer division)
  - Leftover slices (use modulus)

### Exercise 7: Speed Calculator
Create a program that calculates speed:
- Distance traveled: 150 kilometers
- Time taken: 2.5 hours
- Calculate speed (distance / time)
- Display the result

### Exercise 8: Savings Goal
Write a program that:
- You want to save $500
- You currently have $150
- You save $25 per week
- Calculate how many weeks until you reach your goal
- Display the result

---

## Summary: What You Learned

In this lesson, you learned:

1. ✅ **Variables**: How to store and use information
2. ✅ **Variable Declaration**: Creating variables
3. ✅ **Variable Assignment**: Putting values in variables
4. ✅ **Primitive Data Types**:
   - Integer types: `byte`, `short`, `int`, `long`
   - Floating-point types: `float`, `double`
   - Character type: `char`
   - Boolean type: `boolean`
5. ✅ **Constants**: Using `final` for values that don't change
6. ✅ **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
7. ✅ **Unary Operators**: `+`, `-`
8. ✅ **Increment/Decrement**: `++`, `--`
9. ✅ **Compound Assignment**: `+=`, `-=`, `*=`, `/=`, `%=`
10. ✅ **Operator Precedence**: Order of operations

---

## Quick Reference Card

### Data Types Cheat Sheet

```java
// Integer types
byte b = 127;                    // -128 to 127
short s = 32000;                 // -32,768 to 32,767
int i = 2000000;                 // -2 billion to 2 billion
long l = 9000000000L;            // Very large numbers

// Floating-point types
float f = 3.14f;                 // ~6-7 decimal digits
double d = 3.14159265359;        // ~15 decimal digits

// Character
char c = 'A';                    // Single character

// Boolean
boolean bool = true;             // true or false

// String (not primitive, but commonly used)
String text = "Hello World!";    // Text
```

### Operators Cheat Sheet

```java
// Arithmetic
int sum = a + b;                 // Addition
int diff = a - b;                // Subtraction
int product = a * b;             // Multiplication
int quotient = a / b;            // Division
int remainder = a % b;           // Modulus

// Unary
int positive = +a;               // Unary plus
int negative = -a;               // Unary minus

// Increment/Decrement
a++;                             // Increment by 1
a--;                             // Decrement by 1

// Compound Assignment
a += 5;                          // a = a + 5
a -= 3;                          // a = a - 3
a *= 2;                          // a = a * 2
a /= 4;                          // a = a / 4
a %= 7;                          // a = a % 7
```

---

## Next Lesson Preview

In Lesson 3, you'll learn about:
- **Classes and Objects**: Creating your own data types!
- **Methods**: Making your code reusable
- **Object-Oriented Programming**: A powerful way to organize code

You're making great progress! Keep up the excellent work! 🌟

---

## Additional Tips for Success

1. **Type along**: Don't just read - type every example yourself!
2. **Experiment**: Change values and see what happens
3. **Make mistakes**: Errors are how you learn - don't fear them!
4. **Take breaks**: Give your brain time to process new information
5. **Practice daily**: Even 15 minutes a day makes a big difference
6. **Ask questions**: No question is too small or silly
7. **Have fun**: Programming is creative and fun!

**Remember**: Every expert programmer was once exactly where you are now. You've got this! 💪🚀
