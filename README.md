# Generic Editor

A powerful, framework-agnostic, and **100% customizable** React library for creating dynamic layouts, template generation, and visual editing. Designed to be the design engine within your application (Web, Electron, Tauri, Next.js, etc.).

---

## 📚 Table of Contents

1. [Installation and Configuration](#installation-and-configuration)
2. [User Guide (Visual Interface)](#user-guide-visual-interface)
   - [Basic Manipulation](#basic-manipulation)
   - [Context Menu and Styling](#context-menu-and-styling)
   - [Working with Text and Fonts](#working-with-text-and-fonts)
   - [Working with Images](#working-with-images)
3. [Developer Guide (Integration)](#developer-guide-integration)
   - [Initialization and Props](#initialization-and-props)
   - [Data Binding and Variables](#data-binding-and-variables)
   - [Modes: Single Item vs. List](#modes-single-item-vs-list)
   - [JSON Structure](#json-structure)
   - [Generating HTML (Backend/Print)](#generating-html-backendprint)
4. [API Reference](#api-reference)

---

## Installation and Configuration

### 1. Install the package

```bash
npm install @1urso/generic-editor
# or
yarn add @1urso/generic-editor
```

### 2. Install Peer Dependencies

The editor uses modern libraries to ensure performance and accessibility. You need to install them in your project:

```bash
npm install @radix-ui/themes @radix-ui/react-icons react-resizable-panels re-resizable framer-motion @dnd-kit/core
```

### 3. Import Styles

In your application entry file (e.g., `main.tsx`, `App.tsx`, or `layout.tsx` in Next.js), import the editor's CSS (required for the context menu) and Radix UI:

```tsx
import "@1urso/generic-editor/dist/generic-editor.css"; // Essential for the editor to work
import "@radix-ui/themes/styles.css";
```

---

## User Guide (Visual Interface)

This section describes the features available to the **end user** who will use the editor on your platform.

### Basic Manipulation

The editor offers an experience similar to design tools like Canva or Figma:

- **Add Elements**: Use the sidebar (or buttons you implement) to drag or click and add Texts, Images, or Boxes.
- **Move**: Click and drag any element to reposition it.
- **Resize**: Click on the element to select it. Pull the handles (blue squares) on the edges or corners to change the size.
- **Rotate**: When selecting an element, a circular handle will appear above it. Click and drag to rotate freely.
- **Delete**: Select an element and press the `Delete` key or use the context menu.

### Context Menu and Styling

**Right-click** on any element to open the advanced options menu.

#### General Options (All Elements)

- **Duplicate**: Creates an exact copy of the element next to the original.
- **Remove**: Deletes the element.
- **Layers**:
  - _Bring to front_: Places the element above all others.
  - _Send to back_: Places the element behind all others.
- **Background Color**: Changes the background color of the element (includes transparent).
- **Borders**:
  - _Radius_: From 0px (square) to 50% (circle/oval).
  - _Thickness_: Adds a solid border from 1px to 4px.

### Settings and Test Data

At the top of the left sidebar, the **Settings** button (gear icon) allows you to simulate how the layout will look with real data.

- **List Configuration Tab**:
  - _Sort Property_: Defines which field will be used to sort the list (e.g., `price`, `name`).
  - _Order_: Ascending or Descending.
  - _Newest Position_: Defines where the newest item appears ('top' or 'bottom').
  - _Scroll Behavior_: Defines the scroll direction ('down' - default, or 'up' - chat-like).

### Working with Text and Fonts

When right-clicking on a **Text** element:

- **Edit Text**: Opens a window to type content. This is where you insert variables (e.g., Customer Name) by clicking on the available buttons.
- **Font**: Select from various web-safe fonts (Arial, Helvetica, etc.) and popular Google Fonts (Roboto, Open Sans, Montserrat).
  - _Import Google Font_: Allows you to type the name of any Google Fonts font (e.g., "Pacifico") and the editor will automatically load it.
- **Size**: Adjust from 12px to 64px.
- **Text Color**: Pre-defined color palette.
- **Weight**: Normal or Bold.
- **Alignment**: Left, Center, or Right.
- **Vertical Alignment**: Top, Center, or Bottom.

### Working with Images

When right-clicking on an **Image** element:

- **Change Image**:
  - _Upload_: Upload an image from your computer.
  - _URL_: Paste a direct link to an image from the web.
- **Fit (Object Fit)**:
  - _Fit (Contain)_: The entire image is shown inside the box, maintaining proportions (may leave white space).
  - _Stretch (Fill)_: The image fills the entire box, potentially being cropped or distorted depending on the aspect ratio.
- **Bind Data**: Connects the image to a dynamic variable (e.g., Product Photo).

---

## Developer Guide (Integration)

### Initialization and Props

To start the editor, you must provide the `layout` configuration which dictates what data (variables) will be available to the user.

```tsx
import { EditorContent } from "@1urso/generic-editor";

const config = {
  isList: false, // Single mode (e.g., ID Card) or List (e.g., Catalog)
  name: "Employee ID Card",
  props: [
    // Define the variables that will appear in the "Insert Variable" button
    { name: "Full Name", dataName: "nome" },
    { name: "Role", dataName: "cargo" },
    { name: "Profile Picture", dataName: "fotoUrl" },
  ],
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <EditorContent
        layout={config}
        onSave={(json) => saveToBackend(json)}
        theme="light" // Optional: 'light' or 'dark'
      />
    </div>
  );
}
```

### Data Binding and Variables

The editor uses an interpolation system based on double braces `{{key}}`.

1.  **Insertion**: The user does not need to type `{{...}}` manually. In the text edit window, they will see buttons (badges) with friendly names (e.g., "Full Name"). Clicking them inserts the `{{nome}}` code.
2.  **Rendering**:
    - If `data = { nome: "Maria" }`, the text "Hello {{nome}}" becomes "Hello Maria".
    - If the variable does not exist in the data, the editor keeps the original text `{{nome}}` or displays empty, depending on the configuration.

### Modes: Single Item vs. List

The `isList` property drastically changes how the editor and HTML generator behave.

#### `isList: false` (Single Mode)

- **Usage**: Certificates, ID Cards, Banners, Covers.
- **Data**: Expects a **Single Object** `{ nome: 'John', cargo: 'Dev' }`.
- **Canvas**: Shows a single page/art.

#### `isList: true` (List Mode)

- **Usage**: Price Lists, Catalogs, Shelf Labels, Reports.
- **Data**: Expects an **Array of Objects** `[{ nome: 'A' }, { nome: 'B' }]`.
- **Canvas**:
  - The user designs the "Template Item".
  - The editor repeats this model vertically for each item in the mock data array.
  - Allows visualization of how the list behaves with multiple items.
  - **Height Limit**: Elements are constrained within the defined item height (canvas height).

### JSON Structure

The output of `onSave` is a JSON ready to be stored.

```json
{
  "isList": false,
  "elements": [
    {
      "id": "uuid-v4",
      "type": "text", // 'text' | 'image' | 'box'
      "content": "Name: {{nome}}",
      "x": 50,
      "y": 100,
      "width": 200,
      "height": 40,
      "rotation": 0,
      "style": {
        "color": "#000000",
        "fontSize": "16px",
        "fontFamily": "Roboto",
        "textAlign": "center"
      },
      "dataBinding": "nome" // Optional, used for direct binding
    }
  ],
  "listSettings": {
    "sortProp": "nome",
    "sortOrder": "asc",
    "newestPosition": "bottom",
    "scrollDirection": "down"
  }
}
```

### Generating HTML (Backend/Print)

To generate the final result (for printing, saving as PDF, or sending via email), use the `generateHTML` function. It runs in any JS environment (Node, Browser, etc.).

```typescript
import { generateHTML } from "@1urso/generic-editor";

// 1. Load layout and data
const layout = JSON.parse(db.getLayout());
const dados = db.getFuncionarios(); // Array or Object

// 2. Generate HTML
const htmlString = generateHTML(layout.elements, dados, {
  isList: layout.isList, // Important to pass the correct mode
  listSettings: layout.listSettings,
  canvasHeight: layout.canvasHeight, // Optional: Force item height
});

// 3. Inject where needed
document.getElementById("preview").innerHTML = htmlString;
```

---

## API Reference

### Component `<EditorContent />`

| Property       | Type                     | Required | Default | Description                                   |
| -------------- | ------------------------ | -------- | ------- | --------------------------------------------- |
| `layout`       | `ILayout`                | **Yes**  | -       | Initial configuration of variables and mode.  |
| `initialState` | `any`                    | No       | `null`  | JSON state to load a saved layout.            |
| `onSave`       | `(json: string) => void` | No       | -       | Callback triggered when clicking Save button. |
| `mockData`     | `any[]`                  | No       | `[]`    | Data for immediate preview during editing.    |

### TypeScript Types

#### `ILayout`

```typescript
interface ILayout {
  name: string; // Layout name (metadata)
  isList?: boolean; // Defines default behavior (List or Single)
  props: IProp[]; // List of available variables
}
```

#### `IProp`

```typescript
interface IProp {
  name: string; // Visible label (e.g., "Product Price")
  dataName: string; // Object key (e.g., "product_price")
}
```

#### `EditorProps`

| Prop           | Type                     | Required | Description                           |
| -------------- | ------------------------ | -------- | ------------------------------------- |
| `layout`       | `ILayout`                | Yes      | Initial configuration and metadata.   |
| `onSave`       | `(json: string) => void` | No       | Callback triggered on save.           |
| `initialState` | `any`                    | No       | Previously saved state (parsed JSON). |
| `theme`        | `'light' \| 'dark'`      | No       | Interface theme (default: `'light'`). |
