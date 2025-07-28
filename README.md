# Fundamentals of Java Programming


## Welcome to the Fundamentals of Java Programming!

This repository is designed to be a comprehensive resource for beginners starting their journey into the world of Java. It covers the essential concepts of Java programming, from the very basics to the core principles of Object-Oriented Programming (OOP). This README.md file serves as a guide to the topics covered in this repository, providing clear explanations and code examples to help you learn and practice.

## Table of Contents

*   [Prerequisites](#prerequisites)
*   [Getting Started](#getting-started)
*   [Core Java Concepts](#core-java-concepts)
    *   [Basic Syntax](#basic-syntax)
    *   [Data Types](#data-types)
    *   [Variables](#variables)
    *   [Operators](#operators)
    *   [Control Flow](#control-flow)
    *   [Arrays](#arrays)
*   [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
    *   [Classes and Objects](#classes-and-objects)
    *   [Inheritance](#inheritance)
    *   [Polymorphism](#polymorphism)
    *   [Encapsulation](#encapsulation)
    *   [Abstraction](#abstraction)
*   [How to Contribute](#how-to-contribute)
*   [License](#license)

## Prerequisites

Before you begin, you should have a basic understanding of computer programming concepts. No prior knowledge of Java is required.

You will need to have the following installed on your system:

*   **Java Development Kit (JDK):** Make sure you have a recent version of the JDK installed. You can download it from the [Oracle website](https://www.oracle.com/java/technologies/downloads/).
*   **A text editor or Integrated Development Environment (IDE):** You can use a simple text editor like Notepad++ or a more advanced IDE like [Eclipse](https://www.eclipse.org/downloads/), [IntelliJ IDEA](https://www.jetbrains.com/idea/download/), or [Visual Studio Code](https://code.visualstudio.com/download) with the Java extension pack.

## Getting Started

To get started with the examples in this repository, you can clone it to your local machine using the following command:

```bash
git clone https://github.com/your-username/fundamentals-of-java-programming.git
```

Each topic is organized into its own folder containing Java files with code examples. You can compile and run these examples from the command line or by using your IDE.

To compile a Java file (e.g., `HelloWorld.java`) from the command line:

```bash
javac HelloWorld.java
```

To run the compiled code:

```bash
java HelloWorld
```

## Core Java Concepts

This section covers the foundational concepts of the Java programming language.

### Basic Syntax

Every Java program has a basic structure. Here's a simple "Hello, World!" example:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Data Types

Java has two categories of data types: primitive and reference.

*   **Primitive Data Types:** These are the most basic data types available in Java. Examples include `int`, `double`, `char`, and `boolean`.
*   **Reference Data Types:** These refer to objects. Examples include `String`, arrays, and any user-defined classes.

### Variables

Variables are used to store data values. In Java, each variable must have a declared data type.

```java
// Declaring and initializing variables
int age = 25;
String name = "John Doe";
boolean isStudent = true;
```

### Operators

Java provides a rich set of operators to perform operations. These include arithmetic, relational, logical, and assignment operators.

```java
int a = 10;
int b = 5;

// Arithmetic operators
int sum = a + b; // 15
int difference = a - b; // 5

// Relational operators
boolean isEqual = (a == b); // false

// Logical operators
boolean logicalAnd = (a > 0 && b > 0); // true
```

### Control Flow

Control flow statements are used to control the order in which statements are executed.

*   **Conditional Statements:** `if`, `else if`, and `else` are used to make decisions.

    ```java
    int number = 10;

    if (number > 0) {
        System.out.println("The number is positive.");
    } else if (number < 0) {
        System.out.println("The number is negative.");
    } else {
        System.out.println("The number is zero.");
    }
    ```

*   **Loops:** `for`, `while`, and `do-while` loops are used for iteration.

    ```java
    // for loop
    for (int i = 0; i < 5; i++) {
        System.out.println("Iteration: " + i);
    }

    // while loop
    int count = 0;
    while (count < 3) {
        System.out.println("Count: " + count);
        count++;
    }
    ```

### Arrays

Arrays are used to store multiple values of the same data type in a single variable.

```java
// Declaring and initializing an array of integers
int[] numbers = {1, 2, 3, 4, 5};

// Accessing an element of the array
System.out.println("The first element is: " + numbers[0]); // Outputs 1
```

## Object-Oriented Programming (OOP)

Java is an object-oriented programming language. The core principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.

### Classes and Objects

*   **Class:** A blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that an object will have.
*   **Object:** An instance of a class.

```java
// Defining a simple class
class Dog {
    String breed;
    int age;

    void bark() {
        System.out.println("Woof!");
    }
}

// Creating an object of the Dog class
Dog myDog = new Dog();
myDog.breed = "Golden Retriever";
myDog.age = 3;
myDog.bark();
```

### Inheritance

Inheritance is a mechanism where a new class (subclass or child class) inherits the properties and methods of an existing class (superclass or parent class).

```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}
```

### Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It is often referred to as "one interface, multiple implementations."

```java
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}
```

### Encapsulation

Encapsulation is the bundling of data (attributes) and the methods that operate on that data into a single unit (a class). It also involves restricting direct access to some of an object's components.

```java
class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}
```

### Abstraction

Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It is achieved using abstract classes and interfaces.

```java
// Abstract class
abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}
```

## How to Contribute

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
