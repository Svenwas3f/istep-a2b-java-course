# Lesson 1: Installing Java and Creating Your First Program

Welcome to your Java programming journey! 🎉 In this lesson, you'll set up everything you need to start coding in Java and create your very first program.

## What is Java?

Java is a programming language that lets you tell computers what to do. Think of it like learning a new language to talk to your computer! With Java, you can:
- Create games
- Build apps for phones
- Make websites
- Control robots
- And much more!

Java was created in 1995 by a company called Sun Microsystems (now owned by Oracle). Today, millions of programmers around the world use Java, and it's one of the most popular programming languages ever created!

### Why is Java Special?

1. **Write Once, Run Anywhere**: You can write a Java program on your Windows computer, and it will also work on Mac or Linux computers without any changes!
2. **Easy to Learn**: Java has clear rules and structure, making it great for beginners.
3. **Very Popular**: Many companies use Java, so learning it is a valuable skill.
4. **Safe**: Java has built-in protections to prevent many common programming mistakes.

---

## Part 1: Installing Java (JDK)

JDK stands for "Java Development Kit" - it's a special toolbox that contains everything you need to write and run Java programs.

### Step 1: Download Java JDK 17

1. **Open your web browser** (Chrome, Firefox, Safari, etc.)
2. **Visit this website**: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
3. **Find the right installer for your computer**:

#### For Windows Users:
- Look for **"Windows x64 Installer"**
- Click the download link
- The file will be named something like `jdk-17_windows-x64_bin.exe`

#### For Linux Users:
- Choose one of these based on your Linux version:
  - **"Linux x64 Debian Package"** (for Ubuntu, Debian, Mint) - ends with `.deb`
  - **"Linux x64 RPM Package"** (for Fedora, Red Hat, CentOS) - ends with `.rpm`
  - **"Linux Arm 64 RPM Package"** (for ARM-based Linux computers)

#### For Mac Users:
- Look for:
  - **"macOS Arm 64 DMG Installer"** (for M1, M2, M3 Macs) - newer Macs
  - **"macOS x64 DMG Installer"** (for Intel Macs) - older Macs
- Not sure which Mac you have? Click the Apple menu () → "About This Mac" → Look at "Chip" or "Processor"

**Note**: You might need to create a free Oracle account to download. It's safe and free!

### Step 2: Install Java JDK

Now that you've downloaded the file, let's install it!

#### Windows Installation:
1. Find the downloaded `.exe` file (usually in your "Downloads" folder)
2. **Double-click** the file
3. Click "Yes" if Windows asks for permission
4. Click "Next" through the installation wizard
5. Choose the default installation location (or remember where you install it!)
6. Click "Next" and then "Close" when finished

#### Linux Installation:

**For Debian/Ubuntu (.deb file)**:
1. Open Terminal (press Ctrl+Alt+T)
2. Navigate to your Downloads folder:
   ```bash
   cd ~/Downloads
   ```
3. Run this command (replace the filename with your actual file):
   ```bash
   sudo dpkg -i jdk-17_linux-x64_bin.deb
   ```
4. Enter your password when asked

**For Fedora/RedHat (.rpm file)**:
1. Open Terminal
2. Navigate to your Downloads folder:
   ```bash
   cd ~/Downloads
   ```
3. Run this command (replace the filename with your actual file):
   ```bash
   sudo dnf install jdk-17_linux-x64_bin.rpm
   ```
4. Enter your password when asked

#### Mac Installation:
1. Find the downloaded `.dmg` file
2. **Double-click** the file
3. A window will open with an installer icon
4. **Double-click** the installer icon
5. Click "Continue" and follow the instructions
6. Enter your password when asked
7. Click "Close" when finished

### Step 3: Verify Java Installation

Let's check that Java installed correctly!

1. **Open your terminal/command prompt**:
   - **Windows**: Press Windows Key + R, type `cmd`, press Enter
   - **Mac**: Press Cmd + Space, type "Terminal", press Enter
   - **Linux**: Press Ctrl + Alt + T

2. **Type this command** and press Enter:
   ```bash
   java -version
   ```

3. **You should see something like**:
   ```
   java version "17.0.x"
   Java(TM) SE Runtime Environment (build 17.0.x)
   Java HotSpot(TM) 64-Bit Server VM (build 17.0.x)
   ```

**If you see this, congratulations! ✅ Java is installed!**

**If you get an error**, it means Java isn't properly installed. Try:
- Restarting your computer
- Running the installer again
- Asking a teacher or parent for help

---

## Part 2: Installing Visual Studio Code

Visual Studio Code (VS Code) is a **code editor** - think of it as a super-powered text editor specifically designed for writing code. It's free, fast, and very popular among programmers!

### Step 1: Download Visual Studio Code

1. **Visit**: https://code.visualstudio.com/
2. You'll see a big download button that automatically detects your operating system:
   - **"Download for Windows"**
   - **"Download for Mac"**
   - **"Download for Linux"**
3. **Click the button** to download

### Step 2: Install Visual Studio Code

#### Windows:
1. Find the downloaded file (usually `VSCodeSetup-x64-x.xx.x.exe`)
2. **Double-click** the file
3. Accept the license agreement
4. **Important**: Check these boxes:
   - ✅ "Add to PATH"
   - ✅ "Create a desktop icon" (optional, but helpful!)
   - ✅ "Add 'Open with Code' action to Windows Explorer file context menu"
5. Click "Next" and then "Install"
6. Click "Finish"

#### Linux:
**For Debian/Ubuntu (.deb file)**:
```bash
cd ~/Downloads
sudo dpkg -i code_*.deb
```

**For Fedora/RedHat (.rpm file)**:
```bash
cd ~/Downloads
sudo dnf install code-*.rpm
```

#### Mac:
1. Open the downloaded `.dmg` file
2. Drag the Visual Studio Code icon to your Applications folder
3. Open Applications and double-click Visual Studio Code

### Step 3: Install Java Extension Pack

VS Code needs some special helper tools (called "extensions") to work well with Java.

1. **Open Visual Studio Code**
2. **Method 1 - Use the website**:
   - Visit: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
   - Click the green "Install" button
   - Your browser will ask to open VS Code - click "Yes" or "Open"
   - VS Code will open and start installing the extension
   
3. **Method 2 - Use VS Code directly**:
   - In VS Code, click the Extensions icon on the left side (it looks like 4 squares)
   - In the search box, type: `Java Extension Pack`
   - Find the one by Microsoft
   - Click the blue "Install" button

**What does this extension pack include?**
- Language Support for Java - helps VS Code understand Java code
- Debugger for Java - helps you find and fix problems in your code
- Test Runner for Java - helps you test your code
- Project Manager for Java - helps organize your projects
- Visual Studio IntelliCode - gives you smart suggestions while typing

Wait for all extensions to install. You'll see a progress indicator at the bottom of VS Code.

---

## Part 3: Creating Your First Java Program

Now comes the exciting part - writing your very first Java program! We're going to create a program that displays "Hello World!" in the terminal. This is a tradition in programming - every programmer's first program usually displays "Hello World!"

### Step 1: Create Your Java Project Folder

1. **Create a folder for your Java projects**:
   - **Windows**: Open File Explorer, go to your Documents folder, create a new folder called `JavaCourse`
   - **Mac**: Open Finder, go to your Documents folder, create a new folder called `JavaCourse`
   - **Linux**: Open your file manager, go to your home folder, create a new folder called `JavaCourse`

2. **Open this folder in VS Code**:
   - Open Visual Studio Code
   - Click "File" → "Open Folder"
   - Navigate to your `JavaCourse` folder
   - Click "Select Folder" (or "Open")

3. **Trust the folder**:
   - VS Code will ask "Do you trust the authors of the files in this folder?"
   - Click "Yes, I trust the authors"
   - (This is safe because you created the folder yourself!)

### Step 2: Create the Package Structure

In Java, we organize our code into **packages**. Think of packages like folders on your computer - they help keep things organized!

1. **In VS Code**, you'll see the folder structure on the left side (called the "Explorer")
2. **Create the package folders**:
   - In the Explorer, hover over `JAVACOURSE` and click the "New Folder" icon
   - Create a folder called: `al`
   - Inside `al`, create a folder called: `istep`
   - Inside `istep`, create a folder called: `javacourse`
   - Inside `javacourse`, create a folder called: `lesson1`

Your folder structure should look like this:
```
JavaCourse/
    └── al/
        └── istep/
            └── javacourse/
                └── lesson1/
```

### Step 3: Create Your HelloWorld.java File

1. **Right-click** on the `lesson1` folder
2. Select **"New File"**
3. Name it: `HelloWorld.java`
4. Make sure you type it exactly like that - Java is case-sensitive! (The capital H and W are important!)

### Step 4: Write Your First Java Program

Now, let's write the code! Click on `HelloWorld.java` to open it, and type this code **exactly** as shown:

```java
package al.istep.javacourse.lesson1;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

**Let's understand what each part means:**

#### Line 1: `package al.istep.javacourse.lesson1;`
- This line tells Java which package (folder) this file belongs to
- It matches the folder structure we created: al/istep/javacourse/lesson1
- Think of it like writing your address on an envelope!

#### Line 3: `public class HelloWorld {`
- Every Java program is built from "classes" (we'll learn more about these later)
- `public` means other programs can use this class
- `class` is a keyword that says "I'm creating a class"
- `HelloWorld` is the name of our class - it **must match** the filename!
- The `{` symbol opens the class (like opening a box)

#### Line 4: `public static void main(String[] args) {`
- This is the **main method** - it's where your program starts running
- Every Java program needs a main method
- Think of it as the "play button" for your program
- You don't need to understand every word yet - just know that this line is required!

#### Line 5: `System.out.println("Hello World!");`
- This is the actual command that does something!
- `System.out.println` means "print a line to the screen"
- The text between the quotes `"Hello World!"` is what gets printed
- The semicolon `;` at the end is like a period at the end of a sentence

#### Lines 6-7: `}` and `}`
- These closing brackets `}` close what we opened with `{`
- The first `}` closes the main method
- The second `}` closes the HelloWorld class
- Every `{` needs a matching `}`!

### Step 5: Run Your Program!

This is the moment of truth - let's run your program!

**Method 1 - Using the Run Button:**
1. You should see a small "Run" button (▶️) above your code, near the line that says `public static void main`
2. Click the "Run" button
3. A terminal will open at the bottom of VS Code
4. You should see: `Hello World!`

**Method 2 - Using the Terminal:**
1. In VS Code, click "Terminal" → "New Terminal"
2. A terminal will open at the bottom
3. Type these commands:
   ```bash
   javac al/istep/javacourse/lesson1/HelloWorld.java
   java al.istep.javacourse.lesson1.HelloWorld
   ```
4. Press Enter after each command
5. You should see: `Hello World!`

**🎉 Congratulations! You just wrote and ran your first Java program!**

---

## Part 4: Let's Experiment!

Now that you have a working program, let's try some modifications to learn more!

### Experiment 1: Change the Message

Change line 5 to print different messages:

```java
System.out.println("My name is Alex!");
```

Or:

```java
System.out.println("I love programming!");
```

**Run your program again** to see the new message!

### Experiment 2: Print Multiple Lines

You can use multiple `println` statements:

```java
package al.istep.javacourse.lesson1;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        System.out.println("This is my first Java program.");
        System.out.println("I am learning to code!");
        System.out.println("This is so cool!");
    }
}
```

Each `println` prints on a new line!

### Experiment 3: Print Without New Lines

Use `print` instead of `println` to print without starting a new line:

```java
package al.istep.javacourse.lesson1;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.print("World");
        System.out.println("!");
        System.out.println("Everything above printed on one line!");
    }
}
```

**Output:**
```
Hello World!
Everything above printed on one line!
```

### Experiment 4: Print ASCII Art

You can even create pictures with text:

```java
package al.istep.javacourse.lesson1;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("    *    ");
        System.out.println("   ***   ");
        System.out.println("  *****  ");
        System.out.println(" ******* ");
        System.out.println("*********");
        System.out.println("    |    ");
        System.out.println("    |    ");
        System.out.println("");
        System.out.println("Look! A Christmas tree!");
    }
}
```

### Experiment 5: Using Escape Sequences

Special characters can be added using backslash `\`:

```java
package al.istep.javacourse.lesson1;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello\tWorld!");  // \t adds a tab
        System.out.println("Hello\nWorld!");  // \n adds a new line
        System.out.println("He said, \"Hello!\"");  // \" adds a quote
        System.out.println("This is a backslash: \\");  // \\ adds a backslash
    }
}
```

**Output:**
```
Hello   World!
Hello
World!
He said, "Hello!"
This is a backslash: \
```

---

## Common Mistakes and How to Fix Them

### Error: "Cannot find symbol"
**Problem**: You misspelled something or used the wrong capitalization
**Solution**: Check your spelling and make sure capitals match exactly

### Error: "Class name doesn't match filename"
**Problem**: The class name in your code doesn't match your filename
**Solution**: Make sure `class HelloWorld` matches `HelloWorld.java`

### Error: "';' expected"
**Problem**: You forgot a semicolon at the end of a line
**Solution**: Add a `;` at the end of the statement

### Error: "'}' expected"
**Problem**: You're missing a closing bracket
**Solution**: Count your curly brackets - every `{` needs a matching `}`

### Program doesn't run
**Problem**: Various issues
**Solutions**:
- Make sure you saved the file (File → Save or Ctrl+S / Cmd+S)
- Check that there are no red squiggly lines under your code
- Try closing and reopening VS Code
- Make sure Java is installed correctly

---

## Summary: What You Learned

In this lesson, you:
1. ✅ Learned what Java is and why it's awesome
2. ✅ Installed Java JDK 17 on your computer
3. ✅ Installed Visual Studio Code and the Java Extension Pack
4. ✅ Created your first Java project with proper package structure
5. ✅ Wrote your first Java program: HelloWorld
6. ✅ Learned about classes, methods, and printing to the console
7. ✅ Experimented with different ways to print text
8. ✅ Learned about common errors and how to fix them

---

## Practice Exercises

Try these on your own to practice what you learned:

### Exercise 1: About Me
Create a new file called `AboutMe.java` in the `lesson1` folder that prints:
- Your name
- Your age
- Your favorite hobby
- Your favorite food

### Exercise 2: A Story
Create a program called `Story.java` that prints a short story (at least 5 lines).

### Exercise 3: Calculator Art
Create a program called `Calculator.java` that uses ASCII art to draw a calculator.

### Exercise 4: Welcome Message
Create a program called `Welcome.java` that prints a welcome message to new students joining your class.

---

## Helpful Tips

1. **Save Often**: Press Ctrl+S (Windows/Linux) or Cmd+S (Mac) frequently to save your work
2. **Use Auto-Complete**: As you type, VS Code will suggest completions - press Tab to accept them
3. **Read Error Messages**: If something goes wrong, read the error message carefully - it usually tells you what's wrong and where
4. **Experiment**: Don't be afraid to try things! You can't break your computer by writing Java code
5. **Ask for Help**: If you get stuck, ask a teacher, friend, or search online (many programmers started just like you!)

---

## Next Lesson Preview

In Lesson 2, you'll learn about:
- Variables (storing information in your programs)
- Different types of data (numbers, text, true/false)
- Math operations in Java
- How to make your programs more interactive

Get ready to make your programs even more powerful! 🚀

---

## Additional Resources

Want to learn more? Check out these resources:
- [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/)
- [Java Documentation](https://docs.oracle.com/en/java/javase/17/)
- Practice coding at [CodingBat](https://codingbat.com/java) (great for beginners!)

**Remember**: Every expert programmer was once a beginner. Keep practicing, stay curious, and have fun coding! 💻✨
