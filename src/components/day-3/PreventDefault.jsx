export default function Signup() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    return alert("Submitting!");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input />
      <button>Send</button>
    </form>
  );
}
