

## 1. What is Emmet?

**Answer:**  
Emmet is **a web development toolkit and plugin for code editors that speeds up writing HTML and CSS**.  
It allows developers to use shorthand abbreviations that expand into complete code structures, saving time and effort.

---

## 2. Difference Between a Library and a Framework?

**Answer:**  
- A **library** is a collection of reusable code that provides specific functionalities.  
  The **developer maintains control**, calling library functions as needed.  
- A **framework** provides a **structured environment** that dictates the application's flow and architecture.  
  It typically calls the developer’s code to fill in the details (**inversion of control**).

---

## 3. What is a CDN? Why Do We Use It?

**Answer:**  
A **Content Delivery Network (CDN)** is a geographically distributed network of servers that work together to **deliver web content to users faster**, improving website performance and reducing load times.

---

## 4. Why is React Called "React"?

**Answer:**  
React is called "React" because **it reacts to changes in data** by efficiently updating the user interface (UI).  
When data changes in a React app, components depending on that data **automatically re-render**, providing a responsive user experience.

---

## 5. What is Cross-Origin in a Script Tag?

**Answer:**  
A **cross-origin request** is a request for a resource (e.g., stylesheets, iframes, images, fonts, or scripts) **from a different domain** than the one the current page is served from.

---

## 6. Difference Between React and React DOM?

**Answer:**  
- **React** is a JavaScript library for building user interfaces.  
- **React DOM** is a separate package that provides methods for **rendering React components into the browser's DOM**.

---

## 7. Difference Between `react.development.js` and `react.production.js` (via CDN)

### 1. `react.development.js`
- Intended for development use.
- Includes **detailed error messages and warnings**.
- Larger in size and slower.
- Helps with debugging and development.

### 2. `react.production.js`
- Optimized for production.
- **Smaller, faster**, and **stripped of debugging features**.
- Should be used when deploying to users.

---

## 8. What is `async` and `defer`?

**Answer:**  
`async` and `defer` are **HTML attributes** used with `<script>` tags to control **how and when JavaScript files are loaded and executed** on a web page.

---

### 🔹 `async`

- Loads the script **asynchronously** while HTML continues parsing.
- Executes **immediately after the script is downloaded**, possibly **before HTML is fully parsed**.
- **Use Case:** Scripts that don’t depend on or affect the DOM structure (e.g., analytics).

```html
<script src="script.js" async></script>
```

### 🔹 `defer`

- Loads the script **asynchronously**, like `async`.
- **Defers execution** until **after the HTML is fully parsed**.
- Ensures the script runs **only when the DOM is ready**.
- **Use Case:** Scripts that interact with or manipulate DOM elements.

```html
<script src="script.js" defer></script>
```



