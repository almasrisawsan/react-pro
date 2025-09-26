import TeaSet from "./components/TeaSet";

export default function App() {
  return (
    <TeaSet />

    // <div style={person.theme}>
    //   <h1>{person.name}'s Todos</h1>
    //   <img
    //     className="avatar"
    //     src="https://i.imgur.com/7vQD0fPs.jpg"
    //     alt="Gregorio Y. Zara"
    //   />
    //   <ul>
    //     <li>Improve the videophone</li>
    //     <li>Prepare aeronautics lectures</li>
    //     <li>Work on the alcohol-fuelled engine</li>
    //   </ul>
    // </div>
  );
}

// Recap
// 1. Created a new React app using Vite
// 2. Created components: Header, Footer, SideNav, MainContent
// 3. Rendered SideNav and MainContent side by side in the App component
// 4. Ensured all components are properly imported and exported

//Notes:
// - React lets you create reusable UI components.
// - In React app, every UI element is a component.
// - React components are regular JavaScript functions except:
//   - They return JSX (JavaScript XML) which looks like HTML.
//   - The component name must start with a capital letter.

// Rules of JSX
// 1. JSX must have only one parent element.
// 2. Close all tags.

// More on React
// 1. Todo component example

// 2. Passing props to components , destructuring and default values -> Profile.jsx
// 3. children props -> profile folder
// 4. exercises -> Ex1
// 5. Conditional rendering and ternary operation -> PackingList.jsx
// 6. Rendering lists -> List.jsx
// 7. exercises -> Ex2
// 8. Filtering array of items -> filtered-list folder
// 9. Keeping list items in order with keys -> filtered-list folder
// 10. Keep components pure -> TeaSet.jsx ->
//    Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure!
// 11. exercises -> Ex3
// 12. Styling React components -> InlineStyle.jsx, CssStyle.jsx, CSSModules.jsx, StyledComponents.jsx, other options like emotion, tailwind ... etc
